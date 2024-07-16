import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="project-card">
        <img src="/splash.jpeg" alt="City Code Enforcement Mobile Application" className="project-img"/>
        <div className="project-details">
          <h2>City Code Enforcement Mobile Application</h2>
          <p>
            Developed a cross-platform mobile application to enhance code enforcement with real-time tracking and management of violations. The application integrates precise geolocation and navigation features, along with dynamic data visualization tools for effective reporting and analytics.
          </p>
          <p><strong>Technologies Used:</strong> React Native, Google Maps API, React Native Gifted Charts, Firebase.</p>
          <a href="https://github.com/your-repo/city-code-enforcement" className="github-link">Github</a>
        </div>
      </div>
      <div className="project-card">
        <img src="/video-chatting-website.jpg" alt="Video Chatting Website" className="project-img"/>
        <div className="project-details">
          <h2>Video Chatting Website</h2>
          <p>
            Created a web-based video chatting platform that supports real-time, plugin-free video conferencing accessible globally. The website features advanced peer-to-peer connections, chat room management, and responsive cross-platform interfaces, ensuring an enhanced video streaming and user interaction experience.
          </p>
          <p><strong>Technologies Used:</strong> Adobe Flash Media Server, Scaledrone, WebRTC, JavaScript, HTML5 APIs.</p>
          <a href="https://github.com/Manasaullam/Video-Chatting-Website" className="github-link">Github</a>
        </div>
      </div>
      <div className="footer1">
        <h2>Copyright © 2024 Manasa Ullam. All Rights Reserved.</h2>
      </div>
    </div>
  );
}

export default Projects;
