import React from "react";
import "./Navbar.css"; // Import Navbar-specific styles

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="www.google.com">Navbar</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarScroll">
          <ul className="navbar-nav me-auto">
            <li className="nav-item"><a className="nav-link" href="www.google.com">Home</a></li>
            <li className="nav-item"><a className="nav-link" href="www.google.com">Link</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
