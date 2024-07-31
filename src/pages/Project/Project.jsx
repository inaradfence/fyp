import React, { useState } from 'react';
import './Project.css'; 
import  axios from 'axios';

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

  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission
    try {
      // Send a GET request to fetch projects
      const response = await axios.get('http://localhost:3000/api/project', {
        params: {
          // Add any query parameters here (e.g., project ID, filters, etc.)
        }
      });
      // Handle the response data (e.g., display projects, log to console, etc.)
      console.log(response.data);
    } catch (error) {
      // Handle any errors that occur during the request
      console.error(error);
    }
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
            <div className="share-section">
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#dc3545" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                          <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                        </svg>
                      </button>
                      <div className="like-dislike-count">{idea.likes}</div>
                      <button className="btn btn-danger btn-like-dislike" onClick={() => handleLikeIdea(index, 'dislike')}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#dc3545" className="bi bi-hand-thumbs-down-fill" viewBox="0 0 16 16">
                          <path d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.38 1.38 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51q.205.03.443.051c.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.9 1.9 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2 2 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.2 3.2 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.8 4.8 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591"/>
                        </svg>
                      </button>
                      <div className="like-dislike-count">{idea.dislikes}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4" onsubmit={handleSubmit}>
                <input
                  type="text"
                  className="form-control mb-2"
                  value={newIdea}
                  onChange={(e) => setNewIdea(e.target.value)}
                  placeholder="Share your idea"
                />
                <button className="btn btn-danger" onClick={handleAddIdea}>
                  Add Idea
                </button>
              </div>
            </div>
          </div>

          {/* Share Project Section */}
          <div className="col-lg-8 mb-4">
            <div className="share-section" onsubmit={handleSubmit}>
              <h2 className="display-5 fw-bold mb-4">Share Project</h2>
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
                <button className="btn btn-danger" onClick={handleShareProject}>
                  Share Project
                </button>
              </div>

              <div className="row row-cols-2 g-4">
                {projects.map((project, index) => (
                  <div key={index} className="col">
                    <div className="card h-100">
                      <div className="card-body">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text">{project.description}</p>
                        <div className="row">
                          <div className="col-6 d-flex align-items-center">
                            <button className="btn btn-success btn-like-dislike me-2" onClick={() => handleLikeProject(index, 'like')}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#dc3546" className="bi bi-hand-thumbs-up-fill" viewBox="0 0 16 16">
                                <path d="M6.956 1.745C7.021.81 7.908.087 8.864.325l.261.066c.463.116.874.456 1.012.965.22.816.533 2.511.062 4.51a10 10 0 0 1 .443-.051c.713-.065 1.669-.072 2.516.21.518.173.994.681 1.2 1.273.184.532.16 1.162-.234 1.733q.086.18.138.363c.077.27.113.567.113.856s-.036.586-.113.856c-.039.135-.09.273-.16.404.169.387.107.819-.003 1.148a3.2 3.2 0 0 1-.488.901c.054.152.076.312.076.465 0 .305-.089.625-.253.912C13.1 15.522 12.437 16 11.5 16H8c-.605 0-1.07-.081-1.466-.218a4.8 4.8 0 0 1-.97-.484l-.048-.03c-.504-.307-.999-.609-2.068-.722C2.682 14.464 2 13.846 2 13V9c0-.85.685-1.432 1.357-1.615.849-.232 1.574-.787 2.132-1.41.56-.627.914-1.28 1.039-1.639.199-.575.356-1.539.428-2.59z"/>
                              </svg>
                            </button>
                            <div className="like-dislike-count">{project.likes}</div>
                            <button className="btn btn-danger btn-like-dislike" onClick={() => handleLikeProject(index, 'dislike')}>
                              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#dc3545" className="bi bi-hand-thumbs-down-fill" viewBox="0 0 16 16">
                                <path d="M6.956 14.534c.065.936.952 1.659 1.908 1.42l.261-.065a1.38 1.38 0 0 0 1.012-.965c.22-.816.533-2.512.062-4.51q.205.03.443.051c.713.065 1.669.071 2.516-.211.518-.173.994-.68 1.2-1.272a1.9 1.9 0 0 0-.234-1.734c.058-.118.103-.242.138-.362.077-.27.113-.568.113-.856 0-.29-.036-.586-.113-.857a2 2 0 0 0-.16-.403c.169-.387.107-.82-.003-1.149a3.2 3.2 0 0 0-.488-.9c.054-.153.076-.313.076-.465a1.86 1.86 0 0 0-.253-.912C13.1.757 12.437.28 11.5.28H8c-.605 0-1.07.08-1.466.217a4.8 4.8 0 0 0-.97.485l-.048.029c-.504.308-.999.61-2.068.723C2.682 1.815 2 2.434 2 3.279v4c0 .851.685 1.433 1.357 1.616.849.232 1.574.787 2.132 1.41.56.626.914 1.28 1.039 1.638.199.575.356 1.54.428 2.591"/>
                              </svg>
                            </button>
                            <div className="like-dislike-count">{project.dislikes}</div>
                          </div>
                          <div className="col-6 text-end">
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
        </div>

        <div className="mt-5 text-center">
          <button className="btn btn-danger" onClick={() => handleLogin('John Doe')}>
            Login as John Doe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Project;
