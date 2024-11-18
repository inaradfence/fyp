import React, { useState, useEffect } from "react";
import "./Project.css";
import { IoSearch } from "react-icons/io5";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Project() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const [projectUrl, setProjectUrl] = useState("");
  const [projectPdf, setProjectPdf] = useState(null);
  const [currentUser, setCurrentUser] = useState("");
  const [error, setError] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    url: "",
    file: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const fetchProjects = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/showprojects"
      );
      //console.log(response?.data);
      setProjects(response?.data); // Update state with fetched projects
      setFilteredProjects(response?.data);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    }
  };

  const handleShareProject = async () => {
    if (!projectTitle || !projectDescription) {
      setError(
        "Please complete your credentials (Title and Description are required)"
      );
      return;
    }
    if (!projectUrl && !projectPdf) {
      setError(
        "Please provide either a Project URL or choose a file to share."
      );
      return;
    }

    console.log("hgyhjjkjk");

    try {
      const response = await axios.post("http://localhost:5000/api/projects", {
        title: formData.title,
        description: formData.description,
        url: formData.url,
        file: formData.file,
        email: currentUser?.email
      });

      console.log("hgyhjjkjk");
      console.log("Response:", response.data);
      alert("Sharing is Caring!");
      setFormData({
        title: formData.title,
        description: formData.description,
        url: formData.url,
        file: formData.file,
        userId: currentUser?.id
      });
      //console.log(response.data.message);
      setError("");
      setShowPopup(false);
      setProjectTitle("");
      setProjectDescription("");
      setProjectUrl("");
      setProjectPdf(null);
      fetchProjects(); // Refresh project list
    } catch (error) {
      console.error("Failed to share project:", error);
      setError("Failed to share project");
    }
  };

  useEffect(() => {
    //console.log(projects,searchQuery)
    const result = projects?.filter(
      (project) =>
        project?.title?.toLowerCase().includes(searchQuery?.toLowerCase()) ||
        project?.description?.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProjects(result);
  }, [searchQuery]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    } else {
      fetchProjects(); // Fetch projects on component mount
    }
  }, [navigate]);
  useEffect(() => {
    const user = localStorage.getItem("user");
    setCurrentUser(user ? JSON.parse(user) : null);
    fetchProjects();
  }, []);

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
        <div className="input-group position-relative">
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
          {/* Add Project Button */}
          <button
            onClick={() => setShowPopup(true)}
            className="add-project-button"
          >
            +
          </button>
        </div>
      </div>

      {filteredProjects && filteredProjects?.length === 0 && (
        <p className="no-results-message">Result not found</p>
      )}

      {/* Project Cards */}
      <div className="project-cards">
        {filteredProjects &&
          filteredProjects?.map((project, index) => (
            <div key={index} className="card">
              <h3 className="card-title">{project?.title}</h3>
              <p className="card-text">{project?.description}</p>
              <p>
                <strong>Shared by:</strong> {project.username}
              </p>
              {project.url || project.file ? (
                <a
                  href={
                    project.url
                      ? project.url
                      : URL.createObjectURL(project.file)
                  }
                  className="btn btn-purple btn-sm me-2"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View
                </a>
              ) : null}
            </div>
          ))}
      </div>

      {/* Share Project Section */}
      {showPopup && (
        <div className="popup-overlay" onClick={() => setShowPopup(false)}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <div className="col-lg-8 mb-4">
              <div className="share-section">
                <div className="d-flex align-items-center justify-content-between">
                  <h2 className="display-5 fw-bold mb-4">Share Resources</h2>
                  <span
                    className="close-icon"
                    onClick={() => setShowPopup(false)}
                  >
                    &times;
                  </span>
                </div>
                <div className="mb-4">
                  <input
                    name="title"
                    type="text"
                    className="form-control mb-2"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Title"
                  />
                  <input
                    name="description"
                    type="text"
                    className="form-control mb-2"
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Description"
                  />
                  <input
                    name="url"
                    type="text"
                    className="form-control mb-2"
                    value={formData.url}
                    onChange={handleChange}
                    placeholder="URL"
                  />
                  <input
                    name="file"
                    type="file"
                    value={formData.file}
                    className="form-control mb-2"
                    onChange={handleChange}
                  />
                  <div
                    className="error message"
                    style={{ color: "red", marginBottom: "20px" }}
                  >
                    {error}
                  </div>
                  <button type="button" onClick={handleShareProject}>
                    Share
                  </button>
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
