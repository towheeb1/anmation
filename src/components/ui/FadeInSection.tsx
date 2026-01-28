import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ 
  children, 
  className = '', 
  delay = 0,
  direction = 'up',
  distance = 30
}) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    const vars: gsap.TweenVars = {
      opacity: 1,
      duration: 1.2,
      ease: 'power3.out',
      delay,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 85%',
        toggleActions: 'play none none none',
      },
    };

    // Set direction based transform
    if (direction === 'up') vars.y = 0;
    if (direction === 'down') vars.y = 0;
    if (direction === 'left') vars.x = 0;
    if (direction === 'right') vars.x = 0;

    // Initial state
    const fromVars: gsap.TweenVars = { opacity: 0 };
    if (direction === 'up') fromVars.y = distance;
    if (direction === 'down') fromVars.y = -distance;
    if (direction === 'left') fromVars.x = distance;
    if (direction === 'right') fromVars.x = -distance;

    gsap.fromTo(sectionRef.current, fromVars, vars);
  }, { scope: sectionRef });

  return (
    <div 
      ref={sectionRef} 
      className={`gsap-reveal ${className}`}
      style={{ visibility: 'hidden' }} // Prevent flash before GSAP kicks in
    >
      {children}
    </div>
  );
};

export default FadeInSection;
