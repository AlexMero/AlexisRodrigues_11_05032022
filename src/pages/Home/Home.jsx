import Bandeau from '../../components/Bandeau/Bandeau.jsx'
import Header from '../../components/Header/Header.jsx'
import Card from '../../components/Card/Card'
import bckGround from '../../assets/bckgrndBandeau.png'
import logements from '../../datas/logements'
import Footer from '../../components/Footer/Footer'

function Home() {
  return (
    <div>
      <main>
        <Header />
        <Bandeau
          texte="Chez vous, partout et ailleurs"
          picture={bckGround}
          key="1"
        />
        <section className="homeLogementContainer">
          {logements.map((logement) => {
            return <Card key={logement.id} data={logement} />
          })}
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default Home
