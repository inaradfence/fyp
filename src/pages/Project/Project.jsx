import React, { useState } from 'react';
import './Project.css'; // Ensure you have custom styling here if needed

function Project() {
  const [ideas, setIdeas] = useState([]);
  const [newIdea, setNewIdea] = useState('');
  const [projects, setProjects] = useState([]);
  const [projectTitle, setProjectTitle] = useState('');
  const [projectDescription, setProjectDescription] = useState('');
  const [projectUrl, setProjectUrl] = useState('');
  const [projectPdf, setProjectPdf] = useState(null);
  const [currentUser, setCurrentUser] = useState('');

  const handleAddIdea = () => {
    setIdeas([...ideas, { text: newIdea, user: currentUser, likes: 0, dislikes: 0 }]);
    setNewIdea('');
  };

  const handleShareProject = () => {
    const newProject = {
      title: projectTitle,
      description: projectDescription,
      url: projectUrl,
      pdf: projectPdf,
      likes: 0,
      dislikes: 0
    };
    setProjects([...projects, newProject]);
    setProjectTitle('');
    setProjectDescription('');
    setProjectUrl('');
    setProjectPdf(null);
  };

  const handleLikeIdea = (index, type) => {
    const updatedIdeas = ideas.map((idea, idx) => {
      if (index === idx) {
        return {
          ...idea,
          likes: type === 'like' ? idea.likes + 1 : idea.likes,
          dislikes: type === 'dislike' ? idea.dislikes + 1 : idea.dislikes
        };
      }
      return idea;
    });
    setIdeas(updatedIdeas);
  };

  const handleLikeProject = (index, type) => {
    const updatedProjects = projects.map((project, idx) => {
      if (index === idx) {
        return {
          ...project,
          likes: type === 'like' ? project.likes + 1 : project.likes,
          dislikes: type === 'dislike' ? project.dislikes + 1 : project.dislikes
        };
      }
      return project;
    });
    setProjects(updatedProjects);
  };

  const handleLogin = (username) => {
    setCurrentUser(username);
  };

  return (
    <div className="project-page">
      <header className="bg-primary text-white text-center py-5">
        <div className="container py-5">
          <h1 className="display-4 fw-bold">Project Sharing Platform</h1>
          <p className="lead mt-4">
            The University Portal System (UPS) is an innovative web-based platform designed to streamline both academic and administrative functions within higher education institutions. The core objective of the UPS is to provide a centralized, accessible, user-friendly environment where students, teachers, and administrative staff can efficiently perform their necessary activities.
          </p>
        </div>
      </header>

      <div className="container py-5">
        <div className="row">
          {/* Share Idea Section */}
          <div className="col-lg-4 mb-4">
            <h1 className="display-5 fw-bold mb-4">Project Ideas</h1>
            <div className="list-group">
              {ideas.map((idea, index) => (
                <div key={index} className="list-group-item d-flex justify-content-between align-items-center">
                  <div>
                    <p className="mb-1">{idea.text}</p>
                    <small className="text-muted">— {idea.user}</small>
                  </div>
                  <div className="text-center">
                    <button className="btn btn-success btn-like-dislike" onClick={() => handleLikeIdea(index, 'like')}>
                      <i className="fa fa-thumbs-up" />
                    </button>
                    <div className="like-dislike-count">{idea.likes}</div>
                    <button className="btn btn-danger btn-like-dislike" onClick={() => handleLikeIdea(index, 'dislike')}>
                      <i className="fa fa-thumbs-down" />
                    </button>
                    <div className="like-dislike-count">{idea.dislikes}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <input
                type="text"
                className="form-control mb-2"
                value={newIdea}
                onChange={(e) => setNewIdea(e.target.value)}
                placeholder="Share your idea"
              />
              <button className="btn btn-primary" onClick={handleAddIdea}>
                Add Idea
              </button>
            </div>
          </div>

          {/* Share Project Section */}
          <div className="col-lg-6 mb-4">
            <h1 className="display-5 fw-bold mb-4">Share Project</h1>
            <div className="mb-4">
              <input
                type="text"
                className="form-control mb-2"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
                placeholder="Project Title"
              />
              <input
                type="text"
                className="form-control mb-2"
                value={projectDescription}
                onChange={(e) => setProjectDescription(e.target.value)}
                placeholder="Project Description"
              />
              <input
                type="text"
                className="form-control mb-2"
                value={projectUrl}
                onChange={(e) => setProjectUrl(e.target.value)}
                placeholder="Project URL"
              />
              <input
                type="file"
                className="form-control mb-2"
                onChange={(e) => setProjectPdf(e.target.files[0])}
              />
              <button className="btn btn-primary" onClick={handleShareProject}>
                Share Project
              </button>
            </div>

            <div className="row row-cols-1 row-cols-md-3 g-4">
              {projects.map((project, index) => (
                <div key={index} className="col">
                  <div className="card h-100">
                    <div className="card-body">
                      <h5 className="card-title">{project.title}</h5>
                      <p className="card-text">{project.description}</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <div className="text-center">
                          <button className="btn btn-success btn-like-dislike me-2" onClick={() => handleLikeProject(index, 'like')}>
                            <i className="fa fa-thumbs-up" />
                          </button>
                          <div className="like-dislike-count">{project.likes}</div>
                          <button className="btn btn-danger btn-like-dislike" onClick={() => handleLikeProject(index, 'dislike')}>
                            <i className="fa fa-thumbs-down" />
                          </button>
                          <div className="like-dislike-count">{project.dislikes}</div>
                        </div>
                        <div>
                          <a href={project.url} className="btn btn-info btn-sm me-2" target="_blank" rel="noopener noreferrer">
                            Visit Project
                          </a>
                          {project.pdf && (
                            <a href={URL.createObjectURL(project.pdf)} className="btn btn-warning btn-sm" target="_blank" rel="noopener noreferrer">
                              Download PDF
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-5 text-center">
          <button className="btn btn-secondary" onClick={() => handleLogin('John Doe')}>
            Login as John Doe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;
