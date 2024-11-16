import React, { useState, useEffect } from 'react';
import './Project.css'; 
import { IoSearch } from "react-icons/io5";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Project() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([
    {
      title: 'Project 1',
      description: 'Description for Project 1',
      user: 'User1',
      date: '2024-11-10',
      time: '10:00 AM',
      url: 'https://example.com/project1', // Or set to null if no URL
      pdf: null, // You can provide a file path if needed
    },
    {
      title: 'Project 2',
      description: 'Description for Project 2',
      user: 'User2',
      date: '2024-11-09',
      time: '2:30 PM',
      url: null,
      pdf: new Blob(['dummy data'], { type: 'application/pdf' }), // Dummy PDF file
    },
    {
      title: 'Project 3',
      description: 'Description for Project 3',
      user: 'User3',
      date: '2024-11-08',
      time: '5:45 PM',
      url: 'https://example.com/project3',
      pdf: null,
    },
  ]);

  const [showPopup, setShowPopup] = useState(false);
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectUrl, setProjectUrl] = useState('');
  const [projectPdf, setProjectPdf] = useState(null);
  const [currentUser, setCurrentUser] = useState('');
  const [error, setError] = useState(''); 
  const [searchQuery, setSearchQuery] = useState('');  // State for search query

  useEffect(() => {
    const token = localStorage.getItem('token'); // Or sessionStorage.getItem('token')
    if (!token) {
      navigate('/login'); // Redirect to login page if token doesn't exist
    }
  }, [navigate]);
  // Handle sharing project
  const handleShareProject = () => {
    if (!projectTitle || !projectDescription) {
      setError('Please complete your credentials (Title and Description are required)');
      return;
    }
    if (!projectUrl && !projectPdf) {
      setError('Please provide either a Project URL or choose a file to share.');
      return;
    }
    const newProject = {
      title: projectTitle,
      description: projectDescription,
      url: projectUrl,
      pdf: projectPdf,
      user: currentUser,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }), 
    };
    setProjects([...projects, newProject]);
    setProjectTitle('');
    setProjectDescription('');
    setProjectUrl('');
    setProjectPdf(null);
    setShowPopup(false);
    setError('');
  };

  // Handle login
  const handleLogin = (username) => {
    setCurrentUser(username);
  };

  // Handle submit for axios request (if needed)
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('http://localhost:3000/api/project', {
        params: {
          // Add any query parameters here (e.g., project ID, filters, etc.)
        }
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Filter projects based on search query
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.user.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="project-page">
      <header className="">
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Project Sharing Platform</h1>
          <p className="text-center pt-3 w-75 mb-5">
            The University Portal System (UPS) is an innovative web-based platform designed to streamline both academic and administrative functions within higher education institutions. The core objective of the UPS is to provide a centralized, accessible, user-friendly environment where students, teachers, and administrative staff can efficiently perform their necessary activities.
          </p>
        </div>
      </header>

      {/* Search Bar */}
      <div className="search-bar-container">
      <div className="input-group">
        <input
          type="text"
          className="form-control search-bar"
          placeholder="Search ..."
          onChange={(e) => setSearchQuery(e.target.value)}  // Update search query on input change
          value={searchQuery}  // Bind value of the input to searchQuery state
       
/>
<span className="input-group-text" id="search-icon">
      <IoSearch />
    </span>
  </div>
      </div>
      {filteredProjects.length === 0 && (
        <p className="no-results-message">
          Result not found
        </p>
      )}

      {/* Project Cards */}
      <div className="project-cards">
        {filteredProjects.map((project, index) => (
          <div key={index} className="card">
            <h3 className="card-title">{project.title}</h3>
            <p className="card-text">{project.description}</p>
            <p><strong>Shared by:</strong> {project.user}</p>
            <p><strong>Date:</strong> {project.date} <strong>Time:</strong> {project.time}</p>
            {project.url || project.pdf ? (
              <a href={project.url ? project.url : URL.createObjectURL(project.pdf)} className="btn btn-purple btn-sm me-2" target="_blank" rel="noopener noreferrer">
                View
              </a>
            ) : null}
          </div>
        ))}
      </div>

      {/* Add Project Button */}
      <button onClick={() => setShowPopup(true)} className="add-project-button">+</button>

      {/* Share Project Section */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            {/* Close Icon */}
            <span className="close-icon" onClick={() => setShowPopup(false)}>
              &times;
            </span>
            <div className="col-lg-8 mb-4">
              <div className="share-section" onSubmit={handleSubmit}>
                <h2 className="display-5 fw-bold mb-4">Share Resources</h2>
                <div className="mb-4">
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={projectTitle}
                    onChange={(e) => setProjectTitle(e.target.value)}
                    placeholder="Title"
                  />
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={projectDescription}
                    onChange={(e) => setProjectDescription(e.target.value)}
                    placeholder="Description"
                  />
                  <input
                    type="text"
                    className="form-control mb-2"
                    value={projectUrl}
                    onChange={(e) => setProjectUrl(e.target.value)}
                    placeholder="URL"
                  />
                  <input
                    type="file"
                    className="form-control mb-2"
                    onChange={(e) => setProjectPdf(e.target.files[0])}
                  />
                  <div className="error message" style={{ color: 'red', marginBottom: '20px' }}>
                    {error} {/* Display error message */}
                  </div>
                  <button type="button" onClick={handleShareProject}>Share</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Project;