import React, { useState, useEffect } from 'react';
import './Project.css';
import { IoSearch } from "react-icons/io5";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Project() {
  const [formData, setFormData] = useState({
    title:'',
    description:'',
    url:'',
    file:'',   
});
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectUrl, setProjectUrl] = useState('');
  const [projectPdf, setProjectPdf] = useState(null);
  const [currentUser, setCurrentUser] = useState('');
  const [error, setError] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    } else {
      fetchProjects(); // Fetch projects on component mount
    }
  }, [navigate]);

  const fetchProjects = async () => {
    try {
      // const response = await axios.get('http://localhost:5000/api/projects');
      // setProjects(response.data); // Update state with fetched projects
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    }
  };

  const handleShareProject = async () => {
    if (!projectTitle || !projectDescription) {
      setError('Please complete your credentials (Title and Description are required)');
      return;
    }
    if (!projectUrl && !projectPdf) {
      setError('Please provide either a Project URL or choose a file to share.');
      return;
    }

    const formData = new FormData();
    formData.append('title', projectTitle);
    formData.append('description', projectDescription);
    formData.append('url', projectUrl);
    formData.append('file', projectPdf);
    formData.append('username', currentUser);

    console.log("hgyhjjkjk");

    try {
      const response = await axios.post('http://localhost:5000/api/projects',{
        title:formData.title,
        description:formData.description,
        url:formData.url,
        file:formData.file,
            
      });
      console.log("hgyhjjkjk");
      console.log('Response:', response.data);
      alert('Sharing is Caring!');
      setFormData({
        title:formData.title,
        description:formData.description,
        url:formData.url,
        file:formData.file,
      });

      console.log(response.data.message);
      setError('');
      setShowPopup(false);
      setProjectTitle('');
      setProjectDescription('');
      setProjectUrl('');
      setProjectPdf(null);
      fetchProjects(); // Refresh project list
    } catch (error) {
      console.error("Failed to share project:", error);
      setError('Failed to share project');
    }
  };

  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    project.username.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="project-page">
      <header>
        <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
          <h1 className="text-center fw-semibold">Project Sharing Platform</h1>
          <p className="text-center pt-3 w-75 mb-5">
            Share your projects with ease on this dynamic platform!
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
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
          />
          <span className="input-group-text" id="search-icon">
            <IoSearch />
          </span>
        </div>
      </div>

      {filteredProjects.length === 0 && (
        <p className="no-results-message">Result not found</p>
      )}

      {/* Project Cards */}
      <div className="project-cards">
        {filteredProjects.map((project, index) => (
          <div key={index} className="card">
            <h3 className="card-title">{project.title}</h3>
            <p className="card-text">{project.description}</p>
            <p><strong>Shared by:</strong> {project.username}</p>
            {project.url || project.file ? (
              <a href={project.url ? project.url : URL.createObjectURL(project.file)} className="btn btn-purple btn-sm me-2" target="_blank" rel="noopener noreferrer">
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
            <span className="close-icon" onClick={() => setShowPopup(false)}>
              &times;
            </span>
            <div className="col-lg-8 mb-4">
              <div className="share-section">
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
                    {error}
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
