# REGISTRATION FORM WITH REACT JS AND PHP


## Introduction:

The Student Registration Form project is a comprehensive solution designed to streamline the process of collecting and storing student information. Developed using ReactJS for the frontend and PHP for the backend, this application offers a user-friendly interface for students to input their personal, academic, and address details. Additionally, it allows users to upload a passport-size photo, enhancing the completeness of their profiles.The integration of ReactJS for frontend development and PHP for backend scripting enables the Student Registration Form project to deliver a robust, efficient, and user-friendly solution for collecting and managing student information. By leveraging the strengths of both technologies, the application ensures a seamless user experience while maintaining data integrity, security, and reliability.

## Purpose:

The primary objective of the Student Registration Form project is to simplify and streamline the often complex process of collecting and managing student information. By providing a user-friendly platform for data entry and storage, the application aims to enhance administrative efficiency and facilitate seamless communication between students and educational institutions. This purpose is driven by the recognition of the importance of accurate and comprehensive student data in various academic and administrative functions, including enrollment, record-keeping, communication, and academic planning. Through the implementation of intuitive interfaces and efficient backend processes, the project seeks to alleviate the burden on both students and administrative staff, allowing for smoother and more efficient management of student information. Additionally, by centralizing student data in a structured and accessible format, the application enables educational institutions to make informed decisions, track student progress, and provide personalized support and services to students as they navigate their academic journeys. Overall, the project aims to contribute to the improvement of educational administration and student experiences by leveraging technology to optimize the management of student information.

## Key Features:

- User-friendly Interface: The frontend interface is intuitively designed, making it easy for students to navigate and fill out their information without encountering any usability issues.

- Comprehensive Data Collection: The form includes fields for personal details such as name, email, gender, birthdate, and phone number. Additionally, it captures academic information such as degree course, year level, and institution details.

- Address Information: Students can provide their complete address details, including house name, street, city, state, country, and PIN, ensuring accurate location identification.

- Photo Upload: The application enables students to upload a passport-size photo, enhancing the visual appeal and completeness of their profiles.

- Validation and Error Handling: Mandatory fields are validated to ensure all required information is provided. Additionally, file type validation is implemented for uploaded photos, preventing the submission of unsupported formats.

- Data Storage: Submitted data is securely stored in a MySQL database, facilitating easy access and retrieval for administrative purposes.

## Technology Stack:

**ReactJS (Frontend):** ReactJS serves as the cornerstone of the frontend development in this project. Leveraging React's component-based architecture, the application's user interface is constructed using reusable and modular components, promoting code reusability and maintainability. React's virtual DOM efficiently updates and renders UI components, resulting in a smooth and responsive user experience. Additionally, React's state management capabilities, facilitated by hooks like useState and useEffect, enable dynamic data handling and seamless interaction between different parts of the application. Overall, ReactJS provides a powerful and efficient framework for building modern, interactive web applications with a focus on user experience.

**PHP (Backend):** PHP serves as the backend scripting language, responsible for processing form submissions and interacting with the MySQL database. PHP's server-side execution enables dynamic generation of HTML content based on user inputs and database queries. By encapsulating business logic and data manipulation on the server side, PHP ensures data security and integrity. Furthermore, PHP's extensive library of built-in functions and compatibility with various web servers make it a versatile choice for backend development. In this project, PHP handles tasks such as form validation, database CRUD operations, and file uploads, contributing to the robustness and functionality of the backend infrastructure.

**MySQL (Database):** MySQL is employed as the relational database management system for storing and managing student data. With its support for ACID properties and SQL queries, MySQL ensures data consistency, reliability, and scalability. The structured nature of relational databases facilitates efficient organization and retrieval of student information, enabling complex data queries and analytics. MySQL's compatibility with PHP and other programming languages makes it a popular choice for web application development. In this project, MySQL stores student details such as personal information, academic records, and address details, providing a secure and centralized repository for student data.

## Prerequisites
Before you begin, ensure you have met the following requirements:

**1.Development Environment:**

