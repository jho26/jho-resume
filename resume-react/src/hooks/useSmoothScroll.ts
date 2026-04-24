import { useEffect } from 'react';

export const useSmoothScroll = () => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href^="#"]') as HTMLAnchorElement;

      if (!anchor) return;

      const href = anchor.getAttribute('href');
      if (!href || href === '#' || href === '') return;

      const targetElement = document.querySelector(href);
      if (!targetElement) return;

      e.preventDefault();
      const offset = window.innerWidth <= 768 ? 0 : 80;
      const offsetTop = (targetElement as HTMLElement).offsetTop - offset;

      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    };

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, []);
};
