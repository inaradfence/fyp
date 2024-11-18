import React, { useState, useEffect } from "react";
import "./Project.css";
import { IoSearch } from "react-icons/io5";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { formatDate } from "../../utils/libs";

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
    if (!formData?.title || !formData?.description) {
      setError(
        "Please complete your credentials (Title and Description are required)"
      );
      return;
    }
    if (!formData?.url && !formData?.file) {
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
        user: currentUser?.id,
      });

      console.log("hgyhjjkjk");
      console.log("Response:", response.data);
      alert("Sharing is Caring!");
      setFormData({
        title: formData.title,
        description: formData.description,
        url: formData.url,
        file: formData.file,
        userId: currentUser?.id,
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
  console.log(projects);
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
            <div key={index} className="card m-0">
              <h3 className="card-title text-capitalize mb-3">
                {project?.title}
              </h3>
              <p className="card-text pt-0">{project?.description}</p>
              {project.url || project.file ? (
                <a
                  href={
                    project.url
                      ? project.url
                      : URL.createObjectURL(project.file)
                  }
                  className="me-2 mt-auto "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              ) : null}
              <p className="p-0 mb-2">
                Shared On:{" "}
                <span
                  className=""
                  style={{
                    fontSize: "14px",
                    color: "#50052d",
                    fontWeight: "500",
                    lineHeight: "1.2",
                  }}
                >
                  {formatDate(project?.createdAt)}
                </span>
              </p>

              {project?.user && (
                <>
                  <p className="p-0 mb-2">
                    <strong>Shared by:</strong>
                  </p>
                  <div className="d-flex align-items-center mb-2 justify-content-start gap-2">
                    <img
                      src="https://res.cloudinary.com/dcxfsvq4i/image/upload/v1731949762/Personal/27470334_7309681_ktsak2.jpg"
                      alt="Profile"
                      className="profile-image"
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        objectFit: "cover",
                      }}
                    />
                    <span
                      className="text-sm"
                      style={{
                        fontSize: "14px",
                        color: "#50052d",
                        fontWeight: "500",
                        lineHeight: "1.2",
                        textStyle: 'normal',
                      }}
                    >
                      {project?.user?.firstname} {project?.user?.lastname}{" "}
                      <br />
                      {project?.user?.designation}
                    </span>
                  </div>
                </>
              )}
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
