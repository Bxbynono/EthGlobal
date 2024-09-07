import React from 'react';
import './css/Header.css';
import logo from "./img/Logo.png"
const Header = () => {
  return (
    <header className="header">
      <div className="logo"><img src={logo} alt="logo-metamask"></img></div>
      <nav>
        <ul className="nav-links">
          <li><a href="/">Home</a></li>
          <li><a href="/">Organogram</a></li>
          <li><a href="/">About Us</a></li>
          <li><a href="/">FAQ</a></li>
          <li><a href="/">Testimonials</a></li>
          <button className="logout-btn">Log Out</button>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
