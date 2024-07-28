import React from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


function Contact(){
    return(
        // main div 
        <div className='contact-page'> 
            {/* header sectioon start */}
            <header className="height-75">
            <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
            <h1 className='text-center fw-semibold'>Get in Touch</h1>
                    <p className='text-center w-75 mb-5'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium iusto vitae eum totam, a quod tenetur deleniti quas distinctio, sequi natus nisi consectetur dolore similique accusamus illo voluptatem architecto nam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora laborum explicabo, deserunt, quaerat fuga nam, natus quam eum iure odit doloremque repudiandae officiis. Voluptatum maxime modi, facilis reprehenderit at fugit!</p>
                    
            </div>
            </header> 
            {/* header section end */}
            {/*  creating form*/}
            <div className='container my-5 justify-content-center d-flex'>
                <Form id='contact-form'>
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
                    <Form.Text className='text-muted'>
                        Your Credentials will be save
                    </Form.Text>
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
                    <Form.Group className='mb-3'>
                    <Form.Label>Your Message:</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="danger btn-lg" type="submit">Submit </Button>
                </Form>
            </div>


            </div>
            
        )

}
export default Contact;