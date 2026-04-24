import React, { useEffect, useState } from 'react';

const IconHome = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 20V14H14V20H19V12H22L12 3L2 12H5V20H10Z" />
  </svg>
);

const IconBriefcase = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 6H16V4C16 2.9 15.11 2 14 2H10C8.89 2 8 2.9 8 4V6H4C2.89 6 2.01 6.9 2.01 8L2 19C2 20.1 2.89 21 4 21H20C21.11 21 22 20.1 22 19V8C22 6.9 21.11 6 20 6ZM14 6H10V4H14V6Z" />
  </svg>
);

const IconCode = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6Z" />
  </svg>
);

const IconGradCap = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 3L1 9L5 11.18V17.18L12 21L19 17.18V11.18L21 10.09V17H23V9L12 3ZM18.82 9L12 12.72L5.18 9L12 5.28L18.82 9ZM17 15.99L12 18.72L7 15.99V12.27L12 15L17 12.27V15.99Z" />
  </svg>
);

const IconMail = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z" />
  </svg>
);

interface BottomNavTab {
  id: string;
  label: string;
  icon: React.ReactNode;
  sectionId: string;
  sectionIds: string[];
}

const tabs: BottomNavTab[] = [
  { id: 'home',       label: 'Home',       icon: <IconHome />,       sectionId: 'hero',       sectionIds: ['hero'] },
  { id: 'experience', label: 'Work',        icon: <IconBriefcase />,  sectionId: 'experience', sectionIds: ['experience'] },
  { id: 'skills',     label: 'Skills',      icon: <IconCode />,       sectionId: 'skills',     sectionIds: ['skills'] },
  { id: 'education',  label: 'Education',   icon: <IconGradCap />,    sectionId: 'education',  sectionIds: ['education'] },
  { id: 'contact',    label: 'Contact',     icon: <IconMail />,       sectionId: 'contact',    sectionIds: ['contact'] },
];

const allSectionIds = ['hero', 'experience', 'skills', 'education', 'contact'];

const BottomNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;
      const isAtBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;

      let currentSection = 'hero';

      if (isAtBottom) {
        currentSection = 'contact';
      } else {
        for (const id of allSectionIds) {
          const el = document.getElementById(id);
          if (el) {
            const top = el.offsetTop;
            const bottom = top + el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < bottom) {
              currentSection = id;
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
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTabPress = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      window.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
    }
  };

  return (
    <nav className="bottom-nav" aria-label="Main navigation">
      <div className="bottom-nav-tabs">
        {tabs.map((tab) => {
          const isActive = tab.sectionIds.includes(activeSection);
          return (
            <button
              key={tab.id}
              className={`bottom-nav-tab${isActive ? ' active' : ''}`}
              onClick={() => handleTabPress(tab.sectionId)}
              aria-current={isActive ? 'page' : undefined}
            >
              <span className="bottom-nav-icon" aria-hidden="true" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', opacity: isActive ? 1 : 0.5 }}>
                {tab.icon}
              </span>
              <span className="bottom-nav-label">{tab.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
