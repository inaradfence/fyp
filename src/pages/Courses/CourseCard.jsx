import React from "react";
import { Card, Modal, Button } from "react-bootstrap";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ArtCourseImg from "../../utils/images/art-course.jpg";

const CourseCard = ({ course }) => {
  const [show, setShow] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [colleges, setColleges] = useState([]);
  const handleShow = async (course) => {
    setSelectedCourse(course);
    setShow(true);
    try {
      const response = await axios.get(
        `http://localhost:5000/api/all-courses/${course._id}`
      );
      setColleges(response?.data?.data || []);
    } catch (error) {
      console.error("Failed to fetch colleges", error);
    }
  };
  const handleClose = () => {
    setShow(false);
    setColleges([]);
  };
  if (!course) return <></>;
  return (
    <div className="col-lg-6">
      <div className="d-block w-100 h-100" onClick={() => handleShow(course)} style={{ cursor: "pointer" }}>
        <Card className="text-white shadow scale-hover-effect position-relative course-card h-100">
          
          <div className="d-flex flex-column align-items-center justify-content-center p-md-5 px-3 py-4 p-md-2 h-100" style={{
            backgroundColor: 'rgba(0,0,0,0.8)',
            zIndex: 1
          }}>
            <Card.Title className="fs-1 text-danger text-center">
              {course.courseTitle}
            </Card.Title>
            <Card.Text className="text-center">{course.description}</Card.Text>
          </div>
         
        </Card>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        centered
        className="custom-modal-course"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {selectedCourse ? selectedCourse.courseTitle : ""}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Below are some of the colleges offering this course:</p>
          <ul>
            {course.collegesOfferingCourse.length === 0 ? (
              <li>No colleges available for this course.</li>
            ) : (
              course.collegesOfferingCourse.map((college) => (
                <li key={college._id}>{college.collegeName}</li>
              ))
            )}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CourseCard;
