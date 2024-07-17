import React from 'react';
import Footer from '../components/Footer';
import './About.css';

function About() {
  return (
    <div className="about">
      <h1>About Me</h1>
      <div className="about-content">
        <div className="about-left">
          <img src= {`${process.env.PUBLIC_URL}/Profile1-image.png`} alt="Manasa Ullam" className="about-img" />
        </div>
        <div className="about-right">
          <p>
            My name is Manasa Ullam. I am a recent graduate from Bowling Green State University, where I earned a Master's degree with a GPA of 3.88. I have over 3 years of experience in the software field as a full-stack developer and software engineer. For the past year, I have worked as a graduate teaching assistant and part-time full-stack developer at Senecio Corporation.
          </p>
          <p>
            I am currently seeking full-time employment opportunities in roles such as software developer, full-stack developer, software engineer, and React Native developer. I am eager to learn and passionate about exploring new technologies to continuously increase my knowledge and skills.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
