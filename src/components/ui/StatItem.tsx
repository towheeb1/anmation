import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface StatItemProps {
  value: string;
  label: string;
  delay?: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, delay = 0 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const numberRef = useRef<HTMLSpanElement>(null);
  
  // Extract number from value (e.g., "+520" -> 520)
  const numericValue = parseInt(value.replace(/\D/g, '')) || 0;
  const prefix = value.match(/^[^\d]*/)?.[0] || '';
  const suffix = value.match(/[^\d]*$/)?.[0] || '';

  useGSAP(() => {
    if (!containerRef.current || !numberRef.current) return;

    // Reveal container
    gsap.fromTo(containerRef.current, 
      { opacity: 0, y: 30 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 90%',
        }
      }
    );

    // Animate number
    const obj = { val: 0 };
    gsap.to(obj, {
      val: numericValue,
      duration: 2,
      delay: delay + 0.3,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 90%',
      },
      onUpdate: () => {
        if (numberRef.current) {
          numberRef.current.innerText = Math.floor(obj.val).toString();
        }
      }
    });
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="gsap-reveal" style={{ visibility: 'hidden' }}>
      <div className="text-4xl md:text-5xl font-black mb-2 text-primary">
        <span>{prefix}</span>
        <span ref={numberRef}>0</span>
        <span>{suffix}</span>
      </div>
      <div className="text-sm md:text-base text-text-secondary opacity-80">{label}</div>
    </div>
  );
};

export default StatItem;
