import React from 'react';
import Hero from '../components/ui/Hero';
import Card from '../components/ui/Card';

const allInitiatives = [
  {
    title: 'سند الزواج',
    description: 'دعم حديثي الزواج وتحفيز الاستقرار الأسري.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'سند الأيتام',
    description: 'تمكين الأيتام وتعزيز قدراتهم العلمية والعملية.',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'سند الغارمين',
    description: 'المساهمة في سداد ديون المعسرين وتفريج كربهم.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'سند التعليم',
    description: 'دعم الطلاب المتفوقين وتوفير الفرص التعليمية.',
    image: 'https://images.unsplash.com/photo-1523050853063-bd8012fec21b?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'سند الإسكان',
    description: 'تحسين جودة السكن للفئات الأكثر احتياجاً.',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&q=80&w=1000'
  },
  {
    title: 'سند الابتكار',
    description: 'دعم المشاريع الشبابية المبتكرة والنوعية.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1000'
  }
];

const InitiativesProjects = () => {
  return (
    <main>
      <Hero 
        title="حلول سند محمد بن سلمان"
        subtitle="مبادرات مبتكرة لأثر مستدام"
        height="min-h-[40vh]"
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2069"
      />

      <section className="section-padding">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {allInitiatives.map((item, i) => (
              <Card key={i} {...item} delay={(i % 3) * 0.15} />
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-gray-50">
        <div className="container grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-black text-secondary mb-8">فلسفة المبادرات</h2>
            <div className="space-y-6 text-text-secondary leading-loose">
              <p>
                ترتكز مبادرات برنامج سند على فهم عميق لاحتياجات المجتمع السعودي، وتسعى لتقديم حلول تتجاوز الدعم المادي التقليدي لتصل إلى التمكين المعرفي والمهاري.
              </p>
              <p>
                نؤمن بأن الاستثمار في الإنسان هو الضمان الحقيقي لاستدامة التنمية، ولذلك نصمم مبادراتنا لتكون محفزة على التعلم والنمو والاستقرار.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="h-64 rounded-2xl bg-primary/10 flex items-center justify-center text-primary text-4xl font-bold">تمكين</div>
            <div className="h-64 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary text-4xl font-bold mt-8">استدامة</div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default InitiativesProjects;
