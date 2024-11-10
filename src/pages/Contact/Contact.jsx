import React, { useState } from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import axios from 'axios'; // Import axios

function Contact() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        address: '',
        designation: '',
        institutename: '',
        message: '',
    });
    

    const [isSubmitting, setIsSubmitting] = useState(false); // Optional: To show loading state

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault(); // Prevent the default form submission
        setIsSubmitting(true); // Optional: Set loading state

        try {
            console.log("in try function......");
            // Send a POST request with form data
            const response = await axios.post('http://localhost:5000/api/contact', {
                firstname: formData.firstname,
                lastname: formData.lastname,
                email: formData.email,
                address: formData.address,
                designation: formData.designation,
                institutename: formData.institutename,
                message: formData.message
            }, {
                headers: {
                  'Content-Type': 'application/json',
            }});
      

            // Handle response if needed
            console.log('Response:', response.data);
            alert('Thank you for contacting us!');
            setFormData({
                firstname: '',
                lastname: '',
                email: '',
                address: '',
                designation: '',
                institutename: '',
                message: ''
            });
        } catch (error) {
            // Handle error if needed
            console.error('Error submitting form:', error);
            alert('There was an error submitting the form.');
        } finally {
            setIsSubmitting(false); // Optional: Reset loading state
        }
    };

    return (
        <div className='contact-page'> 
            {/* header section start */}
            <header className="height-75">
                <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
                    <h1 className='text-center fw-semibold'>Get in Touch</h1>
                    <p className='text-center w-75 mb-5'>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium iusto vitae eum totam, a quod tenetur deleniti quas distinctio, sequi natus nisi consectetur dolore similique accusamus illo voluptatem architecto nam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora laborum explicabo, deserunt, quaerat fuga nam, natus quam eum iure odit doloremque repudiandae officiis. Voluptatum maxime modi, facilis reprehenderit at fugit!
                    </p>
                </div>
            </header> 
            {/* header section end */}

            {/* Creating form */}
            <div className='container my-5 justify-content-center d-flex'>
                <Form id='contact-form' onSubmit={handleSubmit}>
                    <Row className='mb-3'>
                        <Col sm={12} md={6} className='mb-3 mb-md-0'>
                            <Form.Label>First Name:</Form.Label>
                            <Form.Control 
                                name='firstname'
                                value={formData.firstname}
                                onChange={handleChange}
                                placeholder='First Name'
                            />
                        </Col>
                        <Col sm={12} md={6} className='mb-3 mb-md-0'>
                            <Form.Label>Last Name:</Form.Label>
                            <Form.Control 
                                name='lastname'
                                value={formData.lastname}
                                onChange={handleChange}
                                placeholder='Last Name'
                            />
                        </Col>
                    </Row>

                    <Form.Group className='mb-3'>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control 
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Enter Email'
                        />
                        <Form.Text className='text-muted'>
                            Your Credentials will be saved
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Address:</Form.Label>
                        <Form.Control 
                            name='address'
                            value={formData.address}
                            onChange={handleChange}
                            placeholder='Address'
                        />
                    </Form.Group>

                    <Row className='mb-3'>
                        <Col sm={12} md={6} className='mb-3 mb-md-0'>
                            <Form.Label>Designation:</Form.Label>
                            <Form.Select 
                                name='designation'
                                value={formData.designation}
                                onChange={handleChange}
                            >
                                <option >Select</option>
                                <option value="Teacher">Teacher</option>
                                <option value="Student">Student</option>
                                <option value="Alumni">Alumni</option>
                            </Form.Select>
                        </Col>
                    </Row>

                    <Form.Group className='mb-3'>
                        <Form.Label>Institute Name:</Form.Label>
                        <Form.Control 
                            name='institutename'
                            value={formData.institutename}
                            onChange={handleChange}
                            placeholder='Institute Name'
                        />
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Your Message:</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3}
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Button variant="danger btn-lg" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </Button>
                </Form>
            </div>
        </div>
    );
}

export default Contact;
