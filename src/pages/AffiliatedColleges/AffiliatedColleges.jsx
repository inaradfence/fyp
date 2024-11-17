
import React, { useState } from 'react';
import './AffiliatedColleges.css'; // Ensure the correct path to your CSS file
import { Card, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import ArtCollegeImg from '../../assets/images/clg2.jpg'; // Adjust image imports
import BusinessCollegeImg from '../../assets/images/clg2.jpg';
import ComputerScienceCollegeImg from '../../assets/images/clg2.jpg';
import HealthcareCollegeImg from '../../assets/images/clg2.jpg';
import EducationCollegeImg from '../../assets/images/clg2.jpg';
import SportCollegeImg from '../../assets/images/clg2.jpg';

const affiliatedColleges = [
    {
        id: 1,
        img: [ArtCollegeImg],
        title: 'KhanasPur Campus',
        description: ' Unlock your creative potential with our dynamic Art College! Whether you’re an aspiring artist or looking to refine your skills, this college offers a vibrant and inspiring environment to explore various artistic disciplines. '
    },
    {
        id: 2,
        img: [BusinessCollegeImg],
        title: 'Allama Iqbal Campus',
        description: ' Elevate your career with our comprehensive Business College! Designed for aspiring entrepreneurs and business professionals, this college equips you with essential skills and knowledge to thrive in the competitive business world.'
    },
    {
        id: 3,
        img: [ComputerScienceCollegeImg],
        title: 'Gujrawala Campus',
        description: ' Dive into the world of technology with our engaging Computer Science College! Immerse yourself in coding, algorithms, and innovative tech.'
    },
    {
        id: 4,
        img: [EducationCollegeImg],
        title: 'Quaid-e-Azam Campus',
        description: ' Step into the world of possibilities with our Education College! Ideal for those passionate about shaping minds and making a difference in education.'
    },
    {
        id: 5,
        img: [HealthcareCollegeImg],
        title: 'Jehlum Campus',
        description: ' Transform your passion for helping others into a rewarding career with our Healthcare College! Learn about patient care, medical terminology, and health systems management.'
    },
    {
        id: 6,
        img: [SportCollegeImg],
        title: 'Pothohar Campus',
        description: ' Get ready to unleash your potential with our Sports College! Learn everything from sports management to physical training.'
    }
];

function AffiliatedColleges() {
    const [show, setShow] = useState(false);
    const [selectedCollege, setSelectedCollege] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    // Filter logic for search
    const filteredColleges = affiliatedColleges.filter((college) =>
        college.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleShow = (college) => {
        setSelectedCollege(college);
        setShow(true);
    };

    const handleClose = () => setShow(false);

    return (
        <div className='affiliated-college-page'>
            <header className='height-75'>
                <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
                    <h1 className='text-center fw-semibold'>Affiliated Colleges</h1>
                    <p className='text-center w-75 mb-5'>Here, you can easily access comprehensive information about all the affiliated colleges offering various academic programs. Explore detailed outlines and make informed decisions about your future academic journey.</p>

                    <Link to="https://pu.edu.pk/affiliation">
                        <button type='button' className='list btn btn-purple btn-lg mx-0 mx-sm-2'>List of Affiliated Colleges</button>
                    </Link> 
                </div>
            </header>

            {/* Search Bar */}
            <div className="search-bar-container my-4">
                <div className="input-group">
                    <input
                        type="text"
                        className="form-control search-bar"
                        placeholder="Search for colleges..."
                        onChange={(e) => setSearchQuery(e.target.value)} // Update search query
                        value={searchQuery}
                    />
                    <span className="input-group-text" id="search-icon">
                        <IoSearch />
                    </span>
                </div>
            </div>

            {/* No results message */}
            {filteredColleges.length === 0 && (
                <p className="no-results-message">No colleges found matching your search.</p>
            )}

            {/* Filtered Colleges */}
            <div className="container py-5">
                <div className="row g-4">
                    {filteredColleges.map((college) => (
                        <div key={college.id} className='col-lg-6'>
                            <div onClick={() => handleShow(college)} style={{ cursor: 'pointer' }}>
                                <Card className='text-white shadow scale-hover-effect'>
                                    <Card.Img src={college.img} />
                                    <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                        <Card.Title className='fs-1 text-danger'>
                                            {college.title}
                                        </Card.Title>
                                        <Card.Text className='text-center'>
                                            {college.description}
                                        </Card.Text>
                                    </Card.ImgOverlay>
                                </Card>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedCollege?.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Below are the some courses offering Affiliated College</p>
                    <ul>
                        <li>Art Course</li>
                        <li>Business Course</li>
                        <li>Education Course</li>
                        <li>IT Course</li>
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default AffiliatedColleges;
