import Header from '../../components/Header'
import styled from 'styled-components'
import colors from '../../style/color'
import { Link } from 'react-router-dom'

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
`

const StyledTitle = styled.h1`
  color: ${colors.primary};
  font-size: 8rem;
  font-weight: 700;
`

const StyledTexte = styled.p`
  color: ${colors.primary};
  font-size: 2rem;
`

const StyledLink = styled(Link)`
  color: ${colors.primary};
  margin-top: 5rem;
`

function Error() {
  return (
    <div>
      <Header />
      <StyledContainer>
        <StyledTitle>404</StyledTitle>
        <StyledTexte>Oups! La page que vous demandez n'existe pas.</StyledTexte>
        <StyledLink to="/">Retourner sur la page d’accueil</StyledLink>
      </StyledContainer>
    </div>
  )
}

export default Error
