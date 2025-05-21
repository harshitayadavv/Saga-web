import React from "react";
import { Link } from "react-router-dom";

// Import images at top for cleaner code
// import logoImg from "../assets/logo.png";
import searchIcon from "../assets/search-icon.png";
import profilePic from "../assets/profile-picture.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Clicking logo goes to Home */}
      <Link to="/" className="logo" style={{ textDecoration: "none", color: "#003854" }}>
        Saga
        {/* Or you can use logoImg instead of text */}
        {/* <img src={logoImg} alt="Saga Logo" /> */}
      </Link>

      <div className="search-container">
        <input
          className="search-bar"
          type="text"
          placeholder="Search for books or authors"
        />
        <img
          src={searchIcon}
          alt="Search"
          className="search-icon"
        />
      </div>

      {/* Clicking profile picture goes to Profile */}
      <Link to="/profile">
        <img
          src={profilePic}
          alt="Profile"
          className="profile-picture"
          style={{ cursor: "pointer" }}
        />
      </Link>
    </nav>
  );
};

export default Navbar;
