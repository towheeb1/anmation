import React, { useState } from 'react';
import Hero from '../components/ui/Hero';
import { FiPlus, FiMinus } from 'react-icons/fi';

const faqs = [
  {
    question: 'ما هو برنامج سند محمد بن سلمان؟',
    answer: 'برنامج سند محمد بن سلمان هو مبادرة مجتمعية غير ربحية تسعى لتمكين فئات المجتمع المختلفة من خلال مبادرات نوعية تهدف إلى تحقيق الاستقرار والازدهار.'
  },
  {
    question: 'كيف يمكنني التقديم على مبادرات سند؟',
    answer: 'يمكن التقديم من خلال البوابة الإلكترونية الرسمية للبرنامج عند فتح باب التسجيل للمبادرة المعنية، مع ضرورة استيفاء الشروط والمعايير المحددة لكل مبادرة.'
  },
  {
    question: 'هل الدعم المقدم مسترد؟',
    answer: 'لا، الدعم المقدم من خلال مبادرات برنامج سند هو دعم غير مسترد، حيث يهدف البرنامج إلى المساهمة المجتمعية والتمكين وليس الإقراض.'
  },
  {
    question: 'ما هي الشروط العامة للاستفادة من مبادرة سند الزواج؟',
    answer: 'تشمل الشروط العامة أن يكون المتقدم سعودي الجنسية، وأن يكون هذا هو الزواج الأول، مع وجود حد أقصى للدخل الشهري ومؤهل تعليمي محدد، بالإضافة إلى اجتياز دورة الوعي المالي.'
  }
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <main>
      <Hero 
        title="الأسئلة الشائعة"
        subtitle="كل ما تود معرفته عن برنامج سند"
        height="min-h-[40vh]"
        bgImage="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=2070"
      />

      <section className="section-padding bg-white">
        <div className="container max-w-4xl">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                <button 
                  className="w-full flex justify-between items-center p-6 text-right bg-white hover:bg-gray-50 transition-colors"
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                >
                  <span className="text-lg font-bold text-secondary">{faq.question}</span>
                  <span className="text-primary text-xl">
                    {openIndex === i ? <FiMinus /> : <FiPlus />}
                  </span>
                </button>
                <div className={`transition-all duration-500 ease-in-out ${openIndex === i ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <div className="p-6 pt-0 text-text-secondary leading-loose border-t border-gray-50">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Faq;
