import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

type ExperienceVizType = 'area' | 'bars' | 'scatter' | 'radial';

interface Job {
  role: string;
  company: string;
  dates: string;
  bullets: string[];
  viz: ExperienceVizType;
}

const VizArea: React.FC = () => (
  <svg className="card-viz card-viz-tr" width="150" height="68" viewBox="0 0 150 68" aria-hidden="true">
    <path d="M0,62 L15,53 L30,57 L45,45 L60,49 L75,32 L90,36 L105,21 L120,25 L135,12 L150,8 L150,68 L0,68 Z" fill="rgba(123,92,240,0.07)"/>
    <polyline className="viz-line" points="0,62 15,53 30,57 45,45 60,49 75,32 90,36 105,21 120,25 135,12 150,8" fill="none" stroke="rgba(123,92,240,0.50)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="0"   cy="62" r="2"   fill="rgba(123,92,240,0.35)"/>
    <circle cx="75"  cy="32" r="2.5" fill="rgba(123,92,240,0.60)"/>
    <circle cx="150" cy="8"  r="3"   fill="rgba(123,92,240,0.85)"/>
    <line x1="0" y1="67" x2="150" y2="67" stroke="rgba(123,92,240,0.12)" strokeWidth="1"/>
    <line x1="0" y1="22" x2="5" y2="22" stroke="rgba(123,92,240,0.14)" strokeWidth="1"/>
    <line x1="0" y1="44" x2="5" y2="44" stroke="rgba(123,92,240,0.14)" strokeWidth="1"/>
  </svg>
);

const VizBars: React.FC = () => (
  <svg className="card-viz card-viz-tr" width="110" height="68" viewBox="0 0 110 68" aria-hidden="true">
    <rect className="viz-bar" x="3"  y="44" width="14" height="22" fill="rgba(123,92,240,0.18)" rx="2"/>
    <rect className="viz-bar" x="21" y="26" width="14" height="40" fill="rgba(123,92,240,0.28)" rx="2"/>
    <rect className="viz-bar" x="39" y="34" width="14" height="32" fill="rgba(123,92,240,0.24)" rx="2"/>
    <rect className="viz-bar" x="57" y="12" width="14" height="54" fill="rgba(123,92,240,0.40)" rx="2"/>
    <rect className="viz-bar" x="75" y="20" width="14" height="46" fill="rgba(123,92,240,0.34)" rx="2"/>
    <rect className="viz-bar" x="93" y="6"  width="14" height="60" fill="rgba(123,92,240,0.44)" rx="2"/>
    <line x1="0" y1="66" x2="110" y2="66" stroke="rgba(123,92,240,0.15)" strokeWidth="1"/>
    <line x1="1" y1="0"  x2="1"   y2="66" stroke="rgba(123,92,240,0.10)" strokeWidth="1"/>
    <line x1="1" y1="22" x2="5" y2="22" stroke="rgba(123,92,240,0.15)" strokeWidth="1"/>
    <line x1="1" y1="44" x2="5" y2="44" stroke="rgba(123,92,240,0.15)" strokeWidth="1"/>
  </svg>
);

const VizScatter: React.FC = () => (
  <svg className="card-viz card-viz-tr" width="100" height="80" viewBox="0 0 100 80" aria-hidden="true">
    <line x1="10" y1="70" x2="96" y2="70" stroke="rgba(123,92,240,0.15)" strokeWidth="1"/>
    <line x1="10" y1="5"  x2="10" y2="70" stroke="rgba(123,92,240,0.15)" strokeWidth="1"/>
    <line className="viz-line" x1="14" y1="66" x2="90" y2="14" stroke="rgba(123,92,240,0.22)" strokeWidth="1.2" strokeDasharray="3 3"/>
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
    <line x1="34" y1="70" x2="34" y2="74" stroke="rgba(123,92,240,0.14)" strokeWidth="1"/>
    <line x1="58" y1="70" x2="58" y2="74" stroke="rgba(123,92,240,0.14)" strokeWidth="1"/>
    <line x1="82" y1="70" x2="82" y2="74" stroke="rgba(123,92,240,0.14)" strokeWidth="1"/>
  </svg>
);


