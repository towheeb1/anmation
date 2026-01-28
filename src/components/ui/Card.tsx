import React, { useRef } from 'react';
import { FiArrowLeft } from 'react-icons/fi';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

interface CardProps {
  title: string;
  description: string;
  image: string;
  link?: string;
  date?: string;
  horizontal?: boolean;
  delay?: number;
}

const Card: React.FC<CardProps> = ({ title, description, image, link = "#", date, horizontal = false, delay = 0 }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

  useGSAP(() => {
    if (!cardRef.current) return;

    // Scroll reveal
    gsap.fromTo(cardRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 90%',
        }
      }
    );
  }, { scope: cardRef });

  // Hover handlers using GSAP for fine control
  const onMouseEnter = () => {
    if (imageRef.current) {
      gsap.to(imageRef.current, { scale: 1.08, duration: 0.6, ease: 'power2.out' });
    }
    if (cardRef.current) {
      gsap.to(cardRef.current, { y: -8, boxShadow: '0 20px 40px rgba(0,0,0,0.12)', duration: 0.4, ease: 'power2.out' });
    }
  };

  const onMouseLeave = () => {
    if (imageRef.current) {
      gsap.to(imageRef.current, { scale: 1, duration: 0.6, ease: 'power2.out' });
    }
    if (cardRef.current) {
      gsap.to(cardRef.current, { y: 0, boxShadow: '0 4px 6px rgba(0,0,0,0.02)', duration: 0.4, ease: 'power2.out' });
    }
  };

  if (horizontal) {
    return (
      <div 
        ref={cardRef}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className="gsap-reveal bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col md:flex-row cursor-pointer"
        style={{ visibility: 'hidden' }}
      >
        <div className="md:w-1/3 overflow-hidden">
          <img 
            ref={imageRef}
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700"
          />
        </div>
        <div className="p-8 md:w-2/3 flex flex-col">
          {date && <span className="text-primary text-sm font-bold mb-3">{date}</span>}
          <h3 className="text-2xl font-bold mb-4 hover:text-primary transition-colors leading-tight">
            {title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
            {description}
          </p>
          <a href={link} className="inline-flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all">
            <span>اقرأ المزيد</span>
            <FiArrowLeft className="transition-transform" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <div 
      ref={cardRef}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="gsap-reveal bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 flex flex-col h-full cursor-pointer"
      style={{ visibility: 'hidden' }}
    >
      <div className="h-56 overflow-hidden relative">
        <img 
          ref={imageRef}
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <div className="p-8 flex flex-col flex-grow text-center items-center">
        <h3 className="text-xl font-bold mb-4 hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-8 flex-grow">
          {description}
        </p>
        <a href={link} className="btn btn-secondary w-full hover:bg-primary hover:text-white transition-all">
          تعرف على المبادرة
        </a>
      </div>
    </div>
  );
};

export default Card;
