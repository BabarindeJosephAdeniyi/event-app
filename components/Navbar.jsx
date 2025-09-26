import React, { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi"; 
import "./nav.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="nav">
      <div className="ticket">
        <Link to="/">
          <img src="/navimage.png" alt="Event Logo" />
        </Link>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>Events</Link>
        </li>
        <li>
          <Link to="/my-tickets" onClick={() => setMenuOpen(false)}>My Tickets</Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About Project</Link>
        </li>
      </ul>

      <Link to="/my-tickets">
        <button className="arrow">
          <h4>MY TICKETS</h4>
          <FaLongArrowAltRight />
        </button>
      </Link>

      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
      </div>
    </div>
  );
};

export default Navbar;
