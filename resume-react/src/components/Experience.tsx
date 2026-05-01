import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

type ExperienceVizType = 'area' | 'bars' | 'scatter';

interface Job {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
  viz: ExperienceVizType;
}

// ─── Mini data-viz decorations ────────────────────────────────────────────────

/** Upward-trending area chart – reliability / scale */
const VizArea: React.FC = () => (
  <svg className="card-viz card-viz-tr" width="150" height="68" viewBox="0 0 150 68" aria-hidden="true">
    {/* area fill */}
    <path
      d="M0,62 L15,53 L30,57 L45,45 L60,49 L75,32 L90,36 L105,21 L120,25 L135,12 L150,8 L150,68 L0,68 Z"
      fill="rgba(123,92,240,0.07)"
    />
    {/* trend line */}
    <polyline
      className="viz-line"
      points="0,62 15,53 30,57 45,45 60,49 75,32 90,36 105,21 120,25 135,12 150,8"
      fill="none"
      stroke="rgba(123,92,240,0.50)"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* key data points */}
    <circle cx="0"   cy="62" r="2"   fill="rgba(123,92,240,0.35)"/>
    <circle cx="75"  cy="32" r="2.5" fill="rgba(123,92,240,0.60)"/>
    <circle cx="150" cy="8"  r="3"   fill="rgba(123,92,240,0.85)"/>
    {/* x-axis */}
    <line x1="0" y1="67" x2="150" y2="67" stroke="rgba(123,92,240,0.12)" strokeWidth="1"/>
    {/* y-ticks */}
    <line x1="0" y1="22" x2="5" y2="22" stroke="rgba(123,92,240,0.14)" strokeWidth="1"/>
    <line x1="0" y1="44" x2="5" y2="44" stroke="rgba(123,92,240,0.14)" strokeWidth="1"/>
  </svg>
);

/** Grouped bar chart – structured infrastructure / CI-CD metrics */
const VizBars: React.FC = () => (
  <svg className="card-viz card-viz-tr" width="110" height="68" viewBox="0 0 110 68" aria-hidden="true">
    {/* bars */}
    <rect className="viz-bar" x="3"  y="44" width="14" height="22" fill="rgba(123,92,240,0.18)" rx="2"/>
    <rect className="viz-bar" x="21" y="26" width="14" height="40" fill="rgba(123,92,240,0.28)" rx="2"/>
    <rect className="viz-bar" x="39" y="34" width="14" height="32" fill="rgba(123,92,240,0.24)" rx="2"/>
    <rect className="viz-bar" x="57" y="12" width="14" height="54" fill="rgba(123,92,240,0.40)" rx="2"/>
    <rect className="viz-bar" x="75" y="20" width="14" height="46" fill="rgba(123,92,240,0.34)" rx="2"/>
    <rect className="viz-bar" x="93" y="6"  width="14" height="60" fill="rgba(123,92,240,0.44)" rx="2"/>
    {/* baseline */}
    <line x1="0" y1="66" x2="110" y2="66" stroke="rgba(123,92,240,0.15)" strokeWidth="1"/>
    {/* y-axis */}
    <line x1="1" y1="0"  x2="1"   y2="66" stroke="rgba(123,92,240,0.10)" strokeWidth="1"/>
    {/* y-ticks */}
    <line x1="1" y1="22" x2="5" y2="22" stroke="rgba(123,92,240,0.15)" strokeWidth="1"/>
    <line x1="1" y1="44" x2="5" y2="44" stroke="rgba(123,92,240,0.15)" strokeWidth="1"/>
  </svg>
);

/** Scatter plot with regression line – support analytics / pattern recognition */
const VizScatter: React.FC = () => (
  <svg className="card-viz card-viz-tr" width="100" height="80" viewBox="0 0 100 80" aria-hidden="true">
    {/* axes */}
    <line x1="10" y1="70" x2="96" y2="70" stroke="rgba(123,92,240,0.15)" strokeWidth="1"/>
    <line x1="10" y1="5"  x2="10" y2="70" stroke="rgba(123,92,240,0.15)" strokeWidth="1"/>
    {/* regression line (dashed) */}
    <line
      className="viz-line"
      x1="14" y1="66" x2="90" y2="14"
      stroke="rgba(123,92,240,0.22)" strokeWidth="1.2" strokeDasharray="3 3"
    />
    {/* scatter points */}
    <circle cx="18" cy="62" r="2.5" fill="rgba(123,92,240,0.38)"/>
    <circle cx="26" cy="56" r="2"   fill="rgba(123,92,240,0.32)"/>
    <circle cx="34" cy="50" r="3"   fill="rgba(123,92,240,0.44)"/>
    <circle cx="42" cy="44" r="2"   fill="rgba(123,92,240,0.40)"/>
    <circle cx="50" cy="38" r="2.5" fill="rgba(123,92,240,0.50)"/>
    <circle cx="57" cy="32" r="2"   fill="rgba(123,92,240,0.46)"/>
    <circle cx="64" cy="26" r="3"   fill="rgba(123,92,240,0.54)"/>
    <circle cx="71" cy="20" r="2.5" fill="rgba(123,92,240,0.50)"/>
    <circle cx="78" cy="16" r="2"   fill="rgba(123,92,240,0.44)"/>
    <circle cx="85" cy="11" r="3"   fill="rgba(123,92,240,0.60)"/>
    {/* x-ticks */}
    <line x1="34" y1="70" x2="34" y2="74" stroke="rgba(123,92,240,0.14)" strokeWidth="1"/>
    <line x1="58" y1="70" x2="58" y2="74" stroke="rgba(123,92,240,0.14)" strokeWidth="1"/>
    <line x1="82" y1="70" x2="82" y2="74" stroke="rgba(123,92,240,0.14)" strokeWidth="1"/>
  </svg>
);

