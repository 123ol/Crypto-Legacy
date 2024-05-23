import React, { useState } from 'react';
import { FaBars } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div className="nav__header">
        <div className="nav__logo">
          <h1>Crypto Legacy</h1>
        </div>
        <div className="nav__menu__btn" id="menu-btn" onClick={toggleMenu}>
          <span>
            <FaBars className={`ri-${menuOpen ? 'close' : 'menu'}-line`} />
          </span>
        </div>
      </div>
      <ul className={`nav__links ${menuOpen ? 'open' : ''}`} id="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><a href="#ben">Benefits</a></li>
        <li><a href="#docs">Docs</a></li>
        <li><Link to="/contact">Contact us</Link></li>
      </ul>
      <div className="nav__btns">
        <button className="btn">Download</button>
      </div>
    </nav>
  );
};

export default Navbar;
