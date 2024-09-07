import React from 'react';
import './css/ContactForm.css';

const ContactForm = () => {
  return (
    <section className="contact-section">
      <div className="contact-info">
        <h3>Let's Get In Touch</h3>
        <p>We’re open for any suggestion or just to have a chat</p>
        <p>Address: Kabjesa, Thimphu, Bhutan</p>
        <p>Phone: +975 17952687</p>
        <p>Email: druklandchain@gmail.com</p>
      </div>
      <form className="contact-form">
        <h3>Get In Touch</h3>
        
        <div className="form-group">
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="full-name">Full Name</label>
              <input type="text" id="full-name" placeholder="Full Name" />
            </div>
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" placeholder="Email" />
            </div>
          </div>
          
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" placeholder="Subject" />
            </div>
            <div className="form-field">
              <label htmlFor="contact-number">Contact Number</label>
              <input type="text" id="contact-number" placeholder="Contact Number" />
            </div>
          </div>
        </div>
        
        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea id="message" placeholder="Message"></textarea>
        </div>
        
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default ContactForm;
