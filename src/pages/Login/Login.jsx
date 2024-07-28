import React from 'react';
import './Login.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

// const LoginForm = () => {
//   return (
//     <div className="wrapper">
//       <Form>
//         <div className="input-box">
//           inpu
//         </div>
//       </Form>
//     </div>
//   )
// }

function Login(){
    return(
  // main div 
  <div className='login-page'> 
  {/* header sectioon start */}
  <header className='h-100 min-vh-100  text-light'>
  <div className="container h-100 d-flex text-light">
    <div className='heading'>  <h1 className='fw-semibold'>Sign Up / Login </h1>
</div>          
  </div>
<div className='signup-form'>
  <div className=' container justify-content-center '>
                <Form id='login-form'>
                    <Row className='mb-3'>
                        <Col sm={12} md={6} className='mb-3 mb-md-0'>
                        <Form.Label>First Name:</Form.Label>
                        <Form.Control placeholder='First Name'/>
                        </Col>
                        <Col sm={12} md={6} className='mb-3 mb-md-0'>
                        <Form.Label>Last Name:</Form.Label>
                        <Form.Control placeholder='Last Name'/>
                        </Col>
                    </Row>

                    <Form.Group className='mb-3'>
                    <Form.Label>Email:</Form.Label>
                    <Form.Control type='email'placeholder='Enter Email'/>
                      </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>

                    <Form.Group className='mb-3'>
                    <Form.Label>Address:</Form.Label>
                    <Form.Control placeholder='Address'/>
                    </Form.Group>

                    <Row className='mb-3'>
                        <Col sm={12} md={6} className='mb-3 mb-md-0'>
                        <Form.Label>Designation:</Form.Label>
                        <Form.Select defaultValue="Student">
                            <option >Teacher</option>
                            <option >Student</option>
                            <option >Alumni</option>
                        </Form.Select>
                        </Col>
                    </Row>
                   
                    <Button variant="danger btn-lg" type="submit">SignUp/Login </Button>
                </Form>
             </div>
 </div>
            </header> 
            {/* header section end */} 

  
  </div>
   )

}
export default Login;