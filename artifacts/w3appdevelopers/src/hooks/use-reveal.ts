import { useEffect } from 'react';

export function useReveal() {
  useEffect(() => {
    const handleObserver = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
      );

      const elements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
      elements.forEach((el) => observer.observe(el));

      return () => {
        elements.forEach((el) => observer.unobserve(el));
      };
    };
    
    // Give DOM a small tick to render before observing
    const timeoutId = setTimeout(handleObserver, 100);
    return () => clearTimeout(timeoutId);
  });
}
