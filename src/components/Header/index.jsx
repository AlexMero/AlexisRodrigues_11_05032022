import logo from '../../assets/LOGO.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../style/color'

const StyledNav = styled.nav`
  display: flex;
  align-item: center;
  justify-content: space-between;
`
const StyledLink = styled(Link)`
  margin: 10px 15px;
  color: ${colors.primary};
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
  text-align: center;
`

const StyledLinkContainer = styled.div`
  display: flex;
  align-items: center;
`

function Header() {
  return (
    <StyledNav>
      <img src={logo} alt="logo Kasa" />
      <StyledLinkContainer>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/apropos">A propos</StyledLink>
      </StyledLinkContainer>
    </StyledNav>
  )
}

export default Header
