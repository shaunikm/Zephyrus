import React, { Suspense } from 'react';
import ThreeDScene from './ThreeDScene';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header>
        <nav>
          <div className="logo">M</div>
          <div className="nav-links">
            <a href="#">Interviews</a>
            <a href="#">Candidates</a>
            <a href="#">Companies</a>
            <a href="#">Human Data</a>
            <a href="#">Blog</a>
          </div>
          <button className="get-started">Get started</button>
        </nav>
      </header>

      <main>
        <div className="content-section">
          <div className="announcement">
            Zephyrus raises $32 million to find your next job • <a href="#">Read Forbes</a>
          </div>
          <h1>Zephyrus matches you with elite opportunities</h1>
          <p>
            Join the thousands of candidates around the world using Zephyrus to land their remote dream job with just a single application.
          </p>
          <div className="cta-buttons">
            <button className="primary">Apply for work</button>
            <button className="secondary">Hire instantly →</button>
          </div>
        </div>
        <div className="globe-section">
          <Suspense fallback={<div>Loading...</div>}>
            <ThreeDScene />
          </Suspense>
        </div>
      </main>
    </div>
  );
}

export default App;
