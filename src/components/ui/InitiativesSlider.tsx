import React, { useState, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { HiArrowRight, HiArrowLeft } from 'react-icons/hi2';

interface Initiative {
  id: number;
  title: string;
  description: string;
  ctaText: string;
  ctaLink: string;
  imageTall: string;
  imageSmall: string;
}

const initiativesData: Initiative[] = [
  {
    id: 1,
    title: 'مبادرة مبتوري الأطراف',
    description: 'مبادرة تقدم الرعاية الشاملة لفئة مبتوري الأطراف وفق احتياجهم الجسدي والنفسي بهدف رفع مستوى جودة حياتهم وانسجامهم مع المجتمع.',
    ctaText: 'تعرف على المبادرة',
    ctaLink: '#',
    imageTall: 'https://thumbs.dreamstime.com/b/faceless-hooded-anonymous-computer-hacker-programming-code-monitor-46142616.jpg?w=768',
    imageSmall: 'https://thumbs.dreamstime.com/b/programming-code-screen-software-developer-computer-abstract-development-93689313.jpg?w=768'
  },
  {
    id: 2,
    title: 'سند الزواج',
    description: 'مبادرة تهدف إلى مساندة حديثي الزواج وتحقيق الاستقرار الأسري والاجتماعي من خلال تقديم الدعم المادي والمعرفي.',
    ctaText: 'تعرف على المبادرة',
    ctaLink: '#',
    imageTall: 'https://thumbs.dreamstime.com/b/computer-programming-using-laptop-internet-technologies-49641566.jpg?w=768',
    imageSmall: 'https://thumbs.dreamstime.com/b/modern-computer-programming-code-screen-showing-random-scripts-113805394.jpg?w=768'
  },
  {
    id: 3,
    title: 'سند الأيتام',
    description: 'تمكين الأيتام وتعزيز قدراتهم العلمية والعملية لبناء مستقبل مشرق يساهم في رقي المجتمع.',
    ctaText: 'تعرف على المبادرة',
    ctaLink: '#',
    imageTall: 'https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-121903546.jpg?w=992',
    imageSmall: 'https://thumbs.dreamstime.com/b/faceless-hooded-anonymous-computer-hacker-programming-code-monitor-49753774.jpg?w=768'
  }
];

const InitiativesSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev' | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const handleIndividualMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    
    const xPos = (clientX - left) / width - 0.5;
    const yPos = (clientY - top) / height - 0.5;

    gsap.to(currentTarget, {
      rotationY: xPos * 20,
      rotationX: -yPos * 20,
      x: xPos * 15,
      y: yPos * 15,
      duration: 0.6,
      ease: "power2.out",
      overwrite: true
    });
  };

  const handleIndividualMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    gsap.to(e.currentTarget, {
      rotationX: 0,
      rotationY: 0,
      x: 0,
      y: 0,
      duration: 1.2,
      ease: "elastic.out(1, 0.3)"
    });
  };

  const handleNext = useCallback(() => {
    if (isAnimating || initiativesData.length <= 1) return;
    setIsAnimating(true);
    setDirection('next');

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentIndex((prev) => (prev + 1) % initiativesData.length);
      }
    });

    // Exit animation: slide out to the left (in RTL)
    tl.to([contentRef.current, imageRef.current], {
      opacity: 0,
      x: -40,
      duration: 0.4,
      ease: 'power2.in'
    });
  }, [isAnimating]);

  const handlePrev = useCallback(() => {
    if (isAnimating || initiativesData.length <= 1) return;
    setIsAnimating(true);
    setDirection('prev');

    const tl = gsap.timeline({
      onComplete: () => {
        setCurrentIndex((prev) => (prev - 1 + initiativesData.length) % initiativesData.length);
      }
    });

    // Exit animation: slide out to the right (in RTL)
    tl.to([contentRef.current, imageRef.current], {
      opacity: 0,
      x: 40,
      duration: 0.4,
      ease: 'power2.in'
    });
  }, [isAnimating]);

  // Initial Scroll Reveal
  useGSAP(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      }
    });

    tl.fromTo(headerRef.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
    );

    tl.fromTo([contentRef.current, imageRef.current],
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: 'power3.out' },
      "-=0.6"
    );
  }, { scope: containerRef });

  // Slide Change Animation
  useGSAP(() => {
    if (!isAnimating || !direction) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimating(false);
        setDirection(null);
      }
    });

    // Prepare new slide position (come from opposite side)
    const startX = direction === 'next' ? 60 : -60;
    
    tl.set([contentRef.current, imageRef.current], { 
      x: startX, 
      opacity: 0 
    });

    // Main entrance animation
    tl.to([contentRef.current, imageRef.current], {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: 'expo.out',
    });

    // Staggered children reveal for extra polish
    if (contentRef.current) {
      tl.fromTo(contentRef.current.children,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power2.out' },
        "-=0.6"
      );
    }
  }, { scope: containerRef, dependencies: [currentIndex] });

  const currentItem = initiativesData[currentIndex];

  if (!initiativesData.length) return null;

  return (
    <section ref={containerRef} className="py-32 bg-white overflow-hidden" dir="rtl">
      <div className="container">
        {/* Static Header */}
        <div ref={headerRef} className="text-center mb-16 md:mb-24">
          <h2 className="text-3xl md:text-5xl font-black text-secondary leading-tight">
            مبادرات <span className="relative inline-block mx-2">
              ومشاريع
              <svg className="absolute -bottom-3 left-0 w-full h-3 text-primary/40" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 25 0, 50 5 T 100 5" stroke="currentColor" strokeWidth="6" fill="none" strokeLinecap="round" />
              </svg>
            </span> سند محمد بن سلمان
          </h2>
          <p className="text-text-secondary max-w-4xl mx-auto text-lg leading-relaxed mt-8">
            مبادرات ومشاريع فعالة تهدف إلى تقديم العون المباشر وغير المباشر وتأخذ بعين الاعتبار التحولات الاقتصادية، والطموحات المستقبلية للمملكة.
          </p>
        </div>

        {/* Slider Content */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* Images Block (Right in RTL) */}
          <div 
            ref={imageRef} 
            className="w-full md:w-1/2 flex items-center justify-center gap-6 md:gap-10 relative min-h-[400px] md:min-h-[550px] md:order-1"
            style={{ perspective: '1200px' }}
          >
             {/* Small Image (Right side in RTL) */}
             <div 
               className="parallax-img relative z-10 w-[40%] aspect-square rounded-3xl overflow-hidden shadow-2xl transition-shadow duration-300 hover:shadow-primary/20"
               onMouseMove={handleIndividualMouseMove}
               onMouseLeave={handleIndividualMouseLeave}
             >
                <img 
                  src={currentItem.imageSmall} 
                  alt={`${currentItem.title} detail`}
                  className="w-full h-full object-cover pointer-events-none"
                />
             </div>

             {/* Tall Image (Left side in RTL) */}
             <div 
               className="parallax-img relative z-10 w-[42%] aspect-[3/6] rounded-[2.5rem] overflow-hidden shadow-2xl transition-shadow duration-300 hover:shadow-primary/20"
               onMouseMove={handleIndividualMouseMove}
               onMouseLeave={handleIndividualMouseLeave}
             >
                <img 
                  src={currentItem.imageTall} 
                  alt={currentItem.title}
                  className="w-full h-full object-cover pointer-events-none"
                />
             </div>
          </div>

          {/* Text Block (Left in RTL) */}
          <div ref={contentRef} className="w-full md:w-1/2 md:order-2">
            <h3 className="text-3xl md:text-4xl font-black text-secondary mb-6 leading-tight">
              {currentItem.title}
            </h3>
            <p className="text-text-secondary text-lg leading-loose mb-10 max-w-lg">
              {currentItem.description}
            </p>
            <div className="mb-10">
              <a 
                href={currentItem.ctaLink} 
                className="btn-primary py-4 px-12 rounded-lg text-lg font-bold shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all active:scale-95"
              >
                {currentItem.ctaText}
              </a>
            </div>

            {/* Navigation Buttons */}
            <div className="flex gap-4">
              <button 
                onClick={handlePrev}
                className="w-14 h-14 flex items-center justify-center bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-all hover:scale-105 active:scale-95 shadow-md"
                aria-label="Previous initiative"
              >
                <HiArrowRight className="text-2xl" />
              </button>
              <button 
                onClick={handleNext}
                className="w-14 h-14 flex items-center justify-center bg-secondary text-white rounded-lg hover:bg-secondary/90 transition-all hover:scale-105 active:scale-95 shadow-md"
                aria-label="Next initiative"
              >
                <HiArrowLeft className="text-2xl" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default InitiativesSlider;
