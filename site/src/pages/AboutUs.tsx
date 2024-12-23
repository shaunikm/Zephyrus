import React from 'react';
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <div className="app-container">
      <header>
        <nav>
          <Link to="/" className="logo">Z</Link>
          <div className="nav-links">
            <Link to="/about">About Us</Link>
            <Link to="/map">Map</Link>
            <Link to="/learn">Learn More</Link>
          </div>
          <Link to="/get-started" className="get-started">Get started</Link>
        </nav>
      </header>
      <main>
        <div className="content-section">
          <h1>About Zephyrus</h1>
          <p>
            Zephyrus is dedicated to providing real-time air quality monitoring and analysis,
            helping communities and businesses make informed decisions about air quality management.
          </p>
        </div>
      </main>
    </div>
  );
}

export default AboutUs; 