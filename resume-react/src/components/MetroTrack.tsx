import React, { useEffect, useRef, useState } from 'react';

interface MetroStop {
  id: string;
  name: string;
  subtitle: string;
  icon?: string;
  className?: string;
}

const metroStops: MetroStop[] = [
  { id: 'hero',       name: 'Jonathan', subtitle: 'Home',       icon: '👋', className: 'page-metro-stop-start' },
  { id: 'experience', name: 'Experience', subtitle: 'Career' },
  { id: 'skills',     name: 'Skills',     subtitle: 'Tech Stack' },
  { id: 'education',  name: 'Education',  subtitle: 'Academic' },
  { id: 'contact',    name: 'Contact',    subtitle: 'Reach Out', icon: '📬', className: 'page-metro-stop-end destination' },
];

const MetroTrack: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const trainIndicatorRef = useRef<HTMLDivElement>(null);
  const stopsContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;

      let currentSection = 'hero';

      if (isAtBottom) {
        currentSection = 'contact';
      } else {
        for (const stop of metroStops) {
          const element = document.getElementById(stop.id);
          if (element) {
            const rect = element.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            const sectionBottom = sectionTop + rect.height;
            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
              currentSection = stop.id;
              break;
            }
          }
        }
      }

      setActiveSection(currentSection);
    };

    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          updateActiveSection();
          ticking = false;
        });
        ticking = true;
      }
    };

    updateActiveSection();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  useEffect(() => {
    if (!trainIndicatorRef.current || !stopsContainerRef.current) return;

    const activeIndex = metroStops.findIndex(stop => stop.id === activeSection);
    if (activeIndex === -1) return;

    const stopElements = stopsContainerRef.current.querySelectorAll('.page-metro-stop');
    const activeStop = stopElements[activeIndex] as HTMLElement;
    if (!activeStop) return;

    const containerRect = stopsContainerRef.current.getBoundingClientRect();
    const stopRect = activeStop.getBoundingClientRect();
    const relativeTop = stopRect.top - containerRect.top;
    const trainHeight = 60;
    const stopHeight = stopRect.height;
    const centeredTop = relativeTop + (stopHeight / 2) - (trainHeight / 2);

    trainIndicatorRef.current.style.top = `${centeredTop}px`;
  }, [activeSection]);

  const handleStopClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
      window.scrollTo({ top: targetSection.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <nav className="page-metro-track" id="metroTrack">
      <div className="page-track-line"></div>
      <div className="page-train-indicator" ref={trainIndicatorRef}></div>
      <div className="page-metro-stops" ref={stopsContainerRef}>
        {metroStops.map((stop) => (
          <a
            key={stop.id}
            href={`#${stop.id}`}
            className={`page-metro-stop ${stop.className || ''} ${activeSection === stop.id ? 'active' : ''}`}
            data-section={stop.id}
            onClick={(e) => handleStopClick(e, stop.id)}
          >
            <div className="page-stop-node">{stop.icon || ''}</div>
            <div className="page-stop-label">
              <span className="page-stop-name">{stop.name}</span>
              <span className="page-stop-subtitle">{stop.subtitle}</span>
            </div>
          </a>
        ))}
      </div>
    </nav>
  );
};

export default MetroTrack;
