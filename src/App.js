import "./App.css";
import { Link, Routes, Route, useNavigate } from "react-router-dom";

import { TransitionGroup, CSSTransition } from "react-transition-group";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Home from "./pages/Home/Home";
import Contact from "./pages/Contact/Contact";
import Courses from "./pages/Courses/Courses";
import Login from "./pages/Login/Login";
import AffiliatedColleges from "./pages/AffiliatedColleges/AffiliatedColleges";
import Footer from "./components/Footer/Footer";
import Project from "./pages/Project/Project";
import Resources from "./pages/Resources/Resources";
import Announcement from "./pages/Announcement/Announcement";
import SignUp from "./pages/SignUp/Signup";

import Header from "./components/Header";

function App() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <Header />

      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route
              path="/affiliatedcolleges"
              element={<AffiliatedColleges />}
            />
            <Route path="/courses" element={<Courses />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/project" element={<Project />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/announcement" element={<Announcement />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>

      <Footer />
    </div>
  );
}

export default App;
