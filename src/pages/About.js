import React from 'react';
import { useNavigate } from 'react-router-dom';
import './About.css';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-page">
      <header>
        <h1>About Us</h1>
        <p>
          Welcome to our platform! We connect students with top-quality courses
          from prestigious universities worldwide. Whether you're looking to
          learn a new skill or advance your career, we've got you covered.
        </p>
      </header>

      {/* Universities Section */}
      <section className="universities">
        <h2>Our Partner Universities</h2>
        <ul>
          <li>
            <a href="https://www.harvard.edu" target="_blank" rel="noopener noreferrer">
              Harvard University
            </a>
          </li>
          <li>
            <a href="https://www.stanford.edu" target="_blank" rel="noopener noreferrer">
              Stanford University
            </a>
          </li>
          <li>
            <a href="https://www.mit.edu" target="_blank" rel="noopener noreferrer">
              Massachusetts Institute of Technology (MIT)
            </a>
          </li>
          <li>
            <a href="https://www.cam.ac.uk" target="_blank" rel="noopener noreferrer">
              University of Cambridge
            </a>
          </li>
        </ul>
      </section>
      <section className="actions">
        <button onClick={() => navigate('/')}>Login</button>
        <button onClick={() => navigate('/register')}>Register</button>
      </section>
    </div>
  );
};

export default About;
