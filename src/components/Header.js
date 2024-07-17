import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={`${process.env.PUBLIC_URL}/profile-image.png`} alt="Manasa Ullam" className="profile-img"/>
        <span>MANASA ULLAM</span>
      </div>
      <nav>
        <ul>
          <li><Link to="/">HOME</Link></li>
          <li><Link to="/about">ABOUT</Link></li>
          <li><Link to="/experience">EXPERIENCE</Link></li>
          <li><Link to="/projects">PROJECTS</Link></li>
          <li><Link to="/contact">CONTACT ME</Link></li>
        </ul>
      </nav>
      
    </header>
  );
}

export default Header;
