import React from 'react';
import './About.css';
import {Link} from 'react-router-dom';
import AboutSectionImg from '../../utils/images/person3.jpg';
import ChooseSection from '../../components/ChooseSection/ChooseSection';

function About(){
    return(
        <div className='about-page'>
            {/* header sectioon start */}
            <header className="height-75">
            <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
            <h1 className='text-center fw-semibold'>About Us</h1>
                    <p className='text-center w-75 mb-5'>The University Portal System (UPS) is an innovative web-based platform designed to streamline both academic and administrative functions within higher education institutions. The core objective of the UPS is to provide a centralized, accessible, user-friendly environment where students, teachers and administrative staff can efficiently perform their necessary activities. We are developing a website that is Punjab University Student Interaction Portal (PU-SIP) in which we facilitate the Punjab University and its affiliated colleges in an easy way </p>
                    
            </div>
            </header> 
            {/* header section end */}
            {/* body of about page start */}
            <div className="container my5">
                {/* adjusting in row */}
                <div className="row">
                    <div className="col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0 ">
                        <h2 className='about fw-semibold mb-4 mb-lg-5 '>Study With Us</h2>
                        <p className='mb-4 mb-lg-5'>Punjab University and its affiliated colleges offer a vibrant and dynamic academic environment, providing a wide range of undergraduate, postgraduate, diploma, and certificate programs. Students benefit from state-of-the-art facilities, including well-equipped libraries, modern laboratories, and extensive sports complexes. The university places a strong emphasis on research, offering numerous opportunities for students to engage in innovative projects across various disciplines. Campus life is enriched by diverse student clubs, organizations, and events, fostering a sense of community and encouraging personal growth alongside academic excellence.
</p>
<p>
Support services at Punjab University ensure a holistic educational experience, with academic tutoring, career counseling, and health and wellness programs readily available to students. International students receive dedicated support to help them integrate smoothly into the university community. With a commitment to inclusivity, the university also provides specialized services for students with disabilities. Testimonials from current students and alumni highlight the supportive and inspiring atmosphere, showcasing the university's dedication to nurturing future leaders and innovators.</p> 
                 <Link to="/contact">
                    <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-5 '>Contact US</button>
                    </Link>       
                    </div>
                    {/* paragraph section end */}
                    {/* infront of paragraph adding picture */}
                    <div className="col-lg-6 d-flex justify-content-center"> 
                        <img src={AboutSectionImg} className='image h-75 w-75' alt="" />
                    </div>
                </div>
                {/* row sectionends here */}
                {/* acessing choosesection component  */}
                <div className='bg-dark text-light py-5'>
                    <ChooseSection/>
                </div>
                {/* accessing persons object
                <div className="bg-body-tertiary py-5">
                    <div className="container">
                        <h2 className='text-center  mb-5'>Our winners</h2>
                        <div className="row g-4">
                            {persons.map((person)=>(
                                <div key={person.id} className='col-md-4'>
                                    <img src={person.img} className='img-fluid' alt="" />
                                </div>
                //             ))} */}
                           </div>
                 </div>  
                 
                 
            
    )

}
export default About;