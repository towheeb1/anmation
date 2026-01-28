import { useState, useEffect, useRef } from 'react';

export const useIntersection = (options = { threshold: 0.1, triggerOnce: true }): [React.RefObject<HTMLDivElement | null>, boolean] => {
  const [isIntersecting, setIntersecting] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasTriggered, setHasTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true);
        if (options.triggerOnce) {
          setHasTriggered(true);
          observer.unobserve(entry.target);
        }
      } else if (!options.triggerOnce) {
        setIntersecting(false);
      }
    }, options);

    const currentElement = elementRef.current;
    if (currentElement && !hasTriggered) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
      observer.disconnect();
    };
  }, [options, hasTriggered]);

  return [elementRef, isIntersecting];
};
