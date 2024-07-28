import React from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstr/Col';
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
            {/*  */}
            

            </div> {/*main div end}
        )

}
export default Contact;