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
    skills: ['AWS Lambda', 'DynamoDB', 'SQS', 'ECS', 'CloudWatch', 'Secrets Manager', 'ECR', 'IAM', 'Terraform', 'Kubernetes', 'Docker'],
  },
  {
    label: 'CI/CD & DevOps',
    emoji: '🔧',
    skills: ['GitLab CI/CD', 'Stage-Gated Pipelines', 'Multi-Environment Deployments', 'Synthetic Testing', 'Falcon FIT'],
  },
  {
    label: 'Languages & Frameworks',
    emoji: '💻',
    skills: ['Java', 'Python', 'Ruby', 'SQL', 'Spring Boot', 'Apache Maven', 'Gradle', 'Chef', 'REST APIs'],
  },
  {
    label: 'Observability',
    emoji: '📊',
    skills: ['Grafana', 'CloudWatch', 'Splunk', 'Argus', 'New Relic'],
  },
  {
    label: 'AI Tools',
    emoji: '🤖',
    skills: ['Cursor', 'Claude Code', 'Google Gemini'],
  },
  {
    label: 'Languages (Spoken)',
    emoji: '🌏',
    skills: ['English', 'Cantonese', 'Mandarin'],
  },
];

const SkillGroupCard: React.FC<{ group: SkillGroup; index: number; delay: string }> = ({ group, index, delay }) => {
  const { ref, isVisible } = useScrollReveal(0.1);
  const delayClass = `reveal-delay-${(index % 4) + 1}`;

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`skill-group reveal ${delayClass} ${isVisible ? 'active' : ''}`}
      style={{ transitionDelay: delay }}
    >
      <h3 className="skill-group-title">
        <span className="skill-group-emoji" aria-hidden="true">{group.emoji}</span>
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
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`reveal ${titleVisible ? 'active' : ''}`}
        >
          <span className="section-label">Tech Stack</span>
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">
            Tools and technologies I work with
          </p>
        </div>
        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <SkillGroupCard key={group.label} group={group} index={i} delay={`${i * 0.08}s`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
