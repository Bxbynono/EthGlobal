import React from 'react';
import './css/Topside.css'; 
import heroImage from './img/image 1.png'; 

const Topside = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Bring <div className='topside-idea'>Your Ideas to Life</div></h1>
        <p>"Join a community of creators, innovators, and dreamers. Start your crowdfunding campaign today!"</p>
      </div>
      <div className="hero-image">
        <img src={heroImage} alt="Crowd" />
      </div>
    </section>
  );
}

export default Topside;