- [Visual Studio Code](https://code.visualstudio.com/): Integrated development environment (IDE) for frontend development.
- [XAMPP](https://www.apachefriends.org/index.html): Apache distribution containing MariaDB, PHP, and Perl, facilitating local backend development.
- [Google Chrome](https://www.google.com/intl/en_in/chrome/) or [Microsoft Edge](https://www.microsoft.com/en-us/edge/download?form=MA13FJ): Web browsers for testing and debugging the application.

**2.Dependencies:**

- [Node.js](https://nodejs.org/): JavaScript runtime environment required for running npm (Node Package Manager).
- npm: Package manager for installing JavaScript libraries and tools, used for managing frontend dependencies.

- Bootstrap: Frontend framework for developing responsive and mobile-first websites.

**3.Database Setup:**

- MySQL: Relational database management system (RDBMS) used for storing student information.
- phpMyAdmin: Database administration tool for managing MySQL databases via a web interface.

**3.Additional Tools:**

- [Git](https://git-scm.com/): Version control system for tracking changes in the project codebase.


## Setting Up the Project

1. **Visual Studio Code (VSCode):**
   - Download and install Visual Studio Code from the official website.

2. **PHP and a Local Server:**
   - Install XAMPP for PHP and MySQL.

3. **MySQL Database (PHPMyAdmin):**
   - Set up a MySQL database using PHPMyAdmin or any other MySQL management tool.
   - Create a database named "StudentData."



4. **React Development Environment:**
   - Install Node.js.
   - Create a new React app using Create React App. If you don't have Create React App installed, you can install it globally with:
     ```bash
     npm install -g create-react-app
     ```
     Then, create a new app:
     ```bash
     npx create-react-app reg_form
     ```

5. **Install Axios:**
   - Axios is used for making HTTP requests. Install it in your React app:
     ```bash
     npm install axios
     ```

6. **Add Bootstrap CDN:**
   - If you want to use Bootstrap for styling, you can add the Bootstrap CDN link in the `public/index.html` file in your React app:
     ```html
     <!DOCTYPE html>
     <html lang="en">
     <head>
       <meta charset="utf-8" />
       <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
       <meta name="viewport" content="width=device-width, initial-scale=1" />
       <link
         rel="stylesheet"
         href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
         integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8sh+WyL/HaE73LXL2mMI+pCBrzhBf7Lq4x1B9a"
         crossorigin="anonymous"
       />
       <title>Your App Title</title>
     </head>
     <body>
       <!-- ... -->
     </body>
     </html>
     ```

7. **Server-Side Script:**
   - Copy the PHP script (`server_test.php`) to the server directory (e.g., the "htdocs" directory for XAMPP).
   - Create an "uploads" folder in the same directory to store uploaded files.

8. **Database Configuration:**
   - Configure the database connection in the PHP script (`server_test.php`) with the correct credentials.

9. **File Upload Directory:**
   - Ensure that the server has write permissions to the "uploads" directory. Update the destination path in the PHP script accordingly.

10. **Run the React App:**
    - Navigate to the React app directory and run the development server:
      ```bash
      cd reg_form
      npm start
      ```

11. **Access the Application:**
    - Open a web browser and go to the address where your React app is running (usually http://localhost:3000).
    - Fill out the student registration form, and the data should be sent to the PHP script for processing.

Adjust configurations based on your specific environment and project structure.


## Implementation:

- Ensure you have a running MySQL server with a database named "StudentData" created.
- Update the MySQL connection details in the PHP file if necessary.
- Place the React components in a React project and start the development server.
- Ensure the server specified in the React component matches the server where the PHP file is hosted.
- Access the registration form through the React application, fill in the details, and submit.
- Check the MySQL database for the stored information.

## Conclusion:

The Student Registration Form project represents a significant achievement in simplifying the process of collecting and managing student information. By leveraging the power of ReactJS for frontend development and PHP for backend processing, the application provides a seamless user experience for students to input their personal, academic, and address details, along with uploading a passport-size photo. The project's successful deployment highlights its practical utility in educational institutions, enhancing administrative efficiency and facilitating better communication with students. Moving forward, potential future enhancements may include implementing user authentication and authorization features to ensure data security, integrating email notifications for form submissions and updates, and enhancing the user interface with additional interactive elements and customization options. With continuous refinement and expansion, the Student Registration Form project has the potential to evolve into a comprehensive solution for managing student data effectively in various educational settings.


## Appendix:
</br></br>
### Registration form UI
</br></br>
![Screenshot 2024-02-13 171242](https://github.com/akhilkv18/Registration_Form_with_React-PHP/assets/154727494/498c1a82-d9d0-4510-83a7-69597bff0e7b)
</br>
<p align="center">[Figure 1.a : Student registration form interface]</p>

</br></br></br>

![Screenshot 2024-02-13 171256](https://github.com/akhilkv18/Registration_Form_with_React-PHP/assets/154727494/56f5393d-8029-416c-a616-f6d039c4f255)

</br>
<p align="center">[Figure 1.b : Student registration form interface]</p>

</br></br></br>
![Screenshot 2024-02-13 171621](https://github.com/akhilkv18/Registration_Form_with_React-PHP/assets/154727494/ccdecae8-a72c-49bb-b4cd-4f3067ec491c)

</br>
<p align="center">[Figure 2 : UI which display data to user and provide print option]</p>

</br></br>
### Form validation and error handling
</br></br>

![Screenshot 2024-02-13 171755](https://github.com/akhilkv18/Registration_Form_with_React-PHP/assets/154727494/3dd4c7c2-350d-419a-ae6c-034b636141a2)

</br>
<p align="center">[Figure 3 : Handling when the user inputs the email in wrong format]</p>

</br></br></br>

![Screenshot 2024-02-13 171820](https://github.com/akhilkv18/Registration_Form_with_React-PHP/assets/154727494/da6a28fc-8ea3-4ec8-892b-6fbbc4e91022)

</br>
<p align="center">[Figure 4 : Handling when the user inputs the email which already exists in the database]</p>

</br></br></br>



![Screenshot 2024-02-13 171934](https://github.com/akhilkv18/Registration_Form_with_React-PHP/assets/154727494/f570d626-44b7-468d-8a4b-9003672a0a53)


</br>
<p align="center">[Figure 5 : Handling when the user uploads the file in not allowed formats]</p>

</br></br>
### StudentData database with StudentTable table
</br></br>



![Screenshot 2024-02-13 172209](https://github.com/akhilkv18/Registration_Form_with_React-PHP/assets/154727494/6bd8075a-1d9c-4292-99c8-22b525137c8c)

</br>
<p align="center">[Figure 6 : Sample database overview after some successful actions from users]</p>

</br></br></br>


