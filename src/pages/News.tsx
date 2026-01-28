import React from 'react';
import Hero from '../components/ui/Hero';
import Card from '../components/ui/Card';

const newsItems = [
  {
    title: 'برنامج سند محمد بن سلمان يعلن عن إطلاق مبادرة جديدة لدعم الأسر المنتجة',
    description: 'في إطار سعيه المستمر لتمكين مختلف فئات المجتمع، أعلن برنامج سند اليوم عن إطلاق مبادرة نوعية تهدف إلى دعم وتطوير مشاريع الأسر المنتجة في مختلف مناطق المملكة.',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1000',
    date: '25 يناير 2026',
    horizontal: true
  },
  {
    title: 'تجاوز عدد المستفيدين من مبادرة سند الزواج 200 ألف مستفيد',
    description: 'حقق برنامج سند الزواج إنجازاً جديداً بتجاوز عدد المستفيدين منه حاجز الـ 200 ألف شاب وفتاة في جميع أنحاء المملكة، مما يعكس الأثر الإيجابي الكبير للمبادرة.',
    image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&q=80&w=1000',
    date: '18 يناير 2026',
    horizontal: true
  },
  {
    title: 'شراكة استراتيجية بين سند ومؤسسات القطاع غير الربحي لتعزيز التكافل',
    description: 'وقع برنامج سند محمد بن سلمان مذكرات تفاهم مع عدد من كبرى الجمعيات الأهلية والمؤسسات غير الربحية لتوحيد الجهود في تقديم الدعم للفئات الأكثر احتياجاً.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1000',
    date: '10 يناير 2026',
    horizontal: true
  }
];

const News = () => {
  return (
    <main>
      <Hero 
        title="المركز الإعلامي"
        subtitle="أحدث أخبار وفعاليات برنامج سند"
        height="min-h-[40vh]"
        bgImage="https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&q=80&w=2070"
      />

      <section className="section-padding">
        <div className="container">
            <div className="flex flex-col gap-10 max-w-5xl mx-auto">
              {newsItems.map((item, i) => (
                <Card key={i} {...item} delay={i * 0.1} />
              ))}
              
              <div className="mt-12 flex justify-center">
                <button className="btn btn-secondary px-12 py-3 font-bold">
                  عرض المزيد من الأخبار
                </button>
              </div>
            </div>
        </div>
      </section>
    </main>
  );
};

export default News;
