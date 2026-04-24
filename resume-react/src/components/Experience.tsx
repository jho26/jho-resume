import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface Job {
  role: string;
  company: string;
  dates: string;
  accentColor: string;
  bullets: string[];
}

const jobs: Job[] = [
  {
    role: 'Senior Software Engineer',
    company: 'Tableau Software at Salesforce',
    dates: 'April 2021 – Present',
    accentColor: '#00A1E0',
    bullets: [
      'Distributed Systems & Cloud Architecture: Architected and optimized event-driven microservices and high-throughput data pipelines on AWS. Led critical production operations including deploying global secondary index (GSI) changes and managing asynchronous queues (SQS), ensuring highly available and fault-tolerant system integrations.',
      'API Performance & Scale: Diagnosed and resolved complex integration bottlenecks in production. Dramatically reduced API latency by implementing JWT token caching, optimizing backend database access times (e.g., reducing RESTORE audit queries to ~520ms), and streamlining DynamoDB duplicate check validations.',
      'DevOps, CI/CD & Secure Deployments: Migrated web services to managed CI/CD deployment pipelines and standardized service meshes. Containerized applications with Docker/AWS ECS and enforced robust security postures using AWS Secrets Manager, Vault, and automated certificate rotations.',
      'Production Reliability & Observability: Elevated core services to Tier-1 reliability (99.95% availability) by implementing synthetic testing for public endpoints and real-time observability dashboards (Grafana, CloudWatch, Argus). Led war rooms including mitigating a major queue drain incident and catching a critical silent data loss bug.',
      'Technical Leadership: Led Sev-3 Root Cause Analyses, authored design documents and operational playbooks, mentored engineering teams, conducted rigorous code reviews, and spearheaded initiatives to burn down technical debt.',
    ],
  },
  {
    role: 'Software Engineer',
    company: 'Microsoft via Insight Global',
    dates: 'August 2019 – April 2021',
    accentColor: '#1A365D',
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
    accentColor: '#FF6B35',
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
      style={{ animationDelay: delay, borderLeftColor: job.accentColor }}
    >
      <div className="experience-card-header">
        <div className="experience-role">{job.role}</div>
        <div className="experience-company" style={{ color: job.accentColor }}>{job.company}</div>
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
        <h2
          ref={titleRef as React.RefObject<HTMLHeadingElement>}
          className={`section-title text-center reveal ${titleVisible ? 'active' : ''}`}
        >
          Experience
        </h2>
        <p className={`section-subtitle text-center reveal ${titleVisible ? 'active' : ''}`}>
          Building reliable systems at scale
        </p>
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
