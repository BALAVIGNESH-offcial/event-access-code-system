import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles.css"; // Import styles

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* ✅ Clicking "Event Access System" goes to Home */}
        <Link to="/" className="logo">
          Event Access System
        </Link>

        {/* ✅ Push Menu Button to the Right */}
        <div className="menu-container">
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <i className="ri-close-line"></i> // Close icon when menu is open
            ) : (
              <i className="ri-menu-line"></i> // Menu icon when menu is closed
            )}
          </button>
        </div>

        {/* ✅ Navigation Links */}
        <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
          <li>
            <Link to="/generate" onClick={() => setMenuOpen(false)}>
              Generate Code
            </Link>
          </li>
          <li>
            <Link to="/validate" onClick={() => setMenuOpen(false)}>
              Validate Code
            </Link>
          </li>
          <li>
            <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
              Dashboard
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