const VizRadial: React.FC = () => (
  <svg className="card-viz card-viz-tr" width="80" height="80" viewBox="0 0 80 80" aria-hidden="true">
    {/* background rings */}
    <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(123,92,240,0.08)" strokeWidth="6"/>
    <circle cx="40" cy="40" r="20" fill="none" stroke="rgba(123,92,240,0.06)" strokeWidth="5"/>
    <circle cx="40" cy="40" r="10" fill="none" stroke="rgba(123,92,240,0.05)" strokeWidth="4"/>
    {/* outer arc ~78% */}
    <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(123,92,240,0.55)" strokeWidth="6"
      strokeDasharray="147 189" strokeDashoffset="47" strokeLinecap="round"
      transform="rotate(-90 40 40)"/>
    {/* mid arc ~60% */}
    <circle cx="40" cy="40" r="20" fill="none" stroke="rgba(123,92,240,0.40)" strokeWidth="5"
      strokeDasharray="75 126" strokeDashoffset="31" strokeLinecap="round"
      transform="rotate(-90 40 40)"/>
    {/* inner arc ~45% */}
    <circle cx="40" cy="40" r="10" fill="none" stroke="rgba(123,92,240,0.30)" strokeWidth="4"
      strokeDasharray="28 63" strokeDashoffset="16" strokeLinecap="round"
      transform="rotate(-90 40 40)"/>
    {/* center dot */}
    <circle cx="40" cy="40" r="2" fill="rgba(123,92,240,0.50)"/>
  </svg>
);

const ExperienceViz: React.FC<{ type: ExperienceVizType }> = ({ type }) => {
  if (type === 'area')    return <VizArea />;
  if (type === 'bars')    return <VizBars />;
  if (type === 'radial')  return <VizRadial />;
  return <VizScatter />;
};

const jobs: Job[] = [
  {
    role: 'Software Engineer, SMTS',
    company: 'Salesforce',
    dates: 'Feb 2025 – Present · Seattle, WA',
    viz: 'area',
    bullets: [
      'Contributed to the design and delivery of a multi-region, event-driven real-time sync pipeline — synchronizing 108K tenants, 110K sites, and 22M users between Salesforce and Tableau Cloud Manager at sub-2-minute latency, processing up to 150K events/min burst traffic, including a 22M record backfill at launch.',
      'Spearheaded CI/CD re-architecture from manual deployments to stage-gated automated pipelines; served as primary code reviewer and production deployment owner, mentoring engineers across the team on best practices.',
      'Adopted AI-assisted development practices using Cursor and Claude Code to accelerate Day 2 operations — including auto-generating runbooks and playbooks, reducing manual documentation overhead and improving incident response readiness.',
      'Drove cross-functional alignment across multiple platform and infrastructure teams — securing encryption key access, implementing rate limiting to protect service stability, and resolving cloud deployment permissions — consistently recognized by teammates for unblocking critical delivery milestones.',
    ],
  },
  {
    role: 'Software Engineer, MTS',
    company: 'Salesforce',
    dates: 'Apr 2021 – Feb 2025 · Seattle, WA',
    viz: 'bars',
    bullets: [
      'Owned end-to-end development and operations of four product licensing microservices — including a Tier 1 Spring Boot REST API handling 300K+ daily license activation and renewal requests across desktop, server, and containerized deployments; identified and resolved a critical production bug through deep incident root cause analysis, driving error metrics to zero immediately post-deployment.',
      'Designed and implemented a CUJ Lambda running continuous synthetic traffic against production ATR services — testing all critical licensing paths end-to-end, auto-releasing production licenses post-use, and integrating custom Grafana alerts and metrics; FIT integration tests authored as part of this initiative detected 4 P1 bugs in production, directly contributing to Tableau licensing service reliability improvement toward 99.9% availability.',
      'Led observability vendor migration from New Relic to an internal platform, eliminating third-party costs and improving system visibility; sustained 99.95% uptime SLA for license activation services relied on by Tableau customers worldwide; recognized with a Spot Bonus (Q3 2023).',
      'Enforced security and compliance standards by leading platform upgrades and standardizing operational runbooks ahead of deprecation deadlines, ensuring continuous health check coverage and audit readiness across all owned services.',
    ],
  },
  {
    role: 'Software Engineer (Contract)',
    company: 'Microsoft via Insight Global',
    dates: 'Aug 2019 – Apr 2021 · Greater Seattle Area',
    viz: 'radial',
    bullets: [
      'Designed and developed enterprise-level test infrastructure for automating provisioning of macOS machines, benefiting multiple Microsoft Office for Mac teams.',
      'Applied spec-driven design and Agile practices to validate new features and ensure cross-macOS-version supportability; contributed to the open-source "macos-cookbook" on GitHub.',
    ],
  },
  {
    role: 'Senior Technical Support Engineer',
    company: 'Tableau Software',
    dates: 'Jan 2015 – Aug 2019 · Greater Seattle Area',
    viz: 'scatter',
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
