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
    role: 'Software Engineer — SMTS',
    company: 'Salesforce',
    dates: 'Feb 2025 – Present · San Francisco, CA',
    viz: 'area',
    bullets: [
      'Modernized Data Infrastructure: Led the transition from legacy batch processing to a highly reliable, real-time data synchronization pipeline, ensuring seamless data delivery across global regions.',
      'Enhanced System Reliability: Established comprehensive end-to-end monitoring across all deployment stages, significantly improving system visibility and accelerating incident resolution times.',
      'Optimized Release Engineering: Overhauled deployment pipelines by implementing stricter release controls and automated testing, reducing the propagation of system errors and catching software regressions earlier in the development lifecycle.',
      'Improved Operational Excellence: Bolstered platform reliability and streamlined incident response protocols, reducing production failures and creating smoother handoffs for on-call engineering teams.',
      'Drove Cross-Functional Delivery: Partnered with external engineering teams to define project scope, establish delivery timelines, and rapidly escalate/resolve configuration bottlenecks to unblock critical data integrations.',
      'Led Rapid Incident Response: Directed troubleshooting and recovery efforts during critical production outages, rapidly restoring normal system throughput and mitigating customer impact.',
      'Championed AI Adoption: Pioneered the use of AI-assisted development tools within the team, establishing best practices that improved code review efficiency and reduced post-release defects.',
    ],
  },
  {
    role: 'Software Engineer — MTS',
    company: 'Salesforce',
    dates: 'Apr 2021 – Feb 2025 · San Francisco, CA',
    viz: 'bars',
    bullets: [
      'Strategic Platform Migration: Directed the migration of core licensing services to a modernized internal platform, establishing scalable infrastructure and unblocking engineering workflows.',
      'Recognized with Spot Bonus (Q3 2023) for Operational Excellence: Awarded for driving a strategic system monitoring migration (to Grafana) that entirely eliminated external vendor costs. Proactively collaborated with senior engineering leadership to optimize alert accuracy—eliminating 30+ false positives and refining high-urgency notifications—while continuously innovating dashboards for enhanced system visibility.',
      'Ensured High Availability: Implemented continuous availability monitoring across all public-facing endpoints, directly supporting and validating rigorous 99.95% uptime SLA targets.',
      'Elevated Service Standards: Upgraded a core service to top-tier operational status by designing automated health checks and performance dashboards, drastically reducing detection-to-response times for support engineers.',
      'Mitigated Production Risks: Proactively identified and resolved a critical software defect prior to customer release, successfully averting a major production incident. Led root-cause analyses for high-severity issues, delivering systemic improvements to prevent recurrences.',
      'Managed End-to-End Delivery: Owned the full deployment lifecycle and continuous delivery for four critical licensing services across all development and production environments.',
      'Maintained Security & Compliance: Proactively drove comprehensive platform security upgrades and standardized team-wide operational playbooks, ensuring continuous compliance well ahead of corporate deprecation deadlines.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Microsoft via Insight Global',
    dates: 'August 2019 – April 2021',
    viz: 'bars',
    bullets: [
      'Designed and developed enterprise-level test infrastructure, integrating it into code to support the Microsoft Office team.',
      'Utilized Ruby and the Chef platform to design systems for automating provisioning of macOS machines, benefiting multiple Microsoft Office for Mac teams.',
      'Demonstrated proficiency in Agile processes, swiftly incorporating customer feedback to ensure supportability across various macOS versions.',
      'Committed to spec-driven design principles, minimizing testing gaps to validate new functionalities and proactively prevent future bugs.',
      'Actively contributed to the open-source Chef cookbook "macos-cookbook" hosted on Microsoft\'s GitHub repository.',
    ],
  },
  {
    role: 'Senior Technical Support Engineer',
    company: 'Tableau Software',
    dates: 'January 2015 – August 2019',
    viz: 'scatter',
    bullets: [
      'Independently diagnosed and resolved complex application issues, including user experience latency, in customer environments at scale.',
      'Improved team case closing metrics by proactively identifying and documenting previously undocumented issues through internal knowledge base (KB) articles.',
      'Assisted fellow engineers by sharing insights and solutions through comprehensive troubleshooting guides.',
      'Performed root cause analysis leveraging Tableau log files and various troubleshooting tools to provide effective guidance to customers.',
      'Maintained high customer satisfaction through excellent communication, problem-solving skills, and attention to detail.',
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
            <ExperienceCard key={job.company} job={job} delay={`${i * 0.1}s`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
