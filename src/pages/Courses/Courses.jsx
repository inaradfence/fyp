import React, { useEffect, useState } from 'react';
import './Courses.css';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Courses() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch courses from the database
    const fetchCourses = async () => {
        console.log("are u there");
      try {
        const response = await axios.get('http://localhost:5000/api/courses'); // Update with your backend URL
        setCourses(response.data); 
        console.log(response.data);         // Set the retrieved courses in state
      } catch (error) {
        setError('Error fetching courses');
        console.error("Error fetching courses: ", error);
      }
    };

    fetchCourses();
  }, []);

  return (
    <div className='courses-page'>
      <header className='height-75'>
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className='text-center fw-semibold'>Our Courses</h1>
          <p className='text-center w-75 mb-5'>
            Here, you can easily access comprehensive information about all the academic programs offered at Punjab University. Simply click the link below to be redirected to the official Punjab University Courses page.
          </p>

          <Link to="https://pu.edu.pk/page/show/course_outline.html">
            <button type='button' className='list btn btn-purple btn-lg mx-0 mx-sm-2'>List of PU Courses</button>
          </Link>
        </div>
      </header>

      <div className="container py-5">
        {error && <p className="text-danger">{error}</p>}
        <div className="row g-4">
          {courses.map(course => (
            <div key={course.id} className='col-lg-6'>
              <Card className='text-white shadow scale-hover-effect'>
                <Card.Img src={course.img} alt={course.title} />
                <Card.ImgOverlay className='d-flex flex-column align-items-center justify-content-center p-md-5'>
                  <Card.Title className='fs-1 text-danger'>
                    {course.title}
                  </Card.Title>
                  <Card.Text className='text-center'>
                    {course.description}
                  </Card.Text>
                </Card.ImgOverlay>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Courses;
