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
      <div className="resume-hero-background" aria-hidden="true"></div>
      <div className="hero-blueprint-lines" aria-hidden="true"></div>
      <div className="hero-ring" aria-hidden="true"></div>
      <div className="hero-ring-inner" aria-hidden="true"></div>

      <div className="hero-content">
        <p className="hero-eyebrow">
          Senior Software Engineer
        </p>

        <h1 className="hero-title">
          Jonathan<br />
          <span className="hero-title-accent">Ho</span>
        </h1>

        <p className="hero-subtitle">
          Distributed Systems · Cloud Architecture · Production Reliability
        </p>

        <p className="hero-location">
          Tableau / Salesforce &nbsp;·&nbsp; Seattle, WA
        </p>

        <div className="hero-buttons">
          <a href="mailto:uschohk@hotmail.com" className="cta-button">
            Get in Touch
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

        <div className="hero-stats">
          <div className="hero-stat">
            <span className="hero-stat-number">10+</span>
            <span className="hero-stat-label">Years Exp.</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">99.95%</span>
            <span className="hero-stat-label">Availability</span>
          </div>
          <div className="hero-stat">
            <span className="hero-stat-number">T1</span>
            <span className="hero-stat-label">Tier Services</span>
          </div>
        </div>
      </div>

      {!scrolled && (
        <div className="scroll-indicator" aria-hidden="true">
          <span>Scroll</span>
        </div>
      )}
    </section>
  );
};

export default Hero;
