import React, { useEffect, useState } from 'react';
import WalletSection from './WalletSection';

interface ScrollSectionProps {
  children: React.ReactNode;
}

const ScrollSection: React.FC<ScrollSectionProps> = ({ children }) => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const progress = Math.min(scrollPosition / (windowHeight * 0.1), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
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
      <div 
        className="main-content"
        style={{
          opacity: scrollProgress,
          visibility: scrollProgress <= 0 ? 'hidden' : 'visible',
          pointerEvents: scrollProgress < 1 ? 'none' : 'auto',
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          transform: `translateY(${scrollProgress >= 1 ? '0' : '20px'})`
        }}
      >
        {children}
        <WalletSection />
      </div>
    </>
  );
};

export default ScrollSection; 