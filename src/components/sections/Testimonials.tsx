import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiStar, FiChevronLeft, FiChevronRight, FiCheck } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

interface Testimonial {
  id: number;
  name: string;
  handle: string;
  avatar: string;
  product: string;
  content: string;
  rating: number;
  verified: boolean;
}

const Testimonials = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.testimonials-header',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        '.testimonial-card',
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.15,
          scrollTrigger: {
            trigger: '.testimonials-grid',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      handle: '@sarahj',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      product: 'Collider Unwind',
      content: 'Finally found my go-to drink for social events! No more FOMO when I\'m not drinking. The mood boost is subtle but noticeable.',
      rating: 5,
      verified: true,
    },
    {
      id: 2,
      name: 'Michael Chen',
      handle: '@mchen',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      product: 'Collider Lift',
      content: 'As someone who stopped drinking alcohol, this has been a game changer. Tastes like real craft beer and I wake up feeling fresh!',
      rating: 5,
      verified: true,
    },
    {
      id: 3,
      name: 'Emma Williams',
      handle: '@emmaw',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      product: 'Collider Drift',
      content: 'The calming effect is perfect for winding down after work. Love that it\'s gluten-free too! My new evening ritual.',
      rating: 5,
      verified: true,
    },
    {
      id: 4,
      name: 'David Park',
      handle: '@dpark',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      product: 'Collider Unwind',
      content: 'Took these to a BBQ and everyone was asking about them. The flavor is incredible - you wouldn\'t know it\'s alcohol-free!',
      rating: 5,
      verified: true,
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      handle: '@lisat',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
      product: 'Collider Lift',
      content: 'Love the citrus notes! Perfect for summer afternoons. The energy boost without the crash is exactly what I needed.',
      rating: 5,
      verified: true,
    },
    {
      id: 6,
      name: 'James Miller',
      handle: '@jmiller',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      product: 'Collider Drift',
      content: 'Been drinking these for a month now. My sleep has improved and I feel more balanced overall. Highly recommend!',
      rating: 5,
      verified: true,
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, testimonials.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, testimonials.length - 2)) % Math.max(1, testimonials.length - 2));
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding-lg bg-cream overflow-hidden"
    >
      <div className="container-wide">
        {/* Header */}
        <div className="testimonials-header flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <p className="text-sm text-black/60 tracking-wider mb-2">
              Humans of the Colliderverse
            </p>
            <h2 className="text-4xl md:text-5xl font-medium text-black">
              What People Say
            </h2>
          </div>

          {/* Overall Rating */}
          <div className="flex items-center gap-4">
            <div className="text-right">
              <div className="flex items-center gap-2 justify-end">
                <span className="text-3xl font-medium">4.8</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-sm text-black/60">from 410+ reviews</p>
            </div>

            {/* Navigation */}
            <div className="flex items-center gap-2 ml-4">
              <button
                onClick={prevSlide}
                className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-[var(--transition-base)]"
                aria-label="Previous testimonials"
              >
                <FiChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextSlide}
                className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-[var(--transition-base)]"
                aria-label="Next testimonials"
              >
                <FiChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="testimonials-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.slice(currentIndex, currentIndex + 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="testimonial-card bg-white border border-black/10 p-6 card-hover"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <h4 className="font-medium text-black">{testimonial.name}</h4>
                    {testimonial.verified && (
                      <FiCheck className="w-4 h-4 text-green-500" />
                    )}
                  </div>
                  <p className="text-sm text-black/50">{testimonial.handle}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-black/70 text-sm leading-relaxed mb-4">
                "{testimonial.content}"
              </p>

              {/* Product Tag */}
              <div className="pt-4 border-t border-black/10">
                <p className="text-xs text-black/50">
                  Powered by <span className="text-black font-medium">{testimonial.product}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a href="#" className="btn-secondary">
            READ ALL REVIEWS
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;