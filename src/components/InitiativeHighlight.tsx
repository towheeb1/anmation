import '../styles/initiative-highlight.css'

const InitiativeHighlight = () => {
  const initiative = {
    title: 'مبادرات ومشاريع سند محمد بن سلمان',
    name: 'مبادرة سند الزواج',
    description:
      'مبادرة أطلقت في ديسمبر 2018م لمساندة الشباب السعودي المتزوجين حديثاً من خلال تقديم العون المالي المباشر، وتعزيز الوعي المعرفي والتربوي، بدعم قدم على مرحلتين، وقد تجاوز إجمالي الدعم 520 مليون ريال.',
    caption: 'وشمل أكثر من 26 ألف أسرة سعودية تباينت ظروفها الصحية والمعيشية.',
    image:
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80',
  }

  return (
    <section className="initiative-highlight" aria-labelledby="initiative-title">
      <div className="initiative-highlight__header">
        <p>البرامج الأبرز</p>
        <h2 id="initiative-title">{initiative.title}</h2>
      </div>

      <div className="initiative-highlight__content">
        <div className="initiative-highlight__media">
          <img src={initiative.image} alt="مبادرة سند" loading="lazy" />
        </div>

        <div className="initiative-highlight__card">
          <button type="button" className="initiative-highlight__nav" aria-label="المبادرة السابقة">
            ←
          </button>

          <div className="initiative-highlight__meta">
            <span className="initiative-highlight__tag">مبادرة</span>
            <h3>{initiative.name}</h3>
          </div>

          <p className="initiative-highlight__text">{initiative.description}</p>
          <p className="initiative-highlight__text">{initiative.caption}</p>
        </div>
      </div>
    </section>
  )
}

export default InitiativeHighlight

