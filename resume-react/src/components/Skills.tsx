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
    skills: ['AWS Lambda', 'DynamoDB', 'SQS', 'SES', 'KMS', 'IAM', 'CloudWatch', 'ECR', 'Secrets Manager', 'ECS', 'Terraform', 'Kubernetes', 'Hyperforce'],
  },
  {
    label: 'CI/CD & DevOps',
    emoji: '🔧',
    skills: ['GitLab CI/CD', 'Falcon CI/CD (FIT)', 'Docker', 'Bamboo', 'Multi-environment pipelines', 'MESH/Ingress networking'],
  },
  {
    label: 'Observability',
    emoji: '📡',
    skills: ['CloudWatch', 'Splunk', 'Prometheus', 'PagerDuty', 'Argus', 'New Relic', 'Grafana', 'Fluentbit', 'Kafka'],
  },
  {
    label: 'Languages & Frameworks',
    emoji: '💻',
    skills: ['Python', 'Java', 'SQL', 'Spring Boot', 'Apache Maven', 'JUnit 5', 'Gradle'],
  },
  {
    label: 'Licensing & Compliance',
    emoji: '🔐',
    skills: ['Flexera / FlexNet', 'ECAP Licensing', 'Nexus'],
  },
  {
    label: 'AI Tools',
    emoji: '🤖',
    skills: ['Cursor', 'Claude', 'Windsurf'],
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
            <SkillGroupCard key={group.label} group={group} delay={`${i * 0.08}s`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
