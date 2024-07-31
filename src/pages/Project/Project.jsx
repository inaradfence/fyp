import React, { useState } from 'react';
import './Project.css';


function Project() {
  const [ideas, setIdeas] = useState([]);
  const [newIdea, setNewIdea] = useState('');
  const [projects, setProjects] = useState([]);
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectUrl, setProjectUrl] = useState('');
  const [projectPdf, setProjectPdf] = useState('');
 const [currentUser, setCurrentUser] = useState('');


  const handleAddIdea = () => {
    setIdeas([...ideas, { text: newIdea, user: currentUser }]);
    setNewIdea('');
  };
  const handleLogin = (username) => {
    setCurrentUser(username);
  };
  ``
  const handleShareProject = () => {
    const newProject = {
      title: projectTitle,
      description: projectDescription,
      url: projectUrl,
      pdf: projectPdf,
    };
    setProjects([...projects, newProject]);
    setProjectTitle('');
    setProjectDescription('');
    setProjectUrl('');
    setProjectPdf(null);
  };

  return (
    <div className='project-page'>
         {/* header sectioon start */}
            <header className="height-75">
            <div className="container h-100 d-flex flex-column align-items-center justify-content-center text-light">
            <h1 className='text-center fw-semibold'>Project Sharing Platform</h1>
                    <p className='text-center w-75 mb-5'>The University Portal System (UPS) is an innovative web-based platform designed to streamline both academic and administrative functions within higher education institutions. The core objective of the UPS is to provide a centralized, accessible, user-friendly environment where students, teachers and administrative staff can efficiently perform their necessary activities. We are developing a website that is Punjab University Student Interaction Portal (PU-SIP) in which we facilitate the Punjab University and its affiliated colleges in an easy way </p>
                    
            </div>
            </header> 
      
    <div className="container py-5">
      <h1 className="display-5 fw-bold">Project Ideas</h1>
      <div className="idea-list list-group">
        {ideas.map((idea, index) => (
          <div key={index} className="idea-card list-group-item">
            <p className="lead">{idea.text}</p>
            <span className="text-muted">— {idea.user}</span>
          </div>
        ))}
      </div>
      <input
        type="text"
        className="form-control mt-3"
        value={newIdea}
        onChange={(e) => setNewIdea(e.target.value)}
        placeholder="Share your idea"
      />
      <button className="btn btn-primary mt-2" onClick={handleAddIdea}>
        Add Idea
      </button>
      <h1 className="display-5 fw-bold mt-5">Share Project</h1>
      <input
        type="text"
        className="form-control mt-3"
        value={projectTitle}
        onChange={(e) => setProjectTitle(e.target.value)}
        placeholder="Project Title"
      />
      <input
        type="text"
        className="form-control mt-3"
        value={projectDescription}
        onChange={(e) => setProjectDescription(e.target.value)}
        placeholder="Project Description"
      />
      <input
        type="text"
        className="form-control mt-3"
        value={projectUrl}
        onChange={(e) => setProjectUrl(e.target.value)}
        placeholder="Project URL"
      />
      <input
        type="file"
        className="form-control mt-3"
        onChange={(e) => setProjectPdf(e.target.files[0])}
        placeholder="Project PDF"
      />
      <button className="btn btn-primary mt-2" onClick={handleShareProject}>
        Share Project
      </button>
      <h1 className="display-5 fw-bold mt-5">Shared Projects</h1>
      <div className="project-list row row-cols-1 row-cols-md-3 g-4">
        {projects.map((project, index) => (
          <div key={index} className="project-card col">
            <div className="card h-100">
              <h2 className="card-title">{project.title}</h2>
              <p className="card-text">{project.description}</p>
              <a href={project.url} target="_blank">
                Visit Project
              </a>
              {project.pdf && (
                <a href={URL.createObjectURL(project.pdf)} target="_blank">
                  Download PDF
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>  
  );
}

export default Project;
