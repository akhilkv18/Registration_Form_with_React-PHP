import React, { useState } from 'react';
import axios from 'axios';
import backgroundImage from './bg.jpg';

const First = ({ setUserData }) => {
 // State variables to store form data
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [gender, setGender] = useState('');
 const [birthdate, setBirthdate] = useState('');
 const [phoneNumber, setPhoneNumber] = useState('');
 const [course, setCourse] = useState('');
  const [year, setYear] = useState('');
  const [institution, setInstitution] = useState('');

// Function to handle file upload and request sending
const fileUpload = async () => {

    try {
      // Create a FormData object to append form data
      const formData = new FormData();
      // Append form data
      formData.append('name', name);
      formData.append('email', email);
      formData.append('gender', gender);
      formData.append('birthdate', birthdate);
      formData.append('phoneNumber', phoneNumber);
      formData.append('course', course);
      formData.append('year', year);
      formData.append('institution', institution);

      // Send form data to the server using axios post request
      const response = await axios.post('http://localhost/server_test.php', formData, {
        headers: { 'Content-Type': "multipart/form-data" },
      });

      // Handle server response   
      const { message, user } = response.data;

      if (message === 'success') {
        // Update user data
        setUserData(user);
      } else {
        alert(response.data.response);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  }; 

   // Function to handle form submission
   const handleSubmit = async (e) => {

    e.preventDefault();
    // Call fileUpload function
    await fileUpload();

  }

return(
<div>
      <div className="container mt-5 d-grid " style={{ backgroundImage: `url(${backgroundImage})` }}>
        <form onSubmit={handleSubmit} encType="multipart/form-data">


          {/* Form title */}
          <div className='card bg-light border-info mt-3'>
            <div className='card-body '>
              <div className="row text-center"><h1 className='card-header'>STUDENT REGISTRATION FORM</h1></div>
            </div>
          </div>







          {/* Personal Details Form */}
          
          <div className='card bg-light border-info mt-3'>
            <div className='card-body '>
              <div className="row mt-3 " ><h6 className='card-title'>PERSONAL DETAILS</h6><p className='text-end'><b><span className="text-danger">*</span></b>All fields are mandatory</p></div>
              <div className="row mt-3">

                <div className="col-md-6">

                  <label htmlFor="name">Full Name<b><span className="text-danger">*</span></b></label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    placeholder='Enter full name'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="col-md-6">
                  <label htmlFor="email">Email<b><span className="text-danger">*</span></b></label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    name="email"
                    placeholder='example@email.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>




              <div className="row mt-3">
                <div className="col-md-2">
                  <label>Gender<b><span className="text-danger">*</span></b></label>
                </div>

                <div className="col-lg-1">
                  <div className="form-check">
                    <input
                      type="radio"
                      id="male"
                      name="gender"
                      value="male"
                      className="form-check-input"
                      checked={gender === 'male'}
                      onChange={() => setGender('male')}
                      required
                    />
                    <label htmlFor="male" className="form-check-label">Male</label>
                  </div>
                </div>




                <div className="col-lg-1">
                  <div className="form-check">
                    <input
                      type="radio"
                      id="female"
                      name="gender"
                      value="female"
                      className="form-check-input"
                      checked={gender === 'female'}
                      onChange={() => setGender('female')}
                    />
                    <label htmlFor="female" className="form-check-label">Female</label>
                  </div>
                </div>

                <div className="col-lg-1">
                  <div className=" form-check">
                    <input
                      type="radio"
                      id="other"
                      name="gender"
                      value="other"
                      className="form-check-input"
                      checked={gender === 'other'}
                      onChange={() => setGender('other')}
                    />
                    <label htmlFor="other" className="form-check-label">Other</label>
                  </div>
                </div>
              </div>



              <div className="row mt-3">
                <div className="col-md-6">
                  <label htmlFor="birthdate">Birthdate<b><span className="text-danger">*</span></b></label>
                  <input
                    type="date"
                    className="form-control"
                    id="birthdate"
                    name="birthdate"
                    value={birthdate}
                    onChange={(e) => setBirthdate(e.target.value)}
                    required
                  />
                </div>


                <div className="col-md-6">
                  <label htmlFor="phoneNumber">Phone Number<b><span className="text-danger">*</span></b></label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phoneNumber"
                    name="phoneNumber"
                    placeholder='eg: xxxxxxxxxx'
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>






          {/* Academic Details */}
          
          <div className='card bg-light border-info mt-3'>
            <div className='card-body'>
              <div className="form-row mt-3"><h6 className='card-title'>ACADEMIC DETAILS</h6></div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <label htmlFor="course">Degree Course<b><span className="text-danger">*</span></b></label>

                  <select
                    className="form-control"
                    id="course"
                    name="course"
                    value={course}
                    onChange={(e) => setCourse(e.target.value)}
                    required
                  >
                    <option value="">Select a  course</option>
                    <option value="BCA">BCA</option>
                    <option value="MCA">MCA</option>
                    <option value="DATA SCIENCE">DATA SCIENCE</option>
                  </select>

                </div>


                <div className="col-md-6">
                  <label htmlFor="year">Year Level<b><span className="text-danger">*</span></b></label>
                  <select
                    className="form-control"
                    id="year"
                    name="year"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
                  >
                    <option value="">Select a year level</option>
                    <option value="1">Year 1</option>
                    <option value="2">Year 2</option>
                    <option value="3">Year 3</option>
                    <option value="PASSED OUT">PASSED OUT</option>
                  </select>
                </div>
              </div>

              <div className="row mt-3">
                <div className="col-md-6">
                  <label htmlFor="institution">Institution<b><span className="text-danger">*</span></b></label>
                  <input
                    type="text"
                    className="form-control"
                    id="institution"
                    name="institution"
                    placeholder='Enter name of the institution'
                    value={institution}
                    onChange={(e) => setInstitution(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
          </div>


{/* Submit Button */}
<div className="mb-3 mt-3 row">
            <div className="text-center">
              <button type="submit" className="btn btn-success">SUBMIT</button>
            </div>
          </div>
        </form>
      </div>
    </div>

);
}

export default First