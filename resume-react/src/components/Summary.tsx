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
            Results-driven Senior Software Engineer specializing in real-time data synchronization,
            cloud-native observability, and secure platform architecture. Demonstrated success at
            Salesforce transitioning legacy batch systems into highly reliable, real-time AWS
            pipelines. Award-winning engineer who effectively bridges the gap between complex
            infrastructure challenges and critical business objectives, consistently delivering
            secure, high-availability platforms while mitigating production risks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Summary;
