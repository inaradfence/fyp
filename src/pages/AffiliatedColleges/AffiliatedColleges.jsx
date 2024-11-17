import React, { useState, useEffect } from 'react';
import './AffiliatedColleges.css'; // Ensure the correct path to your CSS file
import { Card, Modal, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { IoSearch } from "react-icons/io5";
import axios from 'axios'; // Import axios for making HTTP requests
import BusinessCollegeImg from '../../assets/images/clg2.jpg';

const AffiliatedColleges = () => {
    const [colleges, setColleges] = useState([]); // State to store all colleges
    const [selectedCollege, setSelectedCollege] = useState(null); // State to store the selected college
    const [searchQuery, setSearchQuery] = useState(''); // State to store search query

    // Fetch all colleges from the API
    useEffect(() => {
        axios.get('http://localhost:5000/api/all-colleges')
            .then(response => {
                console.log(response)
                setColleges(response.data.data); // Assuming your API returns data in this structure
            })
            .catch(error => {
                console.error('Error fetching colleges:', error);
            });
    }, []); // Empty dependency array means it runs once on component mount

    // Filter logic for search
    const filteredColleges = colleges?.filter((college) =>
        college?.collegeName.toLowerCase().includes(searchQuery?.toLowerCase())
    );

    // Fetch details of a specific college when the modal is triggered
    const handleShow = (collegeId) => {
        axios.get(`http://localhost:5000/api/all-colleges/${collegeId}`)
            .then(response => {
                setSelectedCollege(response.data.data); // Assuming the API returns college data in this structure
            })
            .catch(error => {
                console.error('Error fetching college details:', error);
            });

        setShow(true);
    };

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    console.log(colleges);
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
            {filteredColleges && filteredColleges.length === 0 && (
                <p className="no-results-message">No colleges found matching your search.</p>
            )}

            {/* Filtered Colleges */}
            <div className="container py-5">
                <div className="row g-4">
                    {filteredColleges && filteredColleges.map((college) => (
                        <div key={college._id} className='col-lg-6'>
                            <div onClick={() => handleShow(college._id)} style={{ cursor: 'pointer' }}>
                                <Card className='text-white shadow scale-hover-effect'>
                                    <Card.Img src={BusinessCollegeImg} />
                                    <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                                        <Card.Title className='fs-1 text-danger'>
                                            {college.collegeName}
                                        </Card.Title>
                                        <Card.Text className='text-center'>
                                            {college.description}
                                        </Card.Text>
                                    </Card.ImgOverlay>
                                </Card>
                            </div>
                            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{college?.collegeName}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>{college?.description}</p>
                    <p>Below are some courses offered by {college?.collegeName}:</p>
                    <ul>
                        {college?.courses && college.courses.map(course => (
                            <li key={course._id}>{course.courseTitle}</li>
                        ))}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
           
        </div>
    );
};

export default AffiliatedColleges;
