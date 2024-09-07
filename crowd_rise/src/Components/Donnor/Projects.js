import React from 'react';
import './css/Projects.css';
import imag1 from "./img/image 31.png"
import imag2 from "./img/image 33.png"
import imag3 from "./img/image 34.png"
import { useNavigate } from 'react-router-dom';

const Projects = () => {

  const navigate = useNavigate();  

  const handleReadMore = (projectId) => {
    navigate(`/donor/project-details?id=${projectId}`);  
  }
  return (
    <section className="projects-section">
      <h2>Crowd Rise Community</h2>
      <p>Recent Projects</p>
      <div className="projects-container">
        <div className="project-card">
          <img src={imag1} alt="Retro Seats" />
          <button onClick={() => handleReadMore(1)}>Read More</button> {/* Example project ID 1 */}
        </div>
        <div className="project-card">
          <img src={imag2} alt="Tech Deal" />
          <button onClick={() => handleReadMore(2)}>Read More</button> {/* Example project ID 2 */}
        </div>
        <div className="project-card">
          <img src={imag3} alt="Mobile Repair" />
          <button onClick={() => handleReadMore(3)}>Read More</button> {/* Example project ID 3 */}
        </div>
      </div>
      <div className="projects-container">
        <div className="project-card">
          <img src={imag1} alt="Retro Seats" />
          <button>Read More</button>
        </div>
        <div className="project-card">
          <img src={imag2} alt="Tech Deal" />
          <button>Read More</button>
        </div>
        <div className="project-card">
          <img src={imag3} alt="Mobile Repair" />
          <button>Read More</button>
        </div>
        {/* Add more project cards as needed */}
      </div>
    </section>
  );
};

export default Projects;
