import React from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ContactItem {
  icon: string;
  label: string;
  value: string;
  href?: string;
}

const contactItems: ContactItem[] = [
  { icon: '📧', label: 'Email',    value: 'uschohk@hotmail.com',       href: 'mailto:uschohk@hotmail.com' },
  { icon: '📱', label: 'Phone',    value: '(425) 301-5348',             href: 'tel:+14253015348' },
  { icon: '💼', label: 'LinkedIn', value: 'linkedin.com/in/siuho',      href: 'https://linkedin.com/in/siuho' },
  { icon: '📍', label: 'Location', value: 'Seattle, WA 98122' },
];

const Contact: React.FC = () => {
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal(0.1);
  const { ref: cardRef, isVisible: cardVisible } = useScrollReveal(0.1);

  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2
          ref={titleRef as React.RefObject<HTMLHeadingElement>}
          className={`section-title text-center reveal ${titleVisible ? 'active' : ''}`}
        >
          Get in Touch
        </h2>
        <p className={`section-subtitle text-center reveal ${titleVisible ? 'active' : ''}`}>
          Open to new opportunities
        </p>
        <div
          ref={cardRef as React.RefObject<HTMLDivElement>}
          className={`contact-card reveal ${cardVisible ? 'active' : ''}`}
        >
          <div className="contact-items">
            {contactItems.map((item) => (
              <div key={item.label} className="contact-item">
                <span className="contact-icon">{item.icon}</span>
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
            <p>Fluent in English, Cantonese, and Mandarin</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
