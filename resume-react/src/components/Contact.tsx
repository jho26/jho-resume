import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ContactItem {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

const contactItems: ContactItem[] = [
  { icon: '📧', label: 'Email',    value: 'uschohk@hotmail.com',  href: 'mailto:uschohk@hotmail.com' },
  { icon: '📱', label: 'Phone',    value: '(425) 301-5348',        href: 'tel:+14253015348' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/siuho', href: 'https://linkedin.com/in/siuho' },
  { icon: '🐙', label: 'GitHub',   value: 'github.com/jho26',      href: 'https://github.com/jho26/' },
  { icon: '📍', label: 'Location', value: 'Seattle, WA 98122' },
];

/* ── Mesh background ── */

const W = 1440;
const H = 500;

const PALETTE = [
  'rgba(0,212,200,',    // cyan
  'rgba(93,222,184,',   // mint
  'rgba(155,127,247,',  // lavender
  'rgba(123,184,255,',  // soft blue
  'rgba(78,205,196,',   // teal
];

function wavePath(
  cy: number,
  a1: number, f1: number, p1: number,
  a2: number, f2: number, p2: number,
): string {
  const pts: string[] = [];
  for (let i = 0; i <= 120; i++) {
    const x = (i / 120) * W;
    const y = cy + a1 * Math.sin(f1 * x + p1) + a2 * Math.sin(f2 * x + p2);
    pts.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  return 'M ' + pts.join(' L ');
}

/* Primary horizontal contour lines */
const primaryLines = Array.from({ length: 22 }, (_, i) => ({
  d: wavePath(
    20 + (i / 21) * 460,
    14 + (i % 6) * 13, 0.0027 + (i % 5) * 0.00065, i * 0.83,
    8  + (i % 4) * 8,  0.0054 + (i % 3) * 0.0011,  i * 1.28,
  ),
  stroke: `${PALETTE[i % 5]}${(0.13 + (i % 5) * 0.05).toFixed(2)})`,
  sw: 0.55 + (i % 4) * 0.28,
  anim: i % 3,
}));

/* Diagonal layer — rotated −22 ° for moiré interference */
const diagLines = Array.from({ length: 16 }, (_, i) => ({
  d: wavePath(
    -220 + (i / 15) * 940,
    18 + (i % 5) * 12, 0.0022 + (i % 4) * 0.0009, i * 1.07,
    10 + (i % 3) * 9,  0.0047 + (i % 5) * 0.0007,  i * 0.63,
  ),
  stroke: `${PALETTE[(i + 2) % 5]}${(0.08 + (i % 4) * 0.036).toFixed(2)})`,
  sw: 0.48 + (i % 3) * 0.28,
  anim: (i + 1) % 3,
}));

const ContactMeshBg: React.FC = () => (
  <svg
    className="contact-mesh-bg"
    viewBox={`0 0 ${W} ${H}`}
    preserveAspectRatio="xMidYMid slice"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g>
      {primaryLines.map((l, i) => (
        <path key={`p${i}`} d={l.d} fill="none" stroke={l.stroke} strokeWidth={l.sw} className={`mesh-anim-${l.anim}`} />
      ))}
    </g>
    <g transform={`rotate(-22, ${W / 2}, ${H / 2})`}>
      {diagLines.map((l, i) => (
        <path key={`d${i}`} d={l.d} fill="none" stroke={l.stroke} strokeWidth={l.sw} className={`mesh-anim-${l.anim}`} />
      ))}
    </g>
  </svg>
);

/* ── Component ── */

const Contact: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.1);
  const { ref: cardRef,  isVisible: cardVisible  } = useScrollReveal(0.1);

  return (
    <section id="contact" className="section contact-section">
      <ContactMeshBg />
      <div className="container contact-content">
        <div
          ref={titleRef as React.RefObject<HTMLDivElement>}
          className={`reveal ${titleVisible ? 'active' : ''}`}
        >
          <span className="section-label">Reach Out</span>
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">
            Open to new opportunities and conversations
          </p>
        </div>

        <div
          ref={cardRef as React.RefObject<HTMLDivElement>}
          className={`contact-card reveal ${cardVisible ? 'active' : ''}`}
        >
          <div className="contact-items">
            {contactItems.map((item) => (
              <div key={item.label} className="contact-item">
                <div className="contact-icon-wrap">
                  <span className="contact-icon" aria-hidden="true">{item.icon}</span>
                </div>
                <div className="contact-info">
                  <span className="contact-label">{item.label}</span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="contact-value contact-link"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <span className="contact-value">{item.value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="contact-footer">
            <p>Fluent in English · Cantonese · Mandarin</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
