import React from 'react';

/** Radial line burst + nodes (hero decorative layer). */
const HeroRadialBurst: React.FC = () => {
  const cx = 720;
  const cy = 220;
  const n = 56;
  const lines: React.ReactNode[] = [];
  const nodes: React.ReactNode[] = [];

  for (let i = 0; i < n; i += 1) {
    const angle = (i / n) * Math.PI * 2;
    const lenJitter = ((i * 17) % 100) + ((i * 11) % 72);
    const length = 260 + lenJitter * (0.55 + (i % 4) * 0.22);
    const x2 = cx + Math.cos(angle) * length;
    const y2 = cy + Math.sin(angle) * length;
    lines.push(
      <line
        key={`ray-${i}`}
        x1={cx}
        y1={cy}
        x2={x2}
        y2={y2}
        stroke="rgba(232, 242, 255, 0.38)"
        strokeWidth={1}
        strokeLinecap="round"
      />,
    );
    nodes.push(
      <circle
        key={`end-${i}`}
        cx={x2}
        cy={y2}
        r={i % 5 === 0 ? 2.8 : 1.6}
        fill="rgba(240, 248, 255, 0.55)"
      />,
    );
    if (i % 2 === 0) {
      const t = 0.35 + ((i * 3) % 20) / 100;
      const mx = cx + Math.cos(angle) * (length * t);
      const my = cy + Math.sin(angle) * (length * t);
      nodes.push(<circle key={`mid-${i}`} cx={mx} cy={my} r={1.2} fill="rgba(232, 242, 255, 0.32)" />);
    }
  }

  return (
    <svg
      className="hero-radial-burst"
      viewBox="0 0 1440 800"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g className="hero-radial-burst-lines">{lines}</g>
      <g className="hero-radial-burst-nodes">{nodes}</g>
    </svg>
  );
};

const SeattleSkyline: React.FC = () => (
  <svg
    className="seattle-skyline"
    viewBox="0 0 1440 260"
    preserveAspectRatio="xMidMax meet"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Single-stroke silhouette: left wall → roof peaks & valleys → right wall → baseline (minimalist print style) */}
    <path
      className="seattle-skyline-path"
      d="
        M 200 224
        L 200 152
        L 218 152 L 218 138 L 236 138 L 236 158 L 254 158 L 254 128 L 274 128 L 274 145 L 294 145 L 294 112 L 316 112 L 316 132 L 336 132
        L 336 98 L 354 98 L 354 68 L 366 42 L 378 28 L 390 20 L 402 28 L 414 42 L 426 68 L 426 98 L 444 98 L 444 78 L 466 78 L 466 58 L 492 58 L 492 38 L 522 38 L 522 18 L 556 18 L 556 4 L 590 4 L 590 16 L 626 16 L 626 32 L 664 32 L 664 50 L 702 50 L 702 72 L 742 72 L 742 98 L 786 98 L 786 118 L 832 118 L 832 138 L 880 138 L 880 155 L 932 155 L 932 168 L 988 168 L 988 178 L 1048 178 L 1048 186 L 1112 186 L 1112 192 L 1180 192 L 1180 196 L 1240 196
        L 1240 224 L 200 224 Z
      "
    />
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
      <HeroRadialBurst />
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
          Event-Driven Architecture · Secure Deployments · Reliability & Quality
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
