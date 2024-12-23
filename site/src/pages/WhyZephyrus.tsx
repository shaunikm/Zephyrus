import React from 'react';
import { Link } from 'react-router-dom';

function WhyZephyrus() {
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
          <h1>Why Choose Zephyrus?</h1>
          <p>
            Zephyrus combines cutting-edge AI technology with comprehensive air quality
            data to provide the most accurate and reliable monitoring system available.
          </p>
        </div>
      </main>
    </div>
  );
}

export default WhyZephyrus; 