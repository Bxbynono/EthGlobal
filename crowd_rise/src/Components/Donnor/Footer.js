import React from 'react';
import './css/Footer.css';
import logo from "./img/Logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="logo"><img src={logo} alt="logo-metamask"></img></div>
        <ul >
          <div className="footer-links">
            <li><a href="/">Organogram</a></li>
            <li><a href="/">About Us</a></li>
            <li><a href="/">FAQ</a></li>
            <li><a href="/">Testimonials</a></li>
          </div>
            <p className='footCopyright'>©2024 CrowdRise</p>
        </ul>
        <div className="social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebook} size="2x" />
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitter} size="2x" />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} size="2x" />
          </a>
          <p>crowdrise@gmail.com</p>
        
        </div>
      </div>
    </footer>
  );
};

export default Footer;
