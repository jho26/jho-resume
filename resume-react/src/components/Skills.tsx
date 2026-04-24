import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface SkillGroup {
  label: string;
  emoji: string;
  skills: string[];
}

const skillGroups: SkillGroup[] = [
  {
    label: 'Cloud & Infrastructure',
    emoji: '☁️',
    skills: ['AWS', 'DynamoDB', 'SQS', 'ECS', 'CloudWatch', 'Secrets Manager', 'S3', 'Lambda'],
  },
  {
    label: 'DevOps & CI/CD',
    emoji: '🔧',
    skills: ['Docker', 'CI/CD Pipelines', 'Vault', 'Grafana', 'Argus', 'Synthetic Testing', 'Certificate Rotation'],
  },
  {
    label: 'Languages & Frameworks',
    emoji: '💻',
    skills: ['TypeScript', 'Java', 'Ruby', 'Python', 'Chef', 'SQL'],
  },
  {
    label: 'Architecture',
    emoji: '🏗️',
    skills: ['Microservices', 'Event-Driven', 'REST APIs', 'JWT', 'Distributed Systems', 'Service Mesh'],
  },
  {
    label: 'Leadership',
    emoji: '🎯',
    skills: ['Technical Design', 'Code Review', 'Root Cause Analysis', 'Mentoring', 'Operational Playbooks'],
  },
  {
    label: 'Languages (Spoken)',
    emoji: '🌏',
    skills: ['English', 'Cantonese', 'Mandarin'],
  },
];

const SkillGroupCard: React.FC<{ group: SkillGroup; delay: string }> = ({ group, delay }) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`skill-group reveal ${isVisible ? 'active' : ''}`}
      style={{ transitionDelay: delay }}
    >
      <h3 className="skill-group-title">
        <span className="skill-group-emoji">{group.emoji}</span>
        {group.label}
      </h3>
      <div className="skill-tags">
        {group.skills.map((skill) => (
          <span key={skill} className="skill-tag">{skill}</span>
        ))}
      </div>
    </div>
  );
};

const Skills: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.1);

  return (
    <section id="skills" className="section skills-section">
      <div className="container">
        <h2
          ref={titleRef as React.RefObject<HTMLHeadingElement>}
          className={`section-title text-center reveal ${titleVisible ? 'active' : ''}`}
        >
          Skills
        </h2>
        <p className={`section-subtitle text-center reveal ${titleVisible ? 'active' : ''}`}>
          Tools and technologies I work with
        </p>
        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <SkillGroupCard key={group.label} group={group} delay={`${i * 0.08}s`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
