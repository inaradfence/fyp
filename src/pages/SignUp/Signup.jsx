import React, { useState } from 'react';
import './SignUp.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

function SignUp() {
  // Define state variables for form fields
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [address, setAddress] = useState('');
  const [designation, setDesignation] = useState('Student');
  const [institute, setInstitute] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission

    try {
      // Send a POST request with form data
      const response = await axios.post('http://localhost:5000/api/register', {
        firstname,
        lastname,
        email,
        password,
        address,
        designation,
        institute
      }, {
        headers: {
          'Content-Type': 'application/json',
    }});

      // Handle success
      setSuccess('Signup successful!');
      console.log(response.data); // You might want to save the token and redirect the user here
    } catch (error) {
      // Handle error
      setError('Signup failed. Please check your credentials.');
      // console.error("Signup error ", error);
    }
  };

  return (
    <div className='login-page'>
      {/* header section start */}
      <header className='h-100 min-vh-100 text-light'>
        <div className="container h-100 d-flex text-light">
          <div className='heading'>
            <h1 className='text-center fw-semibold'>Sign Up</h1>
          </div>
        </div>
        <div className='signup-form'>
          <div className='container justify-content-center'>
            <Form id='login-form' onSubmit={handleSubmit}>
              <Row className='mb-1'>
                <Col sm={12} md={6} className='mb-1 mb-md-0'>
                  <Form.Label>First Name:</Form.Label>
                  <Form.Control
                    placeholder='First Name'
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </Col>
                <Col sm={12} md={6} className='mb-1 mb-md-0'>
                  <Form.Label>Last Name:</Form.Label>
                  <Form.Control
                    placeholder='Last Name'
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </Col>
              </Row>

              <Form.Group className='mb-1'>
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter Email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-1" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Form.Group className='mb-1'>
                <Form.Label>Address:</Form.Label>
                <Form.Control
                  placeholder='Address'
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Form.Group>

              <Row className='mb-1'>
                <Col sm={12} md={6} className='mb-1 mb-md-0'>
                  <Form.Label>Designation:</Form.Label>
                  <Form.Select
                    defaultValue={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                  >
                    <option value="Teacher">Teacher</option>
                    <option value="Student">Student</option>
                    <option value="Alumni">Alumni</option>
                  </Form.Select>
                </Col>
              </Row>

              <Form.Group className='mb-1'>
                <Form.Label>Institute Name:</Form.Label>
                <Form.Control
                  placeholder='Institute Name'
                  value={institute}
                  onChange={(e) => setInstitute(e.target.value)}
                />
              </Form.Group>
<p>Already have an account <a href='/login'>Login</a></p>
              <Button variant="purple btn-lg text-light" type="submit">Sign Up</Button>

              {/* Display success or error message */}
              {error && <div className='alert alert-danger mt-1'>{error}</div>}
              {success && <div className='alert alert-success mt-1'>{success}</div>}
            </Form>
          </div>
        </div>
      </header>
      {/* header section end */}
    </div>
  );
}

export default SignUp
