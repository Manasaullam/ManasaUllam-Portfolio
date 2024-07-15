import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <div className="intro">
        <h2>Hello, I'm Manasa Ullam! Welcome to my portfolio</h2>
      </div>
      <div className="main-content">
        <div className="left-content">
          <img src="/intro-image.jpeg" alt="Manasa Ullam" className="intro-img"/>
          
          <h2>Software Developer</h2>
        </div>
        <div className="right-content">
          <button onClick={() => document.getElementById('intro-video').style.display='block'}>Watch my short video</button>
          <button onClick={() => window.open('/resume.pdf')}>Download my resume</button>
          <Link to="/contact">
            <button>Contact Info</button>
          </Link>
          <button onClick={() => window.open('https://linkedin.com/in/manasa-ullam')}>LinkedIn</button>
        </div>
      </div>
      <video id="intro-video" width="600" controls style={{ display: 'none' }}>
        <source src="/intro-video.mp4" type="video/mp4"/>
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default Home;
