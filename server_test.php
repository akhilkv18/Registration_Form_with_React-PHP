<?php
// Allow cross-origin resource sharing
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: *");
header('Content-Type: application/json');

// Establish database connection
$db_conn = mysqli_connect("localhost", "root", "", "StudentData");
if ($db_conn === false) {
    die("ERROR: Could Not Connect" . mysqli_connect_error());
}

// Check if the request method is POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validate if all fields are present and file is uploaded
    if (
        isset($_POST['name'], $_POST['email'], $_POST['gender'], $_POST['birthdate'], $_POST['phoneNumber'], $_POST['course'], $_POST['year'], $_POST['institution'], $_POST['hname'], $_POST['street'], $_POST['city'], $_POST['state'], $_POST['country'], $_POST['pin'], $_FILES['imgFile'])
    ) {
        //Setting data from the request
        $name = $_POST['name'];
        $email = $_POST['email'];
        $gender = $_POST['gender'];
        $birthdate = $_POST['birthdate'];
        $phoneNumber = $_POST['phoneNumber'];
        $course = $_POST['course'];
        $year = $_POST['year'];
        $institution = $_POST['institution'];
        $hname = $_POST['hname'];
        $street = $_POST['street'];
        $city = $_POST['city'];
        $state = $_POST['state'];
        $country = $_POST['country'];
        $pin = $_POST['pin'];
        $skills = $_POST['skills'] ?? '';
        $comments = $_POST['comments'] ?? '';

        // File handling
        $allowedExtensions = ['jpg', 'png'];
        $image = time() . $_FILES['imgFile']['name'];
        $image_temp = $_FILES['imgFile']['tmp_name'];
        $destination = $_SERVER['DOCUMENT_ROOT'] . "./uploads/" . $image;
        $fileExtension = strtolower(pathinfo($image, PATHINFO_EXTENSION));

        //Check email format and send the error message to  client if its in invalid format
        
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
            echo json_encode(["response" => "Invalid email address"]);
            exit;
            }

            
        // Check if file extension is allowed
        if (in_array($fileExtension, $allowedExtensions)) {
            // Insert into database
            $stmt = mysqli_prepare($db_conn, "INSERT INTO StudentTable (name, email, gender, birthdate, phoneNumber, course, year, institution, hname, street, city, state, country, pin, skills, comments, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)");
            mysqli_stmt_bind_param($stmt, "sssssssssssssssss", $name, $email, $gender, $birthdate, $phoneNumber, $course, $year, $institution, $hname, $street, $city, $state, $country, $pin, $skills, $comments, $image);
            $result = mysqli_stmt_execute($stmt);
            mysqli_stmt_close($stmt);

            if ($result) {
                
                // Move uploaded file to destination
                move_uploaded_file($image_temp, $destination);
                $imgUrl = "http://localhost/uploads/{$image}";
                // Send success response with user details
                $response = [
                    'message' => 'success',
                    'user' => [
                        'name' => $name,
                        'email' => $email,
                        'gender' => $gender,
                        'birthdate' => $birthdate,
                        'phoneNumber' => $phoneNumber,
                        'course' => $course,
                        'year' => $year,
                        'institution' => $institution,
                        'hname' => $hname,
                        'street' => $street,
                        'city' => $city,
                        'state' => $state,
                        'country' => $country,
                        'pin' => $pin,
                        'skills' => $skills,
                        'comments' => $comments,
                        'imgFile' => $imgUrl
                    ]
                ];
                echo json_encode($response);
            } else {
                // Check if email already exists
                $check_stmt = mysqli_prepare($db_conn, "SELECT email FROM StudentTable WHERE email = ?");
                mysqli_stmt_bind_param($check_stmt, "s", $email);
                mysqli_stmt_execute($check_stmt);
                mysqli_stmt_store_result($check_stmt);
                $email_count = mysqli_stmt_num_rows($check_stmt);
                mysqli_stmt_close($check_stmt);

                if ($email_count > 0) {
                    echo json_encode(["response" => "Email already exists"]);
                } else {
                    echo json_encode(["response" => "Failed to insert data into database"]);
                }
            }
        } else {
            echo json_encode(["response" => "Only JPG and PNG file types are allowed"]);
        }
    } else {
        echo json_encode(["response" => "All fields are required"]);
    }
}
?>
