import styled from 'styled-components'
import logoWhite from '../../assets/LOGOWhite.png'

const StyledFooter = styled.div`
  background-color: #000000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: column;
  color: white;
  padding-top: 2rem;
  margin-top: 2rem;
`

function Footer() {
  return (
    <StyledFooter>
      <img src={logoWhite} alt="logo kasa blanc" />
      <p>C 2020 Kasa. All rigths reserved</p>
    </StyledFooter>
  )
}

export default Footer
