import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface EducationEntry {
  degree: string;
  school: string;
  dates: string;
  gpa?: string;
  details?: string[];
}

const entries: EducationEntry[] = [
  {
    degree: 'Master of Science, Computer Science',
    school: 'Seattle University',
    dates: 'September 2018 – June 2020',
    gpa: '3.7',
  },
  {
    degree: 'Graduate Certificate in Computer Science Fundamentals',
    school: 'Seattle University',
    dates: 'September 2017 – June 2018',
  },
  {
    degree: 'Bachelor of Science, Applied and Computational Math Sciences',
    school: 'University of Washington, Seattle',
    dates: 'September 2009 – June 2013',
    details: ['Concentration: Discrete Mathematics and Algorithms', 'Minor in Mathematics and Applied Math'],
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
        <h2
          ref={titleRef as React.RefObject<HTMLHeadingElement>}
          className={`section-title text-center reveal ${titleVisible ? 'active' : ''}`}
        >
          Education
        </h2>
        <p className={`section-subtitle text-center reveal ${titleVisible ? 'active' : ''}`}>
          Academic foundation
        </p>
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
