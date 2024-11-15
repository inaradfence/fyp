import React from 'react';
import { Container, Row, Col, Nav, Modal, Button } from 'react-bootstrap'; // Import Modal components
import './Announcement.css';
import axios from 'axios';
import  { useState, useEffect } from 'react';


const Announcement = () => {

  const [allAnnouncement, setAnnouncement] = useState([]);

  useEffect(()=>{
    const fetchData = async ()=>{
      try {
        const response = await axios.get("http://localhost:5000/api/all-Announcement");
    //    + console.log("All response ", response);
        setAnnouncement(response?.data);
      } catch (error) {
        console.error("Courses fetch error ", error);
      }
    }
    fetchData();
  },[])


  const [showModal, setShowModal] = useState(false); // State to control the modal visibility
  const [selectedAnnouncement, setSelectedAnnouncement] = useState(null); // Store the selected announcement

  const announcements = [
      {
        id: 1,
        title: "PU exams results",
        date: "Today 03:00",
        description: " LAHORE: (Friday, November 08, 2024): Punjab University Examinations Department has declared the results of LLB (3-year) Part-III and LLB (5-year) Part-V annual examination 2024."
      },
      {
        id: 2,
        title: "Skill Development Centre (SDC)",
        date: "Jun 03, 2020",
        description: "Skill Development Centre (SDC) at University of the Punjab has been established to deliver flexible, demand driven and cost effective technical and professional training programs. These open enrolment programs reflect the latest in management thinking and address the dynamic learning needs of managers over the course of their careers. Each program is deeply immersive and facilitates collaboration with like-minded peers while you learn from our outstanding faculty, which included innovative researchers, renowned scholars and leading practitioners."
      },
      {
        id: 3,
        title: "Scholarships for Google Career Certificate Program 2024",
        date: "Jun 02, 2020",
        description: "Government of Punjab, Higher Education Department in collaboration with Tech Valley is thrilled to announce scholarships for the Google Career Certificate Program. Don't miss out on this opportunity to build your career in technology!"
      }
 
  ];

  // Function to open the modal and set the selected announcement
  const handleShow = (announcement) => {
    setSelectedAnnouncement(announcement);
    setShowModal(true);
  };

  // Function to close the modal
  const handleClose = () => {
    setShowModal(false);
    setSelectedAnnouncement(null);
  };

  return (
    <div className="announcement-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Announcements</h1>
          <p className="text-center pt-3 w-75 mb-5">
           "Welcome to our Announcement Page, where knowledge meets innovation! Stay updated with the latest news, exciting events, and important updates that will enhance your learning journey. From new course launches to special webinars, this is your go-to spot for all things educational. Dive in and discover what’s happening today!"
          </p>
        </div>
      </header>

      <Container>
        <Row className="mt-4">
          <Col>
            {allAnnouncement.map((announcement, index) => (
              <div key={index} className="announcement-item py-3 border-bottom">
                <p className="mb-1 text-muted">{announcement.date}</p>
                <h5>{announcement.title}</h5>
                <p>{announcement.description.slice(0, 100)}...</p>
                <Button variant="link" onClick={() => handleShow(announcement)}>
                  Read More
                </Button>
              </div>
            ))}
          </Col>
        </Row>
      </Container>

      {/* Modal for displaying full details */}
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedAnnouncement?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>{selectedAnnouncement?.date}</h5>
          <p>{selectedAnnouncement?.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="purple btn-lg" onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Announcement;
