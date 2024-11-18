import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo.jpg";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showProfileCard, setShowProfileCard] = useState(false);
  const [profileData, setProfileData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    picture: "",
    designation: "Select Designation",
    institutename: "",
  });
  const [loggedIn, setLoggedIn] = useState(false);
  const handleShowProfileCard = () => setShowProfileCard(!showProfileCard);
  const handleCloseProfileModal = () => setShowProfileModal(false);
  const navigate = useNavigate();
  const handleEditProfile = () => {
    // Corrected definition here
    setShowProfileModal(true);
    setShowProfileCard(false);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    console.log("User signed out");
    setShowProfileCard(false);
    setLoggedIn(false);
    navigate("./");
  };
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileData((prevData) => ({
          ...prevData,
          picture: reader.result,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveChanges = () => {
    console.log("Profile updated:", profileData);
    localStorage.setItem("user", JSON.stringify(profileData));
    setShowProfileModal(false);
  };

  useEffect(() => {
    const token = localStorage.getItem("user");
    //console.log(token);
    setProfileData(token ? JSON.parse(token) : {});
    setLoggedIn(token ? true : false);
  }, []);
  useEffect(() => {
    const token = localStorage.getItem("user");
    //console.log(token);
    setProfileData(token ? JSON.parse(token) : {});
    setLoggedIn(token ? true : false);
  }, [navigate]);
  console.log(loggedIn);
  return (
    <>
      <Navbar
        expand="lg"
        className="position-absolute w-100 navbar-purple justify-content-center site-main-header navbar-expend-xl"
      >
        <Container className="m-0">
          <Navbar.Brand className="d-block">
            <Link to="/" className="navbar-brand d-flex align-items-center abc">
              <img src={logo} alt="Logo" className="navbar-logo" />
              <span className="mx-2 text-light">PU-SIP</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="bg-light toggle-btn-for-mobile"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end w-auto">
              <Nav.Link as={Link} to="/" className="text-uppercase">
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/affiliatedcolleges"
                className="text-uppercase"
              >
                AffiliatedColleges
              </Nav.Link>
              <Nav.Link as={Link} to="/courses" className="text-uppercase">
                Courses
              </Nav.Link>
              {/* <Nav.Link as={Link} to="/courses" className="text-uppercase">D-Forum</Nav.Link> */}
              <Nav.Link as={Link} to="/project" className="text-uppercase">
                Resources
              </Nav.Link>
              <Nav.Link as={Link} to="/announcement" className="text-uppercase">
                Announcement
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-uppercase">
                GetInTouch
              </Nav.Link>
              {!loggedIn && (
                <Nav.Link as={Link} to="/signup" className="text-uppercase">
                  SignUp
                </Nav.Link>
              )}
              <a
                href="http://localhost:3001"
                target="_blank"
                className="text-uppercase nav-link"
              >
                D-Forum
              </a>
            </Nav>
            {loggedIn && (
              <Nav className="ms-auto">
                <Nav.Link
                  as={Link}
                  to="#"
                  className="d-flex align-items-center"
                  onClick={handleShowProfileCard}
                >
                  <img
                    src={
                      "https://res.cloudinary.com/dcxfsvq4i/image/upload/v1731949762/Personal/27470334_7309681_ktsak2.jpg"
                    }
                    alt="Profile"
                    className="profile-pic-navbar"
                  />
                </Nav.Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {loggedIn && showProfileCard ? (
        <div className="profile-card">
          <div className="profile-card-header">
            <img
              src={
                "https://res.cloudinary.com/dcxfsvq4i/image/upload/v1731949762/Personal/27470334_7309681_ktsak2.jpg"
              }
              alt="Profile"
              className="profile-card-pic"
            />
            <div className="d-flex align-items-center justify-content-center flex-column gap-1">
              <h5 className="mb-1 pt-2">
                {profileData?.firstname} {profileData?.lastname}
              </h5>
              <p className="m-0 p-0">{profileData?.email}</p>
              <p className="m-0 p-0">{profileData?.designation}</p>
            </div>
          </div>

          <Button
            variant="purple"
            className="w-100 mt-3"
            onClick={handleEditProfile}
          >
            Edit Profile
          </Button>
          <Button
            variant="purple"
            className="w-100 mt-2"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </div>
      ) : (
        <></>
      )}
      <Modal show={showProfileModal} onHide={handleCloseProfileModal} centered>
        {" "}
        {/* Update here */}
        <Modal.Header closeButton>
          <Modal.Title>Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <div className="profile-pic-container">
                <img
                  src={
                    "https://res.cloudinary.com/dcxfsvq4i/image/upload/v1731949762/Personal/27470334_7309681_ktsak2.jpg"
                  }
                  alt="Profile"
                  className="profile-pic-modal"
                />
                <div
                  className="edit-icon"
                  onClick={() =>
                    document.getElementById("profileImageInput").click()
                  }
                >
                  Edit
                </div>
              </div>
              <Form.Control
                type="file"
                id="profileImageInput"
                name="picture"
                onChange={handleImageChange}
                className="mt-2"
                style={{ display: "none" }}
              />
            </Form.Group>
            <Form.Group className="mb-0" controlId="firstname">
              <Form.Label>First Name</Form.Label>0
              <Form.Control
                type="text"
                name="firstname"
                value={profileData.firstname}
                placeholder="First Name"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control
                type="text"
                name="lastname"
                value={profileData.lastname}
                placeholder="Last Name"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={profileData.email}
                placeholder="Enter Email"
                onChange={handleInputChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="designation">
              <Form.Label>Designation</Form.Label>
              <Form.Select
                name="designation"
                value={profileData.designation}
                onChange={handleInputChange}
              >
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="alumni">Alumni</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="institutename">
              <Form.Label>Institute Name</Form.Label>
              <Form.Control
                type="text"
                name="institutename"
                value={profileData.institutename}
                placeholder="Institute Name"
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Header;
