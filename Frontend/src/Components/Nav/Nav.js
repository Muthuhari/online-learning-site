import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import "./Nav.css";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-purple">
      <div className="container-fluid">
        {/* Logo */}
        <Link className="navbar-brand" to="/mainhome">
          <img src="/img/we-log.png" alt="Logo" className="logo" />
        </Link>

        {/* Toggler for mobile */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarNav">
          {/* Centered nav items */}
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/allCourses">Courses</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/events">Events</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blogs">Blogs</Link>
            </li>
          </ul>

          {/* Right-aligned buttons */}
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/regi">
                <button className="btn custom-button">Register</button>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/log">
                <button className="btn custom-button">Login</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
