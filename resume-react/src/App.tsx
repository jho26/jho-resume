import React, { lazy, Suspense, useState, useEffect } from 'react';
import Hero from './components/Hero';
import MetroTrack from './components/MetroTrack';
import BottomNav from './components/BottomNav';
import ThemeToggle from './components/ThemeToggle';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import { useRevealObserver } from './hooks/useRevealObserver';
import './App.css';

const Summary = lazy(() => import('./components/Summary'));
const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));

const getSystemTheme = (): 'light' | 'dark' =>
  window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

function App() {
  useSmoothScroll();
  useRevealObserver();

  const [theme, setTheme] = useState<'light' | 'dark'>(getSystemTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  // Keep in sync if the user changes OS appearance while the tab is open
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e: MediaQueryListEvent) => setTheme(e.matches ? 'dark' : 'light');
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  const handleToggle = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ErrorBoundary>
      <div className="App">
        <ThemeToggle theme={theme} onToggle={handleToggle} />
        <MetroTrack />
        <BottomNav />
        <Hero />
        <div className="section-divider" aria-hidden="true" />
        <Suspense fallback={<LoadingSpinner size="large" />}>
          <Summary />
          <div className="section-divider" aria-hidden="true" />
          <Experience />
          <div className="section-divider" aria-hidden="true" />
          <Skills />
          <div className="section-divider" aria-hidden="true" />
          <Education />
          <div className="section-divider" aria-hidden="true" />
          <Contact />
        </Suspense>
      </div>
    </ErrorBoundary>
  );
}

export default App;
