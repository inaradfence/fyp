import './App.css';
import { Link, Routes, Route, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { io } from 'socket.io-client'; // Import socket.io client
import { useDispatch } from 'react-redux'; // For dispatching actions

import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Courses from './pages/Courses/Courses';
import Login from './pages/Login/Login';
import AffiliatedColleges from './pages/AffiliatedColleges/AffiliatedColleges';
import Footer from './components/Footer/Footer';
import Project from './pages/Project/Project';
import Resources from './pages/Resources/Resources';
import Announcement from './pages/Announcement/Announcement';
import SignUp from './pages/SignUp/Signup';
import logo from './assets/images/logo.jpg';
import profilePic from './utils/images/person6.jpg';
import Askquestion from './components/discussionForm/Askquestion';
import { addUsers } from './context/onlineSlice'; // Import action to add users (for Redux)
import Explore from "./pages/discussionForm/Explore"
import Chat from "./pages/discussionForm/Chat"

// Socket connection
export const socket = io(`http://localhost:8080`, {
  withCredentials: true,
  secure: true,
});

function App() {
  const location = useLocation();
  const navigate = useNavigate();
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [profileData, setProfileData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    picture: profilePic,
    designation: 'Select Designation',
    institutename: '',
  });

  // Redux dispatch
  const dispatch = useDispatch();

  // Socket connection
  const socket = io(`http://localhost:8080`, {
    withCredentials: true,
    secure: true,
  });

  // Effect for handling socket connection and events
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigate('/login'); // Redirect if no user
    }

    socket.connect();
    socket.auth = user;

    socket.on("connect", () => {
      console.log("socket connected");
    });

    // Listen for user connection and disconnection events
    socket.on("user-connected", (users) => {
      console.log("Users connected:", users);
      dispatch(addUsers(users)); // Dispatch to Redux store
    });

    socket.on("user-disconnected", (users) => {
      console.log("Users disconnected:", users);
      dispatch(addUsers(users)); // Dispatch to Redux store
    });

    // Cleanup on component unmount
    return () => {
      socket.off("user-connected");
      socket.off("user-disconnected");
      socket.disconnect();
    };
  }, [socket, dispatch, navigate]);

  const handleShow = () => setShowProfileModal(true);
  const handleClose = () => setShowProfileModal(false);

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
    console.log('Profile updated:', profileData);
    setShowProfileModal(false);
  };

  const handleSignOut = () => {
    console.log('User signed out');
    setShowProfileModal(false);
    navigate('./'); // Adjust this route to match your home page
  };

  return (
    <div>
      <Navbar expand="lg" className="position-absolute w-100 navbar-purple">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="navbar-brand d-flex align-items-center abc">
              <img src={logo} alt="Logo" className="navbar-logo" />
              <span className="mx-2 text-light">PU-SIP</span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="bg-light" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto justify-content-end w-100">
              <Nav.Link as={Link} to="/" className="text-uppercase">Home</Nav.Link>
              <Nav.Link as={Link} to="/affiliatedcolleges" className="text-uppercase">Affiliated Colleges</Nav.Link>
              <Nav.Link as={Link} to="/courses" className="text-uppercase">Our Courses</Nav.Link>
              <Nav.Link as={Link} to="/contact" className="text-uppercase">Get in Touch</Nav.Link>
              <Nav.Link as={Link} to="/project" className="text-uppercase">Resources</Nav.Link>
              <Nav.Link as={Link} to="/announcement" className="text-uppercase">Announcement</Nav.Link>
              <Nav.Link as={Link} to="/signup" className="text-uppercase">SignUp</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="#" className="d-flex align-items-center" onClick={handleShow}>
                <img src={profileData.picture} alt="Profile" className="profile-pic-navbar" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="/affiliatedcolleges" element={<AffiliatedColleges />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/project" element={<Project />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/announcement" element={<Announcement />} />
            <Route path="/ask-question" element={<Askquestion />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/chat" element={<Chat />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>

      <Modal show={showProfileModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Profile</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <div className="profile-pic-container">
                <img src={profileData.picture} alt="Profile" className="profile-pic-modal" />
                <div className="edit-icon" onClick={() => document.getElementById('profileImageInput').click()}>
                  Edit
                </div>
              </div>
              <Form.Control type="file" id="profileImageInput" name="picture" onChange={handleImageChange} className="mt-2" style={{ display: 'none' }} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="firstname">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" name="firstname" value={profileData.firstname} placeholder="First Name" onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="lastname">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" name="lastname" value={profileData.lastname} placeholder="Last Name" onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="email" value={profileData.email} placeholder="Enter Email" onChange={handleInputChange} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="designation">
              <Form.Label>Designation</Form.Label>
              <Form.Select name="designation" value={profileData.designation} onChange={handleInputChange}>
                <option value="student">Student</option>
                <option value="teacher">Teacher</option>
                <option value="alumni">Alumni</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="institutename">
              <Form.Label>Institute Name</Form.Label>
              <Form.Control type="text" name="institutename" value={profileData.institutename} placeholder="Institute Name" onChange={handleInputChange} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSaveChanges}>Save Changes</Button>
          <Button variant="danger" onClick={handleSignOut}>Sign Out</Button>
        </Modal.Footer>
      </Modal>

      <Footer />
    </div>
  );
}

export default App;
