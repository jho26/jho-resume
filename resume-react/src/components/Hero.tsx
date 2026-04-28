import React from 'react';

const SeattleSkyline: React.FC = () => (
  <svg
    className="seattle-skyline"
    viewBox="0 0 1440 260"
    preserveAspectRatio="none"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Space Needle */}
    <polyline points="340,10 344,60 352,68 352,220 326,220 326,68 336,60" />
    <line x1="340" y1="10" x2="340" y2="60" />
    <ellipse cx="340" cy="63" rx="13" ry="6" />
    <line x1="326" y1="100" x2="308" y2="220" />
    <line x1="352" y1="100" x2="370" y2="220" />

    {/* Columbia Center (tallest) */}
    <rect x="526" y="18" width="32" height="202" />
    <rect x="530" y="12" width="24" height="10" />
    <line x1="542" y1="2" x2="542" y2="12" />

    {/* 1201 Third Ave */}
    <rect x="566" y="46" width="26" height="174" />
    <rect x="570" y="40" width="18" height="10" />

    {/* Wells Fargo Center */}
    <rect x="490" y="58" width="28" height="162" />
    <rect x="494" y="52" width="20" height="9" />

    {/* Two Union Square */}
    <rect x="452" y="52" width="30" height="168" />
    <rect x="456" y="46" width="22" height="9" />

    {/* Russell Investments Center */}
    <rect x="600" y="62" width="28" height="158" />
    <rect x="603" y="57" width="22" height="8" />

    {/* Midrise cluster left */}
    <rect x="390" y="88" width="22" height="132" />
    <rect x="416" y="78" width="20" height="142" />
    <rect x="440" y="94" width="18" height="126" />

    {/* Midrise cluster right */}
    <rect x="634" y="78" width="20" height="142" />
    <rect x="658" y="88" width="22" height="132" />
    <rect x="684" y="100" width="18" height="120" />
    <rect x="706" y="82" width="24" height="138" />

    {/* Far left buildings */}
    <rect x="256" y="108" width="20" height="112" />
    <rect x="280" y="98" width="18" height="122" />
    <rect x="302" y="114" width="16" height="106" />

    {/* Far right buildings */}
    <rect x="736" y="92" width="22" height="128" />
    <rect x="762" y="104" width="20" height="116" />
    <rect x="786" y="112" width="24" height="108" />
    <rect x="814" y="118" width="18" height="102" />
    <rect x="836" y="108" width="16" height="112" />

    {/* Window details on Columbia Center */}
    <line x1="530" y1="40" x2="554" y2="40" />
    <line x1="530" y1="60" x2="554" y2="60" />
    <line x1="530" y1="80" x2="554" y2="80" />
    <line x1="530" y1="100" x2="554" y2="100" />
    <line x1="530" y1="120" x2="554" y2="120" />
    <line x1="530" y1="140" x2="554" y2="140" />
    <line x1="530" y1="160" x2="554" y2="160" />
    <line x1="530" y1="180" x2="554" y2="180" />
    <line x1="542" y1="18" x2="542" y2="220" />

    {/* Ground line */}
    <line x1="220" y1="220" x2="980" y2="220" />
  </svg>
);

/* Individual cloud SVG paths, each animated at different speeds/positions */
const Cloud1: React.FC = () => (
  <svg className="hero-cloud hero-cloud-1" viewBox="0 0 200 80" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <ellipse cx="100" cy="55" rx="90" ry="22" />
    <ellipse cx="70"  cy="42" rx="45" ry="28" />
    <ellipse cx="115" cy="36" rx="52" ry="32" />
    <ellipse cx="148" cy="46" rx="36" ry="22" />
  </svg>
);

const Cloud2: React.FC = () => (
  <svg className="hero-cloud hero-cloud-2" viewBox="0 0 160 60" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <ellipse cx="80"  cy="42" rx="72" ry="16" />
    <ellipse cx="55"  cy="32" rx="36" ry="22" />
    <ellipse cx="92"  cy="26" rx="42" ry="26" />
    <ellipse cx="122" cy="35" rx="28" ry="18" />
  </svg>
);

const Cloud3: React.FC = () => (
  <svg className="hero-cloud hero-cloud-3" viewBox="0 0 240 90" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <ellipse cx="120" cy="62" rx="110" ry="24" />
    <ellipse cx="82"  cy="46" rx="54"  ry="32" />
    <ellipse cx="135" cy="38" rx="64"  ry="38" />
    <ellipse cx="182" cy="50" rx="46"  ry="26" />
  </svg>
);

const Hero: React.FC = () => {

  return (
    <section id="hero" className="hero resume-hero">
      <div className="resume-hero-background" aria-hidden="true"></div>
      <div className="hero-blob-yellow" aria-hidden="true"></div>
      <div className="hero-blob-pink" aria-hidden="true"></div>

      {/* Glowing moon */}
      <div className="hero-moon" aria-hidden="true"></div>

      {/* Floating clouds */}
      <Cloud1 />
      <Cloud2 />
      <Cloud3 />

      {/* Seattle skyline sits at bottom */}
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
          <a href="./Resume.pdf" target="_blank" rel="noopener noreferrer" className="cta-button">
            Resume PDF
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

    </section>
  );
};

export default Hero;
