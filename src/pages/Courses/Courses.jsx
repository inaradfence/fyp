// import React from 'react';
// import './Courses.css';
// import { Link } from 'react-router-dom';
// import ArtCourseImg from '../../utils/images/art-course.jpg';
// import BusinessCourseImg from '../../utils/images/business-course.jpg';
// import ComputerScienceCourseImg from '../../utils/images/computer-science-course.jpg';
// import HealthcareCourseImg from '../../utils/images/healthcare-course.jpg';
// import EducationCourseImg from '../../utils/images/education-course.jpg';
// import SportCourseImg from '../../utils/images/sport-course.jpg';
// import axios from 'axios';
// import  { useState, useEffect } from 'react';
// import { Card, Modal, Button } from 'react-bootstrap';
// import { IoSearch } from "react-icons/io5";

// const courses = [
//     {id: 1,
//         img: [ArtCourseImg],
//         title: 'Art Course',
//         description: ' Unlock your creative potential with our dynamic Art course! Whether you’re a budding artist or looking to refine your skills, this course offers a vibrant and inspiring environment to explore various artistic mediums. Dive into the world of drawing, painting, sculpture, and digital art as you learn from experienced instructors who are passionate about nurturing creativity. '
//     },
//     {id: 2,
//         img: [BusinessCourseImg],
//         title: 'Business Course',
//         description: ' Elevate your career with our comprehensive Business course! Designed for aspiring entrepreneurs and business professionals alike, this course provides you with the essential skills and knowledge needed to thrive in today’s competitive landscape. From understanding fundamental business principles to mastering marketing strategies and financial management, you’ll gain a well-rounded education that prepares you for success. '
//     },

//     {id: 3,
//         img: [ComputerScienceCourseImg],
//         title: 'Computer Science Course',
//         description: ' Dive into the world of technology with our engaging Computer Science course! Immerse yourself in the exciting world of coding, algorithms, and innovative technologies.'
//     },
//     {id: 4,
//         img: [EducationCourseImg],
//         title: 'Education Course',
//         description: ' Step into a world of possibilities with our Education course! If you are passionate about shaping minds and making a difference, this is the perfect path for you. Our course offers a blend of theory and practical experience, giving you the tools to inspire and engage students of all ages. '
//     },

//     {id: 5,
//         img: [HealthcareCourseImg],
//         title: 'Health Care Course',
//         description: ' Transform your passion for helping others into a rewarding career with our Health Care course! Dive into the essentials of patient care, medical terminology, and health systems management.  '
//     },
//     {id: 6,
//         img: [SportCourseImg],
//         title: 'Sport Course',
//         description: ' Get ready to unleash your potential with our Sports course! Dive into the thrilling world of athletics, where you’ll learn everything from sports management to physical training. This course is designed for anyone who loves sports and wants to turn that passion into a career. '
//     }
// ];

// function Courses(){

//     const [allCourses, setCourses] = useState([]);

//      useEffect(()=>{
//         const fetchData = async ()=>{
//           try {
//             const response = await axios.get("http://localhost:5000/api/all-courses");
//         //    + console.log("All response ", response);
//             setCourses(response?.data);
//           } catch (error) {
//             console.error("Courses fetch error ", error);
//           }
//         }
//         fetchData();
//       },[])

//       const [show, setShow] = useState(false);
//     const [selectedCourse, setSelectedCourse] = useState(null);
//     const [searchQuery, setSearchQuery] = useState('');

//     const handleShow = (course) => {
//         setSelectedCourse(course);
//         setShow(true);
//     };

//     const handleClose = () => setShow(false);
//     const filteredCourses = courses.filter((course) =>
//         course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         course.description.toLowerCase().includes(searchQuery.toLowerCase())
//       );

//     return(
//         <div className='courses-page'>
//             <header className='height-75'>
//                 <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
//                     <h1 className='text-center fw-semibold'>Our Courses</h1>
//                     <p className='text-center w-75 mb-5'>Here, you can easily access comprehensive information about all the academic programs offered at Punjab University. Whether you're looking to explore new subjects, track your current courses, or find detailed course outlines, this portal is your gateway to academic excellence. Simply click the link below to be redirected to the official Punjab University Courses page, where you'll find up-to-date details on course offerings, registration procedures, and much more. Dive into your academic journey and make the most of your time at Punjab University!</p>

//                     <Link to="https://pu.edu.pk/page/show/course_outline.html">
//                     <button type='button' className='list btn btn-purple btn-lg mx-0 mx-sm-2  '>List of PU Courses</button>
//                     </Link>
//                 </div>

