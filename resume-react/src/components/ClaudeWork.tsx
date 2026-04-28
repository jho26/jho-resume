import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ClaudeProject {
  icon: string;
  tag: string;
  title: string;
  description: string;
  link?: string;
  linkLabel?: string;
}

const projects: ClaudeProject[] = [
  {
    icon: '🤖',
    tag: 'AI Agent · Claude Code',
    title: 'This Resume Site',
    description:
      'Architected and built this portfolio from the ground up using Claude as a coding co-pilot — component design, blueprint animations, responsive layout, and Cloudflare Workers deployment, all iterated with Claude Code.',
    linkLabel: 'You\'re looking at it →',
  },
  {
    icon: '⚡',
    tag: 'Automation · Anthropic SDK',
    title: 'Engineering Runbook Generator',
    description:
      'Used the Claude API to auto-generate structured operational runbooks from Sev-3 RCA write-ups and incident post-mortems at Tableau/Salesforce — distilling root causes, remediation steps, and rollback procedures into searchable playbooks for on-call engineers.',
  },
  {
    icon: '🔍',
    tag: 'Observability · AI-Assisted',
    title: 'Log Anomaly Triage',
    description:
      'Prototyped a Claude-powered triage assistant that ingests CloudWatch and Argus alert payloads, then surfaces the most likely root cause with relevant playbook sections. Directly informed by real war-room work — including catching a critical silent data loss bug in batched messaging deployments.',
  },
  {
    icon: '🗄️',
    tag: 'Performance · Claude API',
    title: 'DynamoDB Query Optimizer',
    description:
      'Collaborated with Claude to diagnose and resolve production DynamoDB bottlenecks — streamlining duplicate-check validations, tuning GSI deployments, and reducing RESTORE audit query latency to ~520ms — as part of API performance work at Tableau/Salesforce.',
  },
];

interface CardProps {
  project: ClaudeProject;
  delay: string;
}

const ClaudeCard: React.FC<CardProps> = ({ project, delay }) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`claude-card reveal ${isVisible ? 'active' : ''}`}
      style={{ transitionDelay: delay }}
    >
      {/* Blueprint corner decorations */}
      <div className="claude-card-corner tl" aria-hidden="true" />
      <div className="claude-card-corner br" aria-hidden="true" />

      <div className="claude-card-icon" aria-hidden="true">{project.icon}</div>
      <div className="claude-card-tag">{project.tag}</div>
      <h3 className="claude-card-title">{project.title}</h3>
      <p className="claude-card-desc">{project.description}</p>

      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="claude-card-link"
        >
          {project.linkLabel || 'Learn more'}
        </a>
      ) : project.linkLabel ? (
        <span className="claude-card-link" style={{ cursor: 'default', opacity: 0.6 }}>
          {project.linkLabel}
        </span>
      ) : null}
    </div>
  );
};

const ClaudeWork: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.1);
  const { ref: bannerRef, isVisible: bannerVisible } = useScrollReveal(0.1);

  return (
    <section id="claude" className="section claude-section">
      <div className="container">
        {/* Section header */}
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`reveal ${titleVisible ? 'active' : ''}`}
        >
          <span className="section-label">AI &amp; Automation</span>
          <h2 className="section-title">Built with Claude</h2>
          <p className="section-subtitle">
            Projects and tools developed in collaboration with Claude AI — from day-to-day engineering productivity to architectural experimentation.
          </p>
        </div>

        {/* Hero banner */}
        <div
          ref={bannerRef as React.RefObject<HTMLDivElement>}
          className={`claude-hero-banner reveal ${bannerVisible ? 'active' : ''}`}
        >
          <div className="claude-banner-icon" aria-hidden="true">🧠</div>
          <div className="claude-banner-text">
            <h3>Claude as Engineering Partner</h3>
            <p>
              I use Claude extensively — drafting architectural decisions and design docs, generating operational runbooks from incident post-mortems, accelerating root cause analysis on distributed-systems issues, and iterating on cloud migration strategies. It's become a core part of my engineering workflow at Tableau/Salesforce.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="claude-grid">
          {projects.map((project, i) => (
            <ClaudeCard key={project.title} project={project} delay={`${i * 0.1}s`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClaudeWork;
