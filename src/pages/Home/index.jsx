import Bandeau from '../../components/Bandeau'
import Header from '../../components/Header'
import styled from 'styled-components'
import colors from '../../style/color'
import Card from '../../components/Card'
import bckGround from '../../assets/bckgrndBandeau.png'
import logements from '../../datas/logements'
import Footer from '../../components/Footer'

const StyledCardsContainer = styled.section`
  background-color: ${colors.backgroundLight};
  width: 100%;
  height: auto;
  border-radius: 25px;
  margin-top: 2rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
`

function Home() {
  return (
    <div>
      <Header />
      <Bandeau
        texte="Chez vous, partout et ailleurs"
        picture={bckGround}
        key="1"
      />
      <StyledCardsContainer>
        {logements.map((logement) => {
          return <Card key={logement.id} data={logement} />
        })}
      </StyledCardsContainer>
      <Footer />
    </div>
  )
}

export default Home