//             </header>
//             <div className="search-bar-container my-4">
//         <div className="input-group">
//           <input
//             type="text"
//             className="form-control search-bar"
//             placeholder="Search for courses..."
//             onChange={(e) => setSearchQuery(e.target.value)} // Update search query
//             value={searchQuery}
//           />
//           <span className="input-group-text" id="search-icon">
//             <IoSearch />
//           </span>
//         </div>
//       </div>

//       {filteredCourses.length === 0 && (
//         <p className="no-results-message">No courses found matching your search.</p>
//       )}
//             <div className="container py-5">
//                 <div className="row g-4">
//                     {allCourses.map((course, index) =>(
//                         <div key={index} className='col-lg-6'>
//                             <div onClick={() => handleShow(course)} style={{ cursor: 'pointer' }}>
//                             <Card className='text-white shadow scale-hover-effect'>
//                                 <Card.Img src={ArtCourseImg}/>
//                                 <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
//                                     <Card.Title className='fs-1 text-danger'>
//                                         {course.courseTitle}
//                                     </Card.Title>
//                                     <Card.Text className='text-center'>
//                                         {course.description}
//                                     </Card.Text>

//                                 </Card.ImgOverlay>
//                             </Card>

//                         </div>
//                         </div>
//                     ))}
//                 </div>
//             </div>

//        {/* Modal */}
//        <Modal show={show} onHide={handleClose} centered >
//                 <Modal.Header closeButton>
//                     <Modal.Title>{selectedCourse?.title}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <p>Below are some of the colleges offering this course:</p>
//                     <ul>
//                         <li>FG Post graduate college women, kashmie road rawalpindi</li>
//                         <li>College B</li>
//                         <li>College C</li>
//                         <li>College D</li>
//                     </ul>
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={handleClose}>Close</Button>
//                 </Modal.Footer>
//             </Modal>
//         </div>
//     );
// }

// export default Courses;

// ########################################################################################################################################################################

import React, { useState, useEffect } from "react";
import "./Courses.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { Card, Modal, Button } from "react-bootstrap";
import { IoSearch } from "react-icons/io5";
import ArtCourseImg from "../../utils/images/art-course.jpg";
import CourseCard from "./CourseCard";

const Courses = () => {
  const [allCourses, setCourses] = useState([]);
  const [show, setShow] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [colleges, setColleges] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/all-courses"
        );
        if (Array.isArray(response?.data.data)) {
          setCourses(response?.data.data);
        } else {
          console.error("Response data is not an array:", response?.data.data);
        }
      } catch (error) {
        console.error("Courses fetch error ", error);
      }
    };
    fetchData();
  }, []);

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

  const filteredCourses = allCourses.filter(
    (course) =>
      course?.courseTitle.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course?.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="courses-page">
      <header className="height-75">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-end justify-content-md-center text-light">
          <h1 className="text-center fw-semibold">Our Courses</h1>
          <p className="text-center w-100 w-md-75 mb-md-5">
            Here, you can easily access comprehensive information about all the
            academic programs offered at Punjab University. Whether you're
            looking to explore new subjects, track your current courses, or find
            detailed course outlines, this portal is your gateway to academic
            excellence.
          </p>
          <Link to="https://pu.edu.pk/page/show/course_outline.html">
            <button
              type="button"
              className="list btn btn-purple btn-lg mx-0 mx-sm-2"
            >
              List of PU Courses
            </button>
          </Link>
        </div>
      </header>

      <div className="search-bar-container my-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control search-bar"
            placeholder="Search for courses..."
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
          <span className="input-group-text" id="search-icon">
            <IoSearch />
          </span>
        </div>
      </div>

      {filteredCourses.length === 0 && (
        <p className="no-results-message">
          No courses found matching your search.
        </p>
      )}

      <div className="container py-5">
        <div className="row g-4">
          {filteredCourses && filteredCourses?.map((course, index) => {
            return (
              <CourseCard course={course} key={index} />
            ) 
          })}
        </div>
      </div>

      {/* Modal */}
      {/* <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{selectedCourse ? selectedCourse.courseTitle : ''}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Below are some of the colleges offering this course:</p>
                    <ul>
                        {colleges.length === 0 ? (
                            <li>No colleges available for this course.</li>
                        ) : (
                            colleges.map((college) => (
                                <li key={college._id}>{college.collageName}</li>
                            ))
                        )}
                    </ul>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>Close</Button>
                </Modal.Footer>
            </Modal> */}
    </div>
  );
};

export default Courses;
