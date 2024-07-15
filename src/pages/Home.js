import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import './Home.css';

function Home() {
  const videoRef = useRef(null);

  const handleVideoClick = () => {
    const videoElement = videoRef.current;
    videoElement.scrollIntoView({ behavior: 'smooth' });
  };

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
          <button onClick={handleVideoClick}>Watch my short video</button>
          <button onClick={() => window.open('/resume.pdf')}>Download my resume</button>
          <Link to="/contact">
            <button>Contact Info</button>
          </Link>
          <button onClick={() => window.open('https://linkedin.com/in/manasa-ullam')}>LinkedIn</button>
        </div>
      </div>
      <div className="video-section">
        <h2>Get to Know More</h2>
        <div className="video-wrapper">
          <video ref={videoRef} width="600" controls>
            <source src="/intro-video.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="sections">
        <div className="section">
          <h3>About Me</h3>
          <p>Brief introduction about Myself
          
          .</p>
          <Link to="/about">
            <button>Learn More</button>
          </Link>
        </div>
        <div className="section">
          <h3>Experience</h3>
          <p>Details about My work experience.</p>
          <Link to="/experience">
            <button>Learn More</button>
          </Link>
        </div>
        <div className="section">
          <h3>Projects</h3>
          <p>Information about My projects.</p>
          <Link to="/projects">
            <button>Learn More</button>
          </Link>
        </div>
        <div className="section">
          <h3>Contact Me</h3>
          <p>How to get in touch with Me.</p>
          <Link to="/contact">
            <button>Learn More</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
