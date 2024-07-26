
// import './App.css';
// import { Link, Routes, Route} from 'react-router-dom';
// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import Home from './pages/Home/Home';
// import About from './pages/About/About';
// import Contact from './pages/Contact/Contact';
// import Courses from './pages/Courses/Courses';

// function App() {
//   return (
//     <div>
//     <Navbar expand="lg" className='position-absolute w-100'>
//       <Container>
//         <Navbar.Brand>
//           <Link to="/" className='navbar.brand d-flex align-items-center' >
//           {/* from bootstrap icon------backpack */}
//           <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#d3545" class="bi bi-backpack-fill" viewBox="0 0 16 16">
//           <path d="M5 13v-3h4v.5a.5.5 0 0 0 1 0V10h1v3z"/>
//           <path d="M6 2v.341C3.67 3.165 2 5.388 2 8v5.5A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5-2.5V8a6 6 0 0 0-4-5.659V2a2 2 0 1 0-4 0m2-1a1 1 0 0 1 1 1v.083a6 6 0 0 0-2 0V2a1 10 0 1 1-1m0 3a4 4 0 0 1 3.96 3.43.5.5 0 1 1-.99.14 3 3 0 0 0-5.94 0 .5.5 0 1 1-.99-.4 0 0 1 8 4M4.5 9h7a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5"/>
//         </svg>
//           <span className='mx-2 text-light lh-1 fw-semibold'>
//           Punjab University
//           <br />
//           Students Interaction Portal
//           <br />
//           (PU-SIP)  
//           </span>        
//           </Link>
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light' />
//         <Navbar.Collapse id='basic-navbar-nav'>
//         <Nav className='me-auto justify-content-end w-100'></Nav>
//         <Nav.Link href='/' className='text-uppercase'>Home</Nav.Link>
//         <Nav.Link href='/about' className='text-uppercase'>About</Nav.Link>
//         <Nav.Link href='/courses' className='text-uppercase'>Our Courses</Nav.Link>
//         <Nav.Link href='/contact' className='text-uppercase'>Get in touch</Nav.Link>
// </Navbar.Collapse>
//       </Container>
//     </Navbar>
    
//     <Routes>
//       <Route path='/' element={<Home />} />
//       <Route path='/about' element={<About />} />
//       <Route path='/courses' element={<Courses />} />
//       <Route path='/contact' element={<Contact />} />

//     </Routes>

//    <footer>
//     <div className='container my-5'>
//       <div className='row d-flex justify-content-between align-item-center'>
//         <div >

//         </div>
//       </div>
//     </div>
//    </footer>
    
    
//     </div>
//   );
// }

// export default App;



import './App.css';
import { Link, Routes, Route } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Courses from './pages/Courses/Courses';

function App() {
  return (
    <div>
      <Navbar expand="lg" className='position-absolute w-100'>
        <Container>
          <Navbar.Brand>
            <Link to="/" className='navbar.brand d-flex align-items-center' >
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#d3545" className="bi bi-backpack-fill" viewBox="0 0 16 16">
                <path d="M8 0a4 4 0 0 0-4 4v.341C3.67 3.165 2 5.388 2 8v5.5A2.5 2.5 0 0 0 4.5 16h7a2.5 2.5 0 0 0 2.5-2.5V8a6 6 0 0 0-4-5.659V4a4 4 0 1 0-4-4zm0 1a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm0 6a4 4 0 0 1-3.96 3.43.5.5 0 1 1-.99-.14A3 3 0 0 0 8 7z"/>
              </svg>
              <span className='mx-2 text-light lh-1 fw-semibold'>
                Punjab University
                <br />
                Students Interaction Portal
                <br />
                (PU-SIP)  
              </span>        
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' className='bg-light' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='me-auto justify-content-end w-100'></Nav>
            <Nav.Link as={Link} to='/' className='text-uppercase'>Home</Nav.Link>
            <Nav.Link as={Link} to='/About' className='text-uppercase'>About</Nav.Link>
            <Nav.Link as={Link} to='/Courses' className='text-uppercase'>Our Courses</Nav.Link>
            <Nav.Link as={Link} to='/Contact' className='text-uppercase'>Get in touch</Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Courses' element={<Courses />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>

      <footer>
        <div className='container my-5'>
          <div className='row d-flex justify-content-between align-item-center'>
            <div>
              {/* Add any footer content here */}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
