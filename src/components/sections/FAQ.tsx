import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiChevronDown } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

const FAQ = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.faq-header',
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
        '.faq-item',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: 'power3.out',
          stagger: 0.1,
          scrollTrigger: {
            trigger: '.faq-list',
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const faqs: FAQItem[] = [
    {
      id: 1,
      question: 'What makes Collider different from other non-alcoholic beers?',
      answer: 'Collider is the world\'s first mood-boosting beer. Unlike other non-alcoholic beers that simply remove the alcohol, we\'ve crafted a unique blend of adaptogens and nootropics including Lion\'s Mane, Ashwagandha, and L-Theanine that work together to promote relaxation and mental clarity without any alcohol.',
    },
    {
      id: 2,
      question: 'Will Collider make me feel intoxicated?',
      answer: 'No, Collider contains 0.0% alcohol and will not make you feel intoxicated. Our mood-boosting effects come from natural adaptogens that promote a sense of calm and well-being, not from alcohol. You\'ll feel relaxed and social without any impairment.',
    },
    {
      id: 3,
      question: 'Is Collider safe to drink every day?',
      answer: 'Yes! Collider is designed to be enjoyed daily. All our ingredients are GRAS (Generally Recognized As Safe) by the FDA. However, as with any supplement, we recommend consulting with your healthcare provider if you have specific health conditions or are pregnant or nursing.',
    },
    {
      id: 4,
      question: 'How many calories are in each can?',
      answer: 'Each can of Collider contains only 45-55 calories, making it a great low-calorie alternative to traditional beer which typically has 150+ calories. We\'re also low in sugar and completely gluten-free.',
    },
    {
      id: 5,
      question: 'What do the adaptogens actually do?',
      answer: 'Our adaptogen blend works synergistically: Lion\'s Mane supports cognitive function and focus, Ashwagandha helps reduce stress and promote relaxation, and L-Theanine encourages calm alertness. Together, they create a balanced, feel-good experience without drowsiness.',
    },
    {
      id: 6,
      question: 'How should I store Collider?',
      answer: 'For the best taste experience, we recommend storing Collider in the refrigerator and serving it chilled. It\'s best consumed within 6 months of purchase. Once opened, enjoy immediately for optimal flavor and carbonation.',
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding-lg bg-cream"
    >
      <div className="container-wide max-w-4xl">
        {/* Header */}
        <div className="faq-header text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-medium text-black mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-black/60 max-w-lg mx-auto">
            Everything you need to know about Collider. Can't find what you're looking for? 
            Reach out to our team.
          </p>
        </div>

        {/* FAQ List */}
        <div className="faq-list space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.id}
              className="faq-item bg-white border border-black/10 overflow-hidden"
            >
              {/* Question Button */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-black/5 transition-colors duration-[var(--transition-base)]"
              >
                <span className="font-medium text-black pr-8">{faq.question}</span>
                <FiChevronDown
                  className={`w-5 h-5 text-black/60 flex-shrink-0 transition-transform duration-[var(--transition-base)] ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {/* Answer */}
              <div
                className={`accordion-content ${openIndex === index ? 'open' : ''}`}
              >
                <div className="px-6 pb-6">
                  <p className="text-black/70 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link */}
        <div className="mt-10 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-sm font-medium text-black hover:opacity-60 transition-opacity duration-[var(--transition-base)]"
          >
            VIEW ALL FAQS
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;