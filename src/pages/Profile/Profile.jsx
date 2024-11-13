import React, { useState, useEffect } from 'react';
import './Profile.css';
import axios from 'axios';

const UpdateProfile = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [designation, setDesignation] = useState('Student');
  const [institute, setInstitute] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  // Fetch the existing data from the backend when the component mounts
  useEffect(() => {
    axios.get('http://localhost:5000/api/profile')  // Replace with your actual endpoint
      .then(response => {
        setFormData({
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          email: response.data.email,
          password: '', // Don't pre-fill the password for security reasons
        });
      })
      .catch(error => {
        console.error('Error fetching profile data:', error);
      });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Make a POST or PUT request to save the updated data
    axios.post('http://localhost:5000/api/profile', formData)  // Replace with your actual endpoint
      .then(response => {
        console.log('Profile updated successfully:', response.data);
        alert("Profile updated successfully");
        setShowForm(false);  // Close the form on successful update
      })
      .catch(error => {
        console.error('Error updating profile:', error);
        alert ("Profile not updated ");
      });
  };

  return (
    <div className="profile-container">
      <div 
        className="profile-pic-navbar"
        onClick={() => setShowForm(true)} // Show the form on profile pic click
      >
        <img 
          src="your-profile-pic-url.jpg" // Replace with actual profile pic URL
          alt="Profile"
        />
      </div>

      {/* Modal Form */}
      {showForm && (
        <div className="profile-modal">
          <div className="modal-content">
            <span className="close-btn" onClick={() => setShowForm(false)}>
              &times;
            </span>
            <h2>Profile Information</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="firstName">First Name:</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name:</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group forgot-password">
                <a href="/forgot-password">Forgot Password?</a>
              </div>
              <button type="submit">Save</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UpdateProfile;
