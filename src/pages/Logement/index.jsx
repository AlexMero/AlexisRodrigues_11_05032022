import { useParams } from 'react-router-dom'
import logements from '../../datas/logements'
import Header from '../../components/Header'
import Tag from '../../components/Tag'
import Rating from '../../components/Rating'
import Profil from '../../components/Profil'
import styled from 'styled-components'
import colors from '../../style/color'
import Dropdown from '../../components/Dropdown'
import Footer from '../../components/Footer'
import Carroussel from '../../components/Carrousel'

const StyledContainer = styled.div`
  display: grid;
  grid-template-areas: 'titre profil' 'location profil' 'tags rating';
  grid-template-columns: 80% 20%;
  margin-top: 1rem;
`

const StyledTitre = styled.h1`
  grid-area: titre;
  color: ${colors.primary};
  font-size: 36px;
`

const StyledLocation = styled.span`
  grid-area: location;
  color: ${colors.primary};
  font-size: 18px;
`

const StyledTagsContainer = styled.div`
  grid-area: tags;
  display: flex;
  align-items: center;
  justify-content: start;
  margin-top: 2rem;
`

const StyledRating = styled(Rating)`
  grid-area: rating;
`

const StyledDropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

function Logement() {
  const { id } = useParams()
  let logement = {}
  logements.forEach((data) => {
    if (data.id === id) {
      logement = data
    }
  })

  return (
    <div>
      <Header />
      <Carroussel photos={logement.pictures} />
      <StyledContainer>
        <StyledTitre>{logement.title}</StyledTitre>
        <StyledLocation>{logement.location}</StyledLocation>
        <StyledTagsContainer>
          {logement.tags.map((tag) => {
            return <Tag texte={tag} key={tag} />
          })}
        </StyledTagsContainer>
        <Profil profilData={logement.host} />
        <StyledRating note={logement.rating} />
      </StyledContainer>
      <StyledDropdownContainer>
        <Dropdown
          title="Description"
          content={logement.description}
          size="90"
          key="description"
        />
        <Dropdown
          title="Equipements"
          content={logement.description}
          size="90"
          key="equipement"
        />
      </StyledDropdownContainer>
      <Footer />
    </div>
  )
}

export default Logement
