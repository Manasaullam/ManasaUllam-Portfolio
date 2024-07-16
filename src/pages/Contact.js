import React from 'react';
import './Contact.css';
import Footer from '../components/Footer';
function Contact() {
  return (
    <div className="contact-container">
      <h4>Get In Touch</h4>
      <div className="contact-details">
        <h2>Contact Me</h2>
        <div className="contact-item">
          <img src="/email-icon.png" alt="Email" className="contact-icon" />
          <p>Email: umanasa13@gmail.com</p>
        </div>
        <div className="contact-item">
          <img src="/phone-icon.png" alt="Phone" className="contact-icon" />
          <p>Mobile Number: +419-378-8408</p>
        </div>
        <div className="contact-item">
          <img src="/address-icon.png" alt="Address" className="contact-icon" />
          <p>Address: Bowling Green, OH 43402 USA</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
