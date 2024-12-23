import React from 'react';
import { Link } from 'react-router-dom';

function LearnMore() {
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
          <h1>Learn More About Our Mission</h1>
          <p>
            Discover how Zephyrus is revolutionizing air quality monitoring through
            advanced AI technology and real-time data analysis.
          </p>
        </div>
      </main>
    </div>
  );
}

export default LearnMore; 