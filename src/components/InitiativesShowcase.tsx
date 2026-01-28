  import { FiArrowLeftCircle } from "react-icons/fi";
  import "../styles/initiatives-showcase.css";

  const initiatives = [
    {
      id: 1,
      title: "مشروع محمد بن سلمان الخيري",
      description:
        "مشروع محمد بن سلمان الخيري لدعم الجمعيات الأهلية في مختلف مناطق المملكة، وفي شتى التخصصات والمجالات بإجمالي بلغ 100 مليون ريال شملت 70 جمعية خلال المرحلة الأولى من المشروع، و87 مليون ريال خُصصت لـ 29 جمعية أهلية في المرحلة الثانية.",
      image:
        "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?auto=format&fit=crop&w=1200&q=80",
      accent: false,
    },
    {
      id: 2,
      title: "مشروع الأمير محمد بن سلمان لتطوير المساجد التاريخية",
      description:
        "مشروع نوعي لتطوير المساجد التاريخية، وإعادة تأهيلها للعبادة والصلاة، بهدف الحفاظ على طابعها المعماري الأصيل وما تمثله من قيمة سعـودية تاريخياً وثقافياً ومبنياً، وقد تم حتى الآن تطوير 60 مسجداً في 13 منطقة على مرحلتين.",
      image:
        "https://images.unsplash.com/photo-1451976426598-a7593bd6d0b2?auto=format&fit=crop&w=1200&q=80",
      accent: false,
    },
    {
      id: 3,
      title: "مبادرة سند الزواج",
      description:
        "مبادرة أطلقت في ديسمبر 2018م لمساندة الشباب السعودي المتزوجين حديثاً من خلال تقديم العون المالي المباشر، وتعزيز الوعي المعرفي والتربوي، بدعم قُدم على مرحلتين، وقد تجاوز إجمالي الدعم 520 مليون ريال، وشمل أكثر من 26 ألف أسرة سعودية تباينت ظروفها الصحية والمعيشية.",
      image:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
      accent: true,
    },
  ];

  const InitiativesShowcase = () => {
    return (
      <div>

      <div className="initiatives-showcase__header">
          <h2>مبادرات ومشاريع سند محمد بن سلمان</h2>
        </div>
      <section
        className="initiatives-showcase"
        aria-labelledby="initiatives-title"
      >
      

        <div className="initiatives-showcase__grid">
          {initiatives.map((item) => (
           <article key={item.id} className="initiatives-showcase__item">
  <div className="initiatives-showcase__media">
    <img
      className="initiatives-showcase__photo"
      src={item.image}
      alt={item.title}
      loading="lazy"
    />

    <div
      className={`initiatives-showcase__overlay ${
        item.accent ? "initiatives-showcase__overlay--accent" : ""
      }`}
    >
      <button type="button" className="initiatives-showcase__nav" aria-label="عرض المبادرة">
        <FiArrowLeftCircle aria-hidden="true" />
      </button>

      <h3 className="initiatives-showcase__title">{item.title}</h3>
    </div>
  </div>

  <p className="initiatives-showcase__description">{item.description}</p>
</article>

          ))}
        </div>
      </section>
      </div>
    );
  };

  export default InitiativesShowcase;
