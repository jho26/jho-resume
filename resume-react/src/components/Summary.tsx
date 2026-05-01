import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const Summary: React.FC = () => {
  const { ref, isVisible } = useScrollReveal(0.1);

  return (
    <section id="summary" className="section summary-section">
      <div className="container">
        <div
          ref={ref as React.RefObject<HTMLDivElement>}
          className={`reveal ${isVisible ? 'active' : ''}`}
        >
          <span className="section-label">About</span>
          <h2 className="section-title">Summary</h2>
          <p className="summary-body">
            Senior Software Engineer with 10+ years of experience building distributed systems,
            real-time data pipelines, and cloud-native infrastructure on AWS at enterprise scale.
            Contributed to a multi-region event-driven pipeline enabling real-time data streaming
            and a 22M record backfill between Salesforce and Tableau Cloud Manager — processing
            up to 150K events/min. Known for end-to-end ownership, CI/CD expertise, cross-functional
            technical leadership, and driving reliability improvements through automation and AI tooling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Summary;
