import React, { useEffect, useState } from 'react';

const SeattleSkyline: React.FC = () => (
  <svg
    className="seattle-skyline"
    viewBox="0 0 1200 220"
    preserveAspectRatio="xMidYMax meet"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Space Needle */}
    <polyline points="340,10 344,60 350,65 350,180 330,180 330,65 336,60" />
    <line x1="340" y1="10" x2="340" y2="60" />
    <ellipse cx="340" cy="62" rx="10" ry="5" />
    {/* Space Needle legs */}
    <line x1="330" y1="90" x2="316" y2="180" />
    <line x1="350" y1="90" x2="364" y2="180" />

    {/* Columbia Center (tallest) */}
    <rect x="530" y="20" width="28" height="160" />
    <rect x="534" y="15" width="20" height="10" />
    <line x1="544" y1="5" x2="544" y2="15" />

    {/* 1201 Third Ave */}
    <rect x="566" y="50" width="22" height="130" />
    <rect x="570" y="44" width="14" height="10" />

    {/* Wells Fargo Center */}
    <rect x="496" y="60" width="26" height="120" />
    <rect x="500" y="55" width="18" height="8" />

    {/* Two Union Square */}
    <rect x="460" y="55" width="28" height="125" />
    <rect x="463" y="50" width="22" height="8" />

    {/* Russell Investments Center */}
    <rect x="600" y="65" width="24" height="115" />

    {/* Midrise cluster left */}
    <rect x="390" y="90" width="20" height="90" />
    <rect x="415" y="80" width="18" height="100" />
    <rect x="437" y="95" width="16" height="85" />

    {/* Midrise cluster right */}
    <rect x="630" y="80" width="18" height="100" />
    <rect x="652" y="90" width="20" height="90" />
    <rect x="676" y="100" width="16" height="80" />
    <rect x="696" y="85" width="22" height="95" />

    {/* Far left buildings */}
    <rect x="260" y="110" width="18" height="70" />
    <rect x="282" y="100" width="16" height="80" />
    <rect x="302" y="115" width="14" height="65" />

    {/* Far right buildings */}
    <rect x="724" y="95" width="20" height="85" />
    <rect x="748" y="105" width="18" height="75" />
    <rect x="770" y="115" width="22" height="65" />
    <rect x="796" y="120" width="16" height="60" />
    <rect x="816" y="110" width="14" height="70" />

    {/* Ground line */}
    <line x1="240" y1="180" x2="960" y2="180" />
  </svg>
);

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
      <SeattleSkyline />

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
