import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';
// import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Courses from './pages/Courses/Courses';
import Login from './pages/Login/Login';
import AffiliatedColleges from './pages/AffiliatedColleges/AffiliatedColleges';
import Footer from './components/Footer/Footer';
import Project from './pages/Project/Project';
import Resources from './pages/Resources/Resources';
import SignUp from './pages/SignUp/Signup';


function App() {
  return (
    <div>
      <Navbar expand="lg" className='position-absolute w-100'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar.brand d-flex align-items-center' >
              {/* from bootstrap icon------backpack */}
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#dc3545" className="bi bi-backpack" viewBox="0 0 16 16">
                <path d="M4.04 7.43a4 4 0 0 1 7.92 0 .5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.14M4 9.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5zm1 .5v3h6v-3h-1v.5a.5.5 0 0 1-1 0V10z" />
                <path d="M6 2.341V2a2 2 0 1 1 4 0v.341c2.33.824 4 3.047 4 5.659v5.5a2.5 2.5 0 0 1-2.5 2.5h-7A2.5 2.5 0 0 1 2 13.5V8a6 6 0 0 1 4-5.659M7 2v.083a6 6 0 0 1 2 0V2a1 1 0 0 0-2 0m1 1a5 5 0 0 0-5 5v5.5A1.5 1.5 0 0 0 4.5 15h7a1.5 1.5 0 0 0 1.5-1.5V8a5 5 0 0 0-5-5" />
              </svg>
              <span className='mx-2 text-light'>
                PU-SIP
              </span>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'>
              <Nav.Link href='/' className='text-uppercase'>Home</Nav.Link>
              {/* <Nav.Link href='/about' className='text-uppercase'>About</Nav.Link> */}
              <Nav.Link href='/affiliatedcolleges' className='text-uppercase'>AffaliatedColleges</Nav.Link>
              <Nav.Link href='/courses' className='text-uppercase'>Our Courses</Nav.Link>
              <Nav.Link href='/contact' className='text-uppercase'>Get in touch</Nav.Link>
              <Nav.Link href='/project' className='text-uppercase'>Project</Nav.Link>
              <Nav.Link href='/resources' className='text-uppercase'>Resources</Nav.Link>
              <Nav.Link href='/signup' className='text-uppercase'>Signup</Nav.Link>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/about' element={<About />} /> */}
        <Route path='/affiliatedcolleges' element={<AffiliatedColleges />} />
        <Route path='/courses' element={<Courses />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/project' element={<Project />} />
        <Route path='/resources' element={<Resources />} />

      </Routes>

     
      <Footer />

    </div>
  );
}

export default App;

