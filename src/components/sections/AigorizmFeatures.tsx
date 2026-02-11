import { useRef, useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { 
  BsChevronLeft, 
  BsChevronRight, 
  BsStarFill, 
  BsCheckCircleFill,
  BsArrowRight
} from 'react-icons/bs';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    id: 1,
    tag: 'Gateway',
    tagColor: 'purple',
    title: 'NV-100 Gateway',
    description: 'Install and configure the NV-100 gateway in buildings and villas. Supports connection via relays, Modbus, PacNet, or wireless communication.',
    image: 'img/screen-00.png',
    tooltip: 'NV-100',
    align: 'left'
  },
  {
    id: 2,
    tag: 'Platform',
    tagColor: 'purple',
    title: 'AIGORIZM Platform',
    description: 'View all fire alarms and faults in real-time. Advanced dashboard for building owners, maintenance companies, and civil defense.',
    image: 'img/screen-32.png',
    tooltip: 'Dashboard',
    align: 'right'
  },
  {
    id: 3,
    tag: 'Integration',
    tagColor: 'purple',
    title: 'Civil Defense Integration',
    description: 'Send fire alarms instantly with a reliable and secure system. Provide accurate information to speed up response and save lives.',
    image: 'img/screen-1.png',
    tooltip: 'Civil Defense',
    align: 'left'
  },
  {
    id: 4,
    tag: 'IoT Ready',
    tagColor: 'purple',
    title: 'Smart Detection',
    description: 'Connect fire detectors, gas detectors, sirens, and emergency devices to the platform. Support for various detection devices used in buildings.',
    image: 'img/screen-11.png',
    tooltip: 'Detectors',
    align: 'right'
  }
];

const services = [
  {
    title: 'AIGORIZM Platform',
    category: 'Core Platform',
    description: 'A unified AI-IoT platform that transforms traditional fire and safety systems into intelligent, connected infrastructures.',
    span: 'normal'
  },
  {
    title: 'NV-100 Gateway',
    category: 'Gateway',
    description: 'Industrial-grade IoT gateway designed to connect fire alarm systems and firefighting equipment to AIGORIZM.',
    span: 'normal'
  },
  {
    title: 'AI Escalation Engine',
    category: 'AI Engine',
    description: 'Smart escalation with AI-driven alarm management. Real-time visibility into life-safety systems with automated regulatory compliance.',
    span: 'large',
    bgImage: 'img/service-bg.png'
  },
  {
    title: 'Dashboards & Analytics',
    category: 'Analytics',
    description: 'Comprehensive dashboards for device management, alarm events, and system analytics. User and role management with secure, scalable architecture.',
    span: 'large',
    bgImage: 'img/analytics-bg.png'
  },
  {
    title: 'Security AI',
    category: 'Security',
    description: 'AI-powered cybersecurity and threat detection for your infrastructure.',
    span: 'normal'
  },
  {
    title: 'Cloud Integration',
    category: 'Cloud',
    description: 'Seamless cloud-native AI deployment solutions for enterprise.',
    span: 'normal'
  }
];

const testimonials = [
  {
    id: 1,
    quote: "AIGORIZM's AI-driven escalation engine has revolutionized our emergency response. Real-time visibility into life-safety systems across the region is now a reality.",
    name: 'Ahmed Al-Rashid',
    role: 'Civil Defense Director',
    company: 'Government Agency',
    avatar: 'img/avatar-1.jpg',
    // fallbackAvatar: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  {
    id: 2,
    quote: "Managing critical infrastructure across 50+ buildings is now seamless. The unified platform transformed our reactive systems into proactive life-saving infrastructures.",
    name: 'Sarah Hassan',
    role: 'Operations Director',
    company: 'Commercial Properties Group',
    avatar: 'img/avatar-2.jpg',
    // fallbackAvatar: 'https://randomuser.me/api/portraits/women/44.jpg'
  },
  {
    id: 3,
    quote: "The regulatory visibility and smart escalation features ensure we're always compliant. AIGORIZM moved us from traditional fire systems to intelligent, connected solutions.",
    name: 'Mohammed Al-Farsi',
    role: 'Safety Compliance Officer',
    company: 'Regional Hospital Network',
    avatar: 'img/avatar-3.jpg',
    // fallbackAvatar: 'https://randomuser.me/api/portraits/men/52.jpg'
  },
  {
    id: 4,
    quote: "The NV-100 gateway integration was seamless. We now have real-time monitoring of all firefighting equipment with AI-based escalation to stakeholders.",
    name: 'Fatima Al-Mansoori',
    role: 'Facilities Manager',
    company: 'International Airport',
    avatar: 'img/avatar-4.jpg',
    // fallbackAvatar: 'https://randomuser.me/api/portraits/women/65.jpg'
  },
  {
    id: 5,
    quote: "Edge intelligence and secure data transmission from the NV-100 gateway gives us confidence in our critical infrastructure monitoring across all our facilities.",
    name: 'Khalid Ibrahim',
    role: 'Technical Director',
    company: 'Industrial Complex',
    avatar: 'img/avatar-5.jpg',
    // fallbackAvatar: 'https://randomuser.me/api/portraits/men/76.jpg'
  }
];

