import Bandeau from '../../components/Bandeau/Bandeau.jsx'
import Header from '../../components/Header/Header.jsx'
import Card from '../../components/Card/Card'
import bckGround from '../../assets/bckgrndBandeau.png'
import logements from '../../datas/logements'
import Footer from '../../components/Footer/Footer.jsx'

function Home() {
  return (
    <div>
      <Header />
      <Bandeau
        texte="Chez vous, partout et ailleurs"
        picture={bckGround}
        key="1"
      />
      <section className="sectionLogementContainer">
        {logements.map((logement) => {
          return <Card key={logement.id} data={logement} />
        })}
      </section>
      <Footer />
    </div>
  )
}

export default Home
