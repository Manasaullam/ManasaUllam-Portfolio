import React from 'react';
import Footer from '../components/Footer';
import './Experience.css';

function Experience() {
  return (
    <div className="experience">
      <h1>Experience</h1>
      <div className="experience-content">
        <div className="experience-card">
          <img src="/experience-icon.png" alt="Experience Icon" className="icon"/>
          <h2>Experience</h2>
          <p>3+ years</p>
          <p>Software Engineer</p>
        </div>
        <div className="experience-card">
          <img src="/education-icon.png" alt="Education Icon" className="icon"/>
          <h2>Education</h2>
          <p>MS in Computer Science</p>
          <p>BS in Computer Science</p>
        </div>
      </div>
      <p className="experience-description">
        I have over three years of professional experience in various programming languages and technologies, enhanced by skills acquired during my master’s studies. My roles have included Software Development Engineer and Full Stack Developer, where I focused on developing scalable web applications and cloud-native microservices. This involved integrating advanced AWS services and employing Agile methodologies.
      </p>
      <p className="experience-description">
        Most recently, I led the development of the Augvents mobile application, focusing on front-end design using React Native and backend architecture using Node.js and Express.js. I managed complex databases with MongoDB, prioritizing efficient and collaborative development environments.
      </p>
      <div className="skills-content">
        <div className="skills-card">
          <h2>Frontend Development</h2>
          <ul>
            <li><img src="/tickmark-icon.png" alt="Tick Mark Icon" className="tick-icon"/> HTML</li>
            <li><img src="/tickmark-icon.png" alt="Tick Mark Icon" className="tick-icon"/> CSS</li>
            <li><img src="/tickmark-icon.png" alt="Tick Mark Icon" className="tick-icon"/> React</li>
            <li><img src="/tickmark-icon.png" alt="Tick Mark Icon" className="tick-icon"/> JavaScript</li>
            <li><img src="/tickmark-icon.png" alt="Tick Mark Icon" className="tick-icon"/> React Native</li>
            <li><img src="/tickmark-icon.png" alt="Tick Mark Icon" className="tick-icon"/> Flutter</li>
          </ul>
        </div>
        <div className="skills-card">
          <h2>Backend Development</h2>
          <ul>
            <li><img src="/tickmark-icon.png" alt="Tick Mark Icon" className="tick-icon"/> Express JS</li>
            <li><img src="/tickmark-icon.png" alt="Tick Mark Icon" className="tick-icon"/> Node JS</li>
            <li><img src="/tickmark-icon.png" alt="Tick Mark Icon" className="tick-icon"/> FAST API</li>
            <li><img src="/tickmark-icon.png" alt="Tick Mark Icon" className="tick-icon"/> Python</li>
            <li><img src="/tickmark-icon.png" alt="Tick Mark Icon" className="tick-icon"/> AWS</li>
            <li><img src="/tickmark-icon.png" alt="Tick Mark Icon" className="tick-icon"/> MongoDB</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Experience;
