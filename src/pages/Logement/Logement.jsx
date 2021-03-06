import { useParams, Navigate } from 'react-router-dom'
import logements from '../../datas/logements'
import Header from '../../components/Header/Header.jsx'
import Tag from '../../components/Tag/Tag.jsx'
import Rating from '../../components/Rating/Rating.jsx'
import Profil from '../../components/Profil/Profil.jsx'
import Dropdown from '../../components/Dropdown/Dropdown.jsx'
import Footer from '../../components/Footer/Footer.jsx'
import Carroussel from '../../components/Carrousel/Carrousel.jsx'

function Logement() {
  const { id } = useParams()
  const logement = extractLogement(id)
  if (logement === null) {
    return <Navigate replace to="/404" />
  }

  return (
    <div className="logementContainer">
      <main>
        <Header />
        <Carroussel photos={logement.pictures} />
        <div className="logementContent">
          <h1>{logement.title}</h1>
          <span className="location">{logement.location}</span>
          <div className="logementTagContainer">
            {logement.tags.map((tag) => {
              return <Tag texte={tag} key={tag} />
            })}
          </div>
          <Profil profilData={logement.host} />
          <Rating note={logement.rating} />
          <div className="description">
            <Dropdown
              title="Description"
              content={logement.description}
              key="description"
            />
          </div>
          <div className="equipements">
            <Dropdown
              title="Equipements"
              content={logement.equipments}
              key="equipement"
            />
          </div>
        </div>
        <div className="logementDropdownContainer"></div>
      </main>
      <Footer />
    </div>
  )
}

function extractLogement(id) {
  for (const logement of logements) {
    if (logement.id === id) return logement
  }
  return null
}

export default Logement
