import InitiativeHighlight from '../components/InitiativeHighlight'

const Home = () => {
  return (
    <section>
      <h1>الرئيسية</h1>
      <p>
        مرحباً بك في منصة سند؛ يمكنك البدء من هنا لاستعراض أهم الأخبار
        والمبادرات والمشاريع الحالية.
      </p>

      <InitiativeHighlight />
    </section>
  )
}

export default Home
