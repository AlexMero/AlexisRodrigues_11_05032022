import { useParams } from 'react-router-dom'
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
  let logement = {}
  logements.forEach((data) => {
    if (data.id === id) {
      logement = data
    }
  })

  return (
    <div className="logementContainer">
      <Header />
      <Carroussel photos={logement.pictures} />
      <div className="logementContent">
        <h1>{logement.title}</h1>
        <span>{logement.location}</span>
        <div className="logementTagContainer">
          {logement.tags.map((tag) => {
            return <Tag texte={tag} key={tag} />
          })}
        </div>
        <Profil profilData={logement.host} />
        <Rating note={logement.rating} />
      </div>
      <div className="logementDropdownContainer">
        <Dropdown
          title="Description"
          content={logement.description}
          key="description"
        />
        <Dropdown
          title="Equipements"
          content={logement.equipments}
          key="equipement"
        />
      </div>
      <Footer />
    </div>
  )
}

export default Logement
