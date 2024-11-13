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
        designation: 'Student',
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
            // Send a POST request with form data
            const response = await axios.post('http://localhost:5000/api/contact-us', {
                firstname: formData.firstname,
                lastname: formData.lastname,
                email: formData.email,
                address: formData.address,
                designation: formData.designation,
                institutename: formData.institutename,
                message: formData.message,
            });

            // Handle response if needed
            console.log('Response:', response.data);
            alert('Thank you for contacting us!');
            setFormData({
                firstname: '',
                lastname: '',
                email: '',
                address: '',
                designation: 'Student',
                institutename: '',
                message: '',
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
        <div classname='contact-page'> 
            {/* header section start */}
            <header classname="height-75">
                <div classname="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
                    <h1 classname='text-center fw-semibold'>Get in Touch</h1>
                    <p classname='text-center w-75 mb-5'>
                    We’d love to hear from you! Whether you have any query, or feedback, feel free to reach out. You can contact us via email or fill out the form below.If you have any specific requests or need assistance with our services, please let us know in your message. We value your input and are always looking for ways to improve. Your thoughts are important to us, and we’re here to help!
                    </p>
                </div>

            </header> 
            {/* header section end */}

            {/* Creating form */}
            <div classname='container my-5 justify-content-center d-flex'>
                
            <div classname='form-card'>
            {/* Add form-card class here */}
                <Form id='contact-form' onSubmit={handleSubmit}>
                    <Row classname='mb-3'>
                        <Col sm={12} md={6} classname='mb-3 mb-md-0'>
                            <Form.Label>First name:</Form.Label>
                            <Form.Control 
                                name='firstname'
                                value={formData.firstname}
                                onChange={handleChange}
                                placeholder='First name'
                            />
                        </Col>
                        <Col sm={12} md={6} classname='mb-3 mb-md-0'>
                            <Form.Label>Last name:</Form.Label>
                            <Form.Control 
                                name='lastname'
                                value={formData.lastname}
                                onChange={handleChange}
                                placeholder='Last name'
                            />
                        </Col>
                    </Row>

                    <Form.Group classname='mb-3'>
                        <Form.Label>Email:</Form.Label>
                        <Form.Control 
                            type='email'
                            name='email'
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Enter Email'
                        />
                        <Form.Text classname='text-muted'>
                            Your Credentials will be saved
                        </Form.Text>
                    </Form.Group>

                    <Form.Group classname='mb-3'>
                        <Form.Label>Address:</Form.Label>
                        <Form.Control 
                            name='address'
                            value={formData.address}
                            onChange={handleChange}
                            placeholder='Address'
                        />
                    </Form.Group>

                    <Row classname='mb-3'>
                        <Col sm={12} md={6} classname='mb-3 mb-md-0'>
                            <Form.Label>Designation:</Form.Label>
                            <Form.Select 
                                name='designation'
                                value={formData.designation}
                                onChange={handleChange}
                            >
                                <option value="Teacher">Teacher</option>
                                <option value="Student">Student</option>
                                <option value="Alumni">Alumni</option>
                            </Form.Select>
                        </Col>
                    </Row>

                    <Form.Group classname='mb-3'>
                        <Form.Label>Institute name:</Form.Label>
                        <Form.Control 
                            name='institutename'
                            value={formData.institutename}
                            onChange={handleChange}
                            placeholder='Institute name'
                        />
                    </Form.Group>

                    <Form.Group classname='mb-3'>
                        <Form.Label>Your Message:</Form.Label>
                        <Form.Control 
                            as="textarea" 
                            rows={3}
                            name='message'
                            value={formData.message}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Button variant= "purple btn-lg" type="submit" disabled={isSubmitting}>
                        {isSubmitting ? 'Submitting...' : 'Submit'}
                    </Button>
                </Form>
                </div>
            </div>
        </div>
    );
}

export default Contact;
