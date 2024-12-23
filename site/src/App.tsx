import React, { Suspense } from 'react';
import ThreeDScene from './ThreeDScene';
import ScrollSection from './components/ScrollSection';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <ScrollSection>
        <main>
          <div className="content-section">
            <div className="announcement">
              • The perfect solution to match communities with companies •
            </div>
            <h1>Pure Air - Blessed by Zephyrus, Perfected by AI</h1>
            <p>View the AQI of your home!</p>
            <div className="cta-buttons">
              <button className="primary">Learn More!</button>
              <button className="secondary">Why Zephyrus? →</button>
            </div>
          </div>
          <div className="globe-section">
            <Suspense fallback={<div>Loading...</div>}>
              <ThreeDScene />
            </Suspense>
          </div>
        </main>
      </ScrollSection>
    </div>
  );
}

export default App;
