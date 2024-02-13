import React from 'react';

// Component for displaying user data in a printable format
const Second = ({ userData }) => {
  const imgFile = userData.imgFile;

  // Function to handle printing the page
  const handlePrint = () => {
    window.print();
  };

  // JSX return
  return (
    <div className="container">
      <div className="card bg-light">
        <div className="card-body">
          <div className="row justify-content-center mt-5">
            <div className="col-12 text-center">
              {/* Display stundent photo */}
              <img
                src={imgFile}
                alt={userData.name + "'s profile picture"}
                className="img-fluid"
                style={{ width: "200px", height: "200px" }} // Adjust the size as needed
              />
              {/* Display student name */}
              <h1>{userData.name}</h1>
            </div>
          </div>
          <div className="row justify-content-center mt-3">
            <div className="col-6">

              {/* Display user's information in a table */}
              <table className="table table-bordered table-success table-hover">
                <tbody>
                  <tr>
                    <td><strong>Email:</strong></td>
                    <td>{userData.email}</td>
                  </tr>
                  <tr>
                    <td><strong>Gender:</strong></td>
                    <td>{userData.gender}</td>
                  </tr>
                  <tr>
                    <td><strong>Birthdate:</strong></td>
                    <td>{userData.birthdate}</td>
                  </tr>
                  <tr>
                    <td><strong>Phone Number:</strong></td>
                    <td>{userData.phoneNumber}</td>
                  </tr>
                  <tr>
                    <td><strong>Degree Course:</strong></td>
                    <td>{userData.course}</td>
                  </tr>
                  <tr>
                    <td><strong>Year Level:</strong></td>
                    <td>{userData.year}</td>
                  </tr>
                  <tr>
                    <td><strong>Institution:</strong></td>
                    <td>{userData.institution}</td>
                  </tr>
                  <tr>
                    <td><strong>Address:</strong></td>
                    <td>{`${userData.hname}, ${userData.street}, ${userData.city}, ${userData.state}, ${userData.country} - ${userData.pin}`}</td>
                  </tr>
                  <tr>
                    <td><strong>Skills:</strong></td>
                    <td>{userData.skills}</td>
                  </tr>
                  <tr>
                    <td><strong>Comments:</strong></td>
                    <td>{userData.comments}</td>
                  </tr>
                  {/* Add other details as needed */}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>


      {/* Button to trigger printing */}
      <div className="text-center mt-3 mb-3">
        <button className="btn btn-primary" onClick={handlePrint}>Print</button>
      </div >
    </div>
  );
};

export default Second;