export default function AigorizmFeatures() {
  const containerRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<(HTMLElement | null)[]>([]);
  const servicesRef = useRef<HTMLDivElement>(null);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useGSAP(() => {
    const ctx = gsap.context(() => {
      // Hero animation - Scale and fade in
      gsap.fromTo(heroRef.current,
        { opacity: 0, scale: 0.95, y: 30 },
        { 
          opacity: 1, 
          scale: 1, 
          y: 0, 
          duration: 1.2, 
          ease: 'expo.out',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Features animations - Professional scale + fade
      featuresRef.current.forEach((feature) => {
        if (!feature) return;
        
        gsap.fromTo(feature,
          { 
            opacity: 0, 
            scale: 0.92,
            y: 40
          },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.1,
            ease: 'back.out(1.4)',
            scrollTrigger: {
              trigger: feature,
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });

      // Services animation - Staggered scale up
      if (servicesRef.current) {
        const cards = servicesRef.current.querySelectorAll('.service-card');
        gsap.fromTo(cards,
          { opacity: 0, scale: 0.85, y: 50, rotationX: -15 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            rotationX: 0,
            duration: 0.9,
            stagger: 0.12,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: servicesRef.current,
              start: 'top 70%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // Testimonials animation - Elegant reveal
      if (testimonialsRef.current) {
        gsap.fromTo(testimonialsRef.current,
          { opacity: 0, scale: 0.93, y: 40 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.2,
            ease: 'elastic.out(1, 0.8)',
            scrollTrigger: {
              trigger: testimonialsRef.current,
              start: 'top 75%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }

      // CTA animation - Smooth entrance
      if (ctaRef.current) {
        gsap.fromTo(ctaRef.current,
          { opacity: 0, y: 60, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 1.3,
            ease: 'expo.out',
            scrollTrigger: {
              trigger: ctaRef.current,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Auto-play testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <div ref={containerRef} className="relative bg-[#0a0a0f] overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0" style={{
          background: 'conic-gradient(from 180deg, rgba(233, 30, 140, 0.08) 0deg, rgba(139, 92, 246, 0.08) 60deg, rgba(59, 130, 246, 0.08) 120deg, rgba(6, 182, 212, 0.08) 180deg, rgba(34, 197, 94, 0.08) 240deg, rgba(245, 158, 11, 0.08) 300deg, rgba(233, 30, 140, 0.08) 360deg)'
        }}></div>
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(at 30% 20%, rgba(192, 38, 211, 0.15) 0%, transparent 60%), radial-gradient(at 70% 80%, rgba(6, 182, 212, 0.15) 0%, transparent 60%)'
        }}></div>
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[60vh] flex items-center justify-center py-20">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-[60vw] h-[50vh] rounded-full opacity-30" style={{
            filter: 'blur(100px)',
            background: 'radial-gradient(rgba(236, 72, 153, 0.4) 0%, rgba(219, 39, 119, 0.2) 30%, transparent 70%)'
          }}></div>
        </div>
        
        <div className="relative z-10 text-center px-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
            </span>
            <span className="text-sm text-fuchsia-300 font-medium">AI Monitoring Active</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-6">
            Smart Safety.<br />
            <span className="bg-gradient-to-r from-fuchsia-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Redefined.
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-white/60 max-w-xl mx-auto">
            Scroll to explore how we transform fire protection with technology.
          </p>
        </div>
      </section>

      {/* Features Sections */}
      {features.map((feature, index) => (
        <section
          key={feature.id}
          ref={(el) => { featuresRef.current[index] = el; }}
          className="relative min-h-screen flex items-center py-20 px-6 sm:px-10 md:px-16 lg:px-24"
        >
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-2 text-left lg:text-right' : ''}`}>
                <div className={`inline-flex items-center gap-2 mb-4 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-fuchsia-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-fuchsia-500"></span>
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold uppercase tracking-wider text-fuchsia-300 bg-fuchsia-500/20 rounded-full border border-fuchsia-500/30">
                    {feature.tag}
                  </span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
                  {feature.title}
                </h2>
                <p className="text-base sm:text-lg text-white/70 leading-relaxed mb-6">
                  {feature.description}
                </p>
                <button className="group inline-flex items-center gap-2 text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
                  <span className="text-sm font-medium">Learn more</span>
                  <BsArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
              
              {/* Device Mockup */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative w-full max-w-[500px] mx-auto animate-float">
                  <div className="rounded-[24px] p-[5px]" style={{
                    background: 'linear-gradient(180deg, #1a1a1a 0%, #0a0a0a 50%, #151515 100%)',
                    boxShadow: '0 25px 80px rgba(0, 0, 0, 0.6), 0 10px 30px rgba(0, 0, 0, 0.4)'
                  }}>
                    <div className="bg-gradient-to-b from-gray-200 via-gray-400 to-gray-200 rounded-[20px] p-[5px]">
                      <div className="rounded-[16px] relative overflow-hidden aspect-[4/3]" style={{
                        background: 'linear-gradient(180deg, #3a3a3a 0%, #2d2d2d 30%, #252525 70%, #2a2a2a 100%)',
                        boxShadow: 'inset 0 2px 10px rgba(0, 0, 0, 0.5)'
                      }}>
                        <div className="absolute inset-[6%] bottom-[22%] rounded-lg" style={{
                          background: 'linear-gradient(rgb(26, 26, 26) 0%, rgb(13, 13, 13) 50%, rgb(21, 21, 21) 100%)',
                          boxShadow: 'rgba(0, 0, 0, 0.8) 0px 2px 15px inset, rgba(255, 255, 255, 0.05) 0px 1px 0px'
                        }}>
                          <div className="absolute inset-[3%] rounded overflow-hidden bg-black">
                            <img 
                              src={`/anmation/${feature.image}`}
                              alt={feature.title}
                              className="w-full h-full object-contain"
                              onError={(e) => {
                                const img = e.target as HTMLImageElement;
                                img.style.display = 'none';
                                // Create fallback div with text
                                const fallbackDiv = document.createElement('div');
                                fallbackDiv.className = 'w-full h-full flex items-center justify-center bg-gray-800 text-white text-lg font-medium';
                                fallbackDiv.textContent = feature.title;
                                img.parentNode?.appendChild(fallbackDiv);
                              }}
                            />
                          </div>
                        </div>
                        <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center" style={{ bottom: '3%', width: '80px', height: '80px' }}>
                          <img 
                            src="/anmation/img/n-logo.png"
                            alt="Logo" 
                            className="w-16 h-16 object-contain"
                            onError={(e) => { 
                              const img = e.target as HTMLImageElement;
                              img.style.display = 'none';
                              // Create text fallback
                              const fallbackText = document.createElement('div');
                              fallbackText.className = 'w-full h-full flex items-center justify-center text-white text-xs font-bold';
                              fallbackText.textContent = 'N';
                              img.parentNode?.appendChild(fallbackText);
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Tooltip */}
                  <div className={`absolute -top-4 ${index % 2 === 1 ? 'left-0 lg:-left-8' : 'right-0 lg:-right-8'} px-4 py-3 rounded backdrop-blur-md`}
                    style={{ backgroundColor: 'rgba(15, 18, 23, 0.95)', border: '1px solid rgba(8, 132, 230, 0.7)' }}
                  >
                    <span className="text-lg font-medium text-white whitespace-nowrap">{feature.tooltip}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Services Section */}
      <section ref={servicesRef} id="services" className="relative py-20 sm:py-24 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full blur-3xl" style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)',
            transform: 'translateY(-100px)'
          }}></div>
          <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-3xl" style={{
            background: 'radial-gradient(circle, rgba(232, 121, 249, 0.05) 0%, transparent 70%)',
            transform: 'translateY(-150px)'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
            <div>
              <span className="inline-block px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-fuchsia-400 text-sm font-medium mb-4">
                Services
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
                Our <span className="bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">Services</span>
              </h2>
            </div>
            <a href="#" className="group flex items-center gap-2 text-fuchsia-400 font-medium hover:text-fuchsia-300 transition-colors">
              View All Services
              <BsArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
          
          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card rounded-2xl p-6 flex flex-col justify-between transition-all duration-400 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(139,92,246,0.15)] ${
                  service.span === 'large' ? 'md:col-span-2 md:row-span-2' : 'aspect-[4/3]'
                }`}
                style={{
                  background: service.bgImage 
                    ? `linear-gradient(rgba(10, 10, 15, 0.3), rgba(10, 10, 15, 0.9)), url('/anmation/${service.bgImage}') center/cover`
                    : 'rgba(255, 255, 255, 0.03)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.06)'
                }}
              >
                <span className="text-sm text-cyan-400">{service.category}</span>
                <div>
                  <h3 className={`font-semibold text-white mb-2 ${service.span === 'large' ? 'text-xl' : 'text-lg'}`}>
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-400">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* CTA Banner */}
          <div className="mt-12 relative rounded-3xl overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-600/20 via-violet-600/20 to-cyan-600/20"></div>
            <div className="rounded-3xl p-8 md:p-12" style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.06)'
            }}>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-start">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Safety Consulting & Smart Transformation</h3>
                  <p className="text-gray-300 max-w-xl">We provide recommendations to upgrade existing systems without changing the current infrastructure. Supporting digital transformation in fire protection.</p>
                </div>
                <button className="px-8 py-4 bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-500 rounded-xl text-white font-semibold whitespace-nowrap hover:shadow-lg hover:shadow-fuchsia-500/25 transition-shadow">
                  Get Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="relative w-full py-8 flex items-center justify-center overflow-hidden">
        <div className="relative w-full h-[150px]">
          <svg className="absolute left-1/2 -translate-x-1/2 w-full max-w-[1600px] h-[150px]" viewBox="0 0 1600 150" preserveAspectRatio="xMidYMid meet" style={{
            maskImage: 'linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgb(0, 0, 0) 5%, rgb(0, 0, 0) 95%, rgba(0, 0, 0, 0) 100%)'
          }}>
            <defs>
              <linearGradient id="tubeGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(0, 0, 0, 0.4)"></stop>
                <stop offset="40%" stopColor="rgba(255, 255, 255, 0.08)"></stop>
                <stop offset="60%" stopColor="rgba(255, 255, 255, 0.05)"></stop>
                <stop offset="100%" stopColor="rgba(0, 0, 0, 0.5)"></stop>
              </linearGradient>
            </defs>
            <path d="M 0 75 L 500 75 L 580 25 L 700 25 L 780 125 L 900 125 L 980 75 L 1100 75 L 1600 75" fill="transparent" stroke="url(#tubeGradient)" strokeWidth="20" strokeLinecap="round"></path>
            <path d="M 0 75 L 500 75 L 580 25 L 700 25 L 780 125 L 900 125 L 980 75 L 1100 75 L 1600 75" fill="transparent" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="20" strokeLinecap="round"></path>
          </svg>
        </div>
      </div>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full" style={{
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.03) 0%, transparent 70%)'
          }}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-fuchsia-400 animate-pulse"></span>
              <span className="text-xs font-medium tracking-widest text-gray-400 uppercase">Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight">
              Trusted by Industry Leaders
            </h2>
          </div>
          
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden" style={{
              background: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.06)'
            }}>
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-fuchsia-400/50 to-transparent"></div>
              
              <div className="relative px-8 py-12 sm:px-12 sm:py-16 md:px-16 md:py-20">
                <div className="absolute top-8 left-8 sm:top-12 sm:left-12 md:top-16 md:left-16">
                  <svg className="w-12 h-12 sm:w-16 sm:h-16 text-fuchsia-400/10" fill="currentColor" viewBox="0 0 32 32">
                    <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-8c0-2.2 1.8-4 4-4V8z"></path>
                  </svg>
                </div>
                
                <div className="relative z-10">
                  {testimonials.map((testimonial, index) => (
                    <div
                      key={testimonial.id}
                      className={`transition-all duration-500 ${
                        index === currentSlide 
                          ? 'opacity-100 translate-x-0' 
                          : 'opacity-0 translate-x-8 absolute inset-0 pointer-events-none'
                      }`}
                    >
                      <div className="flex gap-1.5 mb-8">
                        {[...Array(5)].map((_, i) => (
                          <BsStarFill key={i} className="w-5 h-5 text-amber-400" />
                        ))}
                      </div>
                      <blockquote className="text-xl sm:text-2xl md:text-3xl font-light text-white/90 leading-relaxed mb-10 max-w-3xl">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-white/10 ring-offset-2 ring-offset-[#0a0a0f]">
                            <img 
                              alt={testimonial.name} 
                              className="w-full h-full object-cover" 
                              src={`/anmation/${testimonial.avatar}`}
                              onError={(e) => { 
                                const img = e.target as HTMLImageElement;
                                img.style.display = 'none';
                                // Show initials as fallback
                                const initials = testimonial.name.split(' ').map(n => n[0]).join('').toUpperCase();
                                const fallbackDiv = document.createElement('div');
                                fallbackDiv.className = 'w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-fuchsia-500 text-white font-bold text-xl';
                                fallbackDiv.textContent = initials;
                                img.parentNode?.appendChild(fallbackDiv);
                              }}
                            />
                          </div>
                          <div className="absolute -bottom-0.5 -right-0.5 w-5 h-5 bg-fuchsia-500 rounded-full flex items-center justify-center ring-2 ring-[#0a0a0f]">
                            <BsCheckCircleFill className="w-3 h-3 text-white" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                          <p className="text-sm text-gray-400">{testimonial.role}<span className="mx-2 text-gray-600">•</span>{testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/4 h-px bg-gradient-to-r from-transparent via-violet-400/30 to-transparent"></div>
            </div>
            
            {/* Navigation */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className="group relative p-1"
                    onClick={() => goToSlide(index)}
                  >
                    <div className={`h-1 rounded-full transition-all duration-500 ${
                      index === currentSlide 
                        ? 'w-8 bg-fuchsia-400' 
                        : 'w-2 bg-white/20 group-hover:bg-white/40'
                    }`}></div>
                  </button>
                ))}
              </div>
              
              <div className="flex items-center gap-3">
                <button 
                  onClick={prevSlide}
                  className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all duration-200"
                  aria-label="Previous testimonial"
                >
                  <BsChevronLeft className="w-5 h-5" />
                </button>
                <button 
                  onClick={nextSlide}
                  className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:border-white/20 hover:bg-white/[0.06] transition-all duration-200"
                  aria-label="Next testimonial"
                >
                  <BsChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1 text-xs text-gray-500">
              <span className="text-white font-medium">{String(currentSlide + 1).padStart(2, '0')}</span>
              <span>/</span>
              <span>{String(testimonials.length).padStart(2, '0')}</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="relative bg-[#0a0a0f] overflow-hidden py-12 sm:py-16 md:py-20">
        {/* Top SVG Wave */}
        <div className="relative z-20">
          <svg className="w-full h-16 sm:h-20 md:h-24" viewBox="0 0 1000 80" preserveAspectRatio="none" fill="none">
            <defs>
              <linearGradient id="topFill" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0a0a0f"></stop>
                <stop offset="15%" stopColor="#0f0f14"></stop>
                <stop offset="50%" stopColor="#1a1a1f"></stop>
                <stop offset="85%" stopColor="#0f0f14"></stop>
                <stop offset="100%" stopColor="#0a0a0f"></stop>
              </linearGradient>
              <linearGradient id="topStroke" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent"></stop>
                <stop offset="20%" stopColor="#ffffff" stopOpacity="0.3"></stop>
                <stop offset="50%" stopColor="#ffffff" stopOpacity="0.6"></stop>
                <stop offset="80%" stopColor="#ffffff" stopOpacity="0.3"></stop>
                <stop offset="100%" stopColor="transparent"></stop>
              </linearGradient>
            </defs>
            <path d="M 0 80 L 0 30 L 50 30 L 100 65 L 350 65 L 400 30 L 600 30 L 650 65 L 900 65 L 950 30 L 1000 30 L 1000 80 Z" fill="url(#topFill)"></path>
            <path d="M 0 30 L 50 30 L 100 65 L 350 65 L 400 30 L 600 30 L 650 65 L 900 65 L 950 30 L 1000 30" stroke="url(#topStroke)" strokeWidth="2" fill="none" filter="drop-shadow(0 0 6px rgba(255,255,255,0.3))"></path>
          </svg>
        </div>
        
        {/* CTA Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/20 mb-5">
              <span className="w-2 h-2 rounded-full bg-fuchsia-400 animate-pulse"></span>
              <span className="text-xs font-medium text-white/80 uppercase tracking-wider">Contact Us</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-5">
              Ready for AI-Driven <span className="text-white">Life Safety?</span>
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-8">
              Contact us for demonstrations, pilot projects, partnerships, and
              integration discussions. Transform your fire safety from reactive
              to proactive with AIGORIZM.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
              <a href="https://www.aigorizm.ai/contact">
                <div className="group relative w-full sm:w-auto rounded-full cursor-pointer" style={{
                  boxShadow: 'rgb(0, 0, 0) 0px 1px 7px 0px inset, rgb(0, 0, 0) 0px 0px 12px 0px inset'
                }}>
                  <div className="relative rounded-full p-[0.5px]" style={{
                    background: 'linear-gradient(rgb(255, 255, 255) 0%, rgb(214, 214, 214) 46%, rgb(97, 107, 117) 76%, rgb(97, 107, 117) 83%, rgb(205, 214, 222) 100%)',
                    boxShadow: 'rgba(0, 0, 0, 0.17) 0px 0.5px 1.5px -1.875px, rgba(0, 0, 0, 0.06) 0px 4px 12px -3.75px'
                  }}>
                    <div className="px-6 sm:px-8 py-3 sm:py-3.5 rounded-full" style={{
                      background: 'linear-gradient(rgb(214, 222, 230) 0%, rgb(158, 166, 176) 100%)'
                    }}>
                      <span className="flex items-center justify-center gap-2 text-sm sm:text-base font-medium tracking-wide" style={{
                        color: 'rgba(0, 0, 0, 0.8)',
                        textShadow: 'rgb(255, 255, 255) 0px -0.25px 0.1px'
                      }}>
                        Request Demo
                        <BsArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://www.aigorizm.ai/about" className="group relative w-full sm:w-auto px-6 sm:px-8 py-3.5 sm:py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/10 rounded-full transition-all duration-300 overflow-hidden">
                <span className="relative flex items-center justify-center gap-2 sm:gap-3 text-white font-medium tracking-wide text-sm sm:text-base">
                  Partner With Us
                </span>
              </a>
            </div>
          </div>
        </div>
        
        {/* Bottom SVG Wave */}
        <div className="relative z-20">
          <svg className="w-full h-16 sm:h-20 md:h-24" viewBox="0 0 1000 80" preserveAspectRatio="none" fill="none">
            <defs>
              <linearGradient id="bottomFill" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0a0a0f"></stop>
                <stop offset="15%" stopColor="#0f0f14"></stop>
                <stop offset="50%" stopColor="#1a1a1f"></stop>
                <stop offset="85%" stopColor="#0f0f14"></stop>
                <stop offset="100%" stopColor="#0a0a0f"></stop>
              </linearGradient>
            </defs>
            <path d="M 0 0 L 0 30 L 50 30 L 100 65 L 350 65 L 400 30 L 600 30 L 650 65 L 900 65 L 950 30 L 1000 30 L 1000 0 Z" fill="url(#bottomFill)"></path>
          </svg>
        </div>
      </section>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}