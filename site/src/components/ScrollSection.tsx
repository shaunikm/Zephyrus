// ScrollSection.tsx
import React, { useEffect, useState } from 'react';

interface ScrollSectionProps {
  children: React.ReactNode;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ children }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(scrollPosition / (windowHeight * 0.5), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Initial Page Content */}
      <div 
        className="initial-page"
        style={{
          opacity: 1 - scrollProgress,
          visibility: scrollProgress >= 1 ? 'hidden' : 'visible',
          pointerEvents: scrollProgress >= 1 ? 'none' : 'auto',
          transform: `scale(${1 + scrollProgress * 0.2})`,
          filter: `blur(${scrollProgress * 10}px)`
        }}
      >
        <div className="centered-logo">Z</div>
      </div>

      {/* Main Content */}
      <div 
        className="main-content"
        style={{
          opacity: scrollProgress,
          visibility: scrollProgress <= 0 ? 'hidden' : 'visible',
          pointerEvents: scrollProgress < 1 ? 'none' : 'auto',
          position: 'relative',
          top: 0,
          left: 0,
          width: '100%',
          transform: `translateY(${scrollProgress >= 1 ? '0' : '20px'})`,
          height: 'auto',
          overflowY: 'auto',
        }}
      >
        {children}

        {/* Demo Section */}
        <div 
          className="demo-section"
          style={{
            textAlign: 'center',
            padding: '50px 20px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.1)',
            marginTop: '20px'
          }}
        >
          <h1>Interactive Demo</h1>
          <p>Experience our cutting-edge features in real-time.</p>
          <div className="demo-content" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <div style={{ width: '300px', height: '200px', backgroundColor: '#007bff', borderRadius: '10px', margin: '10px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Demo Box 1</div>
            <div style={{ width: '300px', height: '200px', backgroundColor: '#28a745', borderRadius: '10px', margin: '10px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Demo Box 2</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ScrollSection;
