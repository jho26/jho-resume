import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="hero" className="hero resume-hero">
      <div className="hero-background resume-hero-background"></div>
      <div className="hero-content">
        <p className="hero-eyebrow fade-in">Senior Software Engineer</p>
        <h1 className="hero-title fade-in">Siu (Jonathan) Ho</h1>
        <p className="hero-subtitle fade-in-delay">
          Distributed Systems · Cloud Architecture · Production Reliability
        </p>
        <p className="hero-location fade-in-delay-2">
          Tableau / Salesforce &nbsp;·&nbsp; Seattle, WA
        </p>
        <div className="hero-buttons fade-in-delay-3">
          <a
            href="mailto:uschohk@hotmail.com"
            className="cta-button"
          >
            Email Me
          </a>
          <a
            href="https://linkedin.com/in/siuho"
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button-secondary"
          >
            LinkedIn →
          </a>
        </div>
      </div>
      {!scrolled && (
        <div className="scroll-indicator">
          <span></span>
        </div>
      )}
    </section>
  );
};

export default Hero;
