import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface EducationEntry {
  degree: string;
  school: string;
  dates: string;
  gpa?: string;
  details?: string[];
  logo: React.ReactNode;
}

// ─── School Logos ──────────────────────────────────────────────────────────────

/** Seattle University — crimson circular seal mark */
const LogoSeattleUniversity: React.FC = () => (
  <svg className="edu-logo" width="60" height="60" viewBox="0 0 60 60" aria-label="Seattle University">
    <circle cx="30" cy="30" r="26" fill="none" stroke="#9a9a9a" strokeWidth="1.5" opacity="0.30"/>
    <circle cx="30" cy="30" r="20" fill="rgba(150,150,150,0.04)" stroke="#9a9a9a" strokeWidth="0.75" opacity="0.20"/>
    <text
      x="30" y="36"
      textAnchor="middle"
      fontFamily="Georgia, 'Times New Roman', serif"
      fontSize="18"
      fontWeight="700"
      fill="#a0a0a0"
      opacity="0.60"
      letterSpacing="-0.5"
    >SU</text>
    <line x1="16" y1="42" x2="44" y2="42" stroke="#9a9a9a" strokeWidth="0.75" opacity="0.18"/>
  </svg>
);

/** University of Washington — W with underbar */
const LogoUW: React.FC = () => (
  <svg className="edu-logo" width="60" height="60" viewBox="0 0 60 60" aria-label="University of Washington">
    <text
      x="30" y="46"
      textAnchor="middle"
      fontFamily="Georgia, 'Times New Roman', serif"
      fontSize="38"
      fontWeight="900"
      fill="#a0a0a0"
      opacity="0.55"
    >W</text>
    <rect x="8" y="49" width="44" height="2.5" fill="#b0b0b0" opacity="0.30" rx="1"/>
  </svg>
);

// ──────────────────────────────────────────────────────────────────────────────

const entries: EducationEntry[] = [
  {
    degree: 'Master of Science, Computer Science',
    school: 'Seattle University',
    dates: 'September 2018 – June 2020',
    gpa: '3.7',
    logo: <LogoSeattleUniversity />,
  },
  {
    degree: 'Graduate Certificate in Computer Science Fundamentals',
    school: 'Seattle University',
    dates: 'September 2017 – June 2018',
    logo: <LogoSeattleUniversity />,
  },
  {
    degree: 'Bachelor of Science, Applied and Computational Math Sciences',
    school: 'University of Washington, Seattle',
    dates: 'September 2009 – June 2013',
    details: ['Concentration: Discrete Mathematics and Algorithms', 'Minor in Mathematics and Applied Math'],
    logo: <LogoUW />,
  },
];

const EducationCard: React.FC<{ entry: EducationEntry; delay: string }> = ({ entry, delay }) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`education-card reveal ${isVisible ? 'active' : ''}`}
      style={{ transitionDelay: delay }}
    >
      <div className="edu-logo-wrap">{entry.logo}</div>
      <div className="education-school">{entry.school}</div>
      <div className="education-degree">{entry.degree}</div>
      <div className="education-dates">{entry.dates}</div>
      {entry.gpa && (
        <div className="education-gpa">GPA {entry.gpa}</div>
      )}
      {entry.details && entry.details.length > 0 && (
        <ul className="education-details">
          {entry.details.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
      )}
    </div>
  );
};

const Education: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.1);

  return (
    <section id="education" className="section education-section">
      <div className="container">
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`reveal ${titleVisible ? 'active' : ''}`}
        >
          <span className="section-label">Academic</span>
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">
            Academic foundation in mathematics and computer science
          </p>
        </div>
        <div className="education-grid">
          {entries.map((entry, i) => (
            <EducationCard key={entry.degree} entry={entry} delay={`${i * 0.1}s`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
