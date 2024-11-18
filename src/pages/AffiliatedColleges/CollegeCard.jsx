import axios from "axios";
import React, { useState } from "react";
import { Card, Modal, Button } from "react-bootstrap";
import BusinessCollegeImg from "../../assets/images/clg2.jpg";

const CollegeCard = ({ college }) => {
  const [show, setShow] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null); // State to store the selected college

  const handleClose = () => setShow(false);
  // Fetch details of a specific college when the modal is triggered
  const handleShow = (collegeId) => {
    axios
      .get(`http://localhost:5000/api/all-colleges/${collegeId}`)
      .then((response) => {
        setSelectedCollege(response.data.data); // Assuming the API returns college data in this structure
      })
      .catch((error) => {
        console.error("Error fetching college details:", error);
      });

    setShow(true);
  };
  //console.log(college)
  return (
    <div className="col-lg-6">
      <div
        onClick={() => handleShow(college._id)}
        style={{ cursor: "pointer" }}
      >
        <Card className="text-white shadow scale-hover-effect">
          <Card.Img src={BusinessCollegeImg} />
          <Card.ImgOverlay className="d-flex flex-column align-items-center justify-content-center p-md-5">
            <Card.Title className="fs-1 text-danger text-center">
              {college.collegeName}
            </Card.Title>
            <Card.Text className="text-center">{college.description}</Card.Text>
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
            {college?.course &&
              college?.course?.map((course) => (
                <li key={course._id}>{course?.courseTitle}</li>
              ))}
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

export default CollegeCard;
