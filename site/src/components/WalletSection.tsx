import React from 'react';

const WalletSection = () => {
  return (
    <div className="wallet-section">
      <div className="wallet-content">
        <div className="wallet-text">
          <h2>One platform for everything</h2>
          <p>
            Monitor, analyze, and improve air quality in real-time.
            Get instant access to AQI data and AI-powered insights.
            Connect with local communities and businesses.
          </p>
          <button className="wallet-cta">Get Started Now!</button>
        </div>
        <div className="wallet-features">
          <div className="feature-button">
            <span className="feature-icon">📊</span>
            Monitor AQI
          </div>
          <div className="feature-button">
            <span className="feature-icon">🔍</span>
            Analyze Data
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletSection; 