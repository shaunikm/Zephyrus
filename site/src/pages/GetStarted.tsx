import React from 'react';
import { Link } from 'react-router-dom';

function GetStarted() {
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
          <h1>Get Started with Zephyrus</h1>
          <p>
            Begin your journey towards better air quality monitoring and management.
            Set up your first monitoring station in minutes.
          </p>
        </div>
      </main>
    </div>
  );
}

export default GetStarted; 