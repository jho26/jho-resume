import React, { lazy, Suspense } from 'react';
import Hero from './components/Hero';
import MetroTrack from './components/MetroTrack';
import BottomNav from './components/BottomNav';
import ErrorBoundary from './components/ErrorBoundary';
import LoadingSpinner from './components/LoadingSpinner';
import { useSmoothScroll } from './hooks/useSmoothScroll';
import './App.css';

const Experience = lazy(() => import('./components/Experience'));
const Skills = lazy(() => import('./components/Skills'));
const Education = lazy(() => import('./components/Education'));
const Contact = lazy(() => import('./components/Contact'));

function App() {
  useSmoothScroll();

  return (
    <ErrorBoundary>
      <div className="App">
        <MetroTrack />
        <BottomNav />
        <Hero />
        <div className="section-divider" aria-hidden="true" />
        <Suspense fallback={<LoadingSpinner size="large" />}>
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
