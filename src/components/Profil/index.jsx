import styled from 'styled-components'
import colors from '../../style/color'

const StyledProfil = styled.div`
  grid-area: profil;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: flex-end;
`

const StyledImg = styled.img`
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
`

const StyledName = styled.span`
  display: block;
  width: 60px;
  color: ${colors.primary};
  font-size: 18px;
  line-height: 25px;
`

function Profil({ profilData }) {
  return (
    <StyledProfil>
      <StyledName>{profilData.name}</StyledName>
      <StyledImg src={profilData.picture} alt="Profil du propriétaire" />
    </StyledProfil>
  )
}

export default Profil