const ExperienceViz: React.FC<{ type: ExperienceVizType }> = ({ type }) => {
  if (type === 'area')    return <VizArea />;
  if (type === 'bars')    return <VizBars />;
  return <VizScatter />;
};

// ──────────────────────────────────────────────────────────────────────────────

const jobs: Job[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Tableau Software at Salesforce',
    dates: 'April 2021 – Present',
    bullets: [
      'Distributed Systems & Cloud Architecture: Architected and optimized event-driven microservices and high-throughput data pipelines on AWS. Led critical production operations including deploying global secondary index (GSI) changes and managing asynchronous queues (SQS), ensuring highly available and fault-tolerant system integrations.',
      'API Performance & Scale: Diagnosed and resolved complex integration bottlenecks in production. Dramatically reduced API latency by implementing JWT token caching, optimizing backend database access times (e.g., reducing RESTORE audit queries to ~520ms), and streamlining DynamoDB duplicate check validations.',
      'DevOps, CI/CD & Secure Deployments: Migrated web services to managed CI/CD deployment pipelines and standardized service meshes. Containerized applications with Docker/AWS ECS and enforced robust security postures using AWS Secrets Manager, Vault, and automated certificate rotations.',
      'Production Reliability & Observability: Elevated core services to Tier-1 reliability (99.95% availability) by implementing synthetic testing for public endpoints and real-time observability dashboards (Grafana, CloudWatch, Argus). Led war rooms including mitigating a major queue drain incident and catching a critical silent data loss bug.',
      'Technical Leadership: Led Sev-3 Root Cause Analyses, authored design documents and operational playbooks, mentored engineering teams, conducted rigorous code reviews, and spearheaded initiatives to burn down technical debt.',
    ],
  },
  {
    role: 'Software Engineer (Contract)',
    company: 'Microsoft via Insight Global',
    dates: 'August 2019 – April 2021',
    bullets: [
      'Designed and developed enterprise-level test infrastructure for automating provisioning of macOS machines, benefiting multiple Microsoft Office for Mac teams.',
      'Applied spec-driven design and Agile practices to validate new features and ensure cross-macOS-version supportability; contributed to the open-source "macos-cookbook" on GitHub.',
    ],
  },
  {
    role: 'Senior Technical Support Engineer',
    company: 'Tableau Software',
    dates: 'January 2015 – August 2019',
    bullets: [
      'Served as technical escalation point for enterprise Tableau Server customers — diagnosing complex root causes across networking, authentication, and performance layers, and partnering directly with engineering to reproduce, document, and resolve critical product defects, accelerating fix cycles for high-priority accounts.',
      'Managed a portfolio of high-severity cases end-to-end across Tableau Desktop and Server on Windows and macOS — maintaining global SLA compliance and building deep architectural expertise that enabled faster resolution and internal knowledge sharing.',
    ],
  },
];

const ExperienceCard: React.FC<{ job: Job; delay: string }> = ({ job, delay }) => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`experience-card reveal ${isVisible ? 'active' : ''}`}
      style={{ transitionDelay: delay }}
    >
      <ExperienceViz type={job.viz} />
      <div className="experience-card-header">
        <div className="experience-role">{job.role}</div>
        <div className="experience-company">{job.company}</div>
        <div className="experience-dates">{job.dates}</div>
      </div>
      <ul className="experience-bullets">
        {job.bullets.map((bullet, i) => (
          <li key={i}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
};

const Experience: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.1);

  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`reveal ${titleVisible ? 'active' : ''}`}
        >
          <span className="section-label">Career</span>
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">
            Building reliable systems at scale
          </p>
        </div>
        <div className="experience-grid">
          {jobs.map((job, i) => (
            <ExperienceCard key={job.company + job.role} job={job} delay={`${i * 0.1}s`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
