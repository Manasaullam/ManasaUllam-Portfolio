import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
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
          <img src={`${process.env.PUBLIC_URL}/intro-image.jpeg`} alt="Manasa Ullam" className="intro-img" />
          <h2>Software Developer</h2>
        </div>
        <div className="right-content">
          <button onClick={handleVideoClick}>Watch my short intro video</button>
          <button onClick={() => window.open(`${process.env.PUBLIC_URL}/resume.pdf`)}>Download my resume</button>
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
            <source src={`${process.env.PUBLIC_URL}/intro-video.mp4`} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div className="sections">
        <div className="section">
          <h3>About Me</h3>
          <p>My name is Manasa Ullam. I am a recent graduate from Bowling Green State University, holding a Master's degree in Computer Science with a GPA of 3.88.</p>
          <p>Over the last three years, I have honed my skills as a Full-Stack Developer.I am currently on the lookout for opportunities</p>
          <Link to="/about">
            <button>Learn More</button>
          </Link>
        </div>
        <div className="section">
          <h3>Experience</h3>
          <p>With over three years of experience, I specialize in developing scalable web apps and robust microservices, leveraging advanced technologies and Agile methodologies.</p>
          <p>I also have significant expertise in cloud infrastructure, particularly AWS, to deploy secure, scalable applications.</p>
          <Link to="/experience">
            <button>Learn More</button>
          </Link>
        </div>
        <div className="section">
          <h3>Projects</h3>
          <p>Developed a cross-platform mobile app for efficient code enforcement, featuring real-time tracking, geolocation, and advanced data visualization.</p>
          <p>Built a web-based video chatting platform enabling real-time communication without plugins. Includes peer-to-peer connections and adaptive interfaces.</p>
          <Link to="/projects">
            <button>Learn More</button>
          </Link>
        </div>
        <div className="section">
          <h3>Contact Me</h3>
          <p>Email: umanasa13@gmail.com</p>
          <p>Mobile: +419-378-8408</p>
          <p>Location: Bowling Green, OH 43402 USA</p>
        </div>
      </div>
      <div className="footer1">
        <h2>Copyright © 2024 Manasa Ullam. All Rights Reserved.</h2>
      </div>
    </div>
  );
}

export default Home;
