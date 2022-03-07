import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledTitle = styled.h1`
  color: white;
  font-size: 48px;
  position: relative;
  z-index: 2;
`

const StyledImg = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;
  object-fit: cover;
`

function Bandeau({ texte, picture, size }) {
  const StyledSection = styled.section`
    width: 100%;
    // height: 15rem;
    height: ${size}rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    margin-top: 2rem;
    position: relative;
    background: #000000;
    overflow: hidden;
  `

  return (
    <StyledSection>
      <StyledTitle>{texte}</StyledTitle>
      <StyledImg src={picture} alt="fond d'écran de bandeau" />
    </StyledSection>
  )
}

Bandeau.propType = {
  texte: PropTypes.string,
  picture: PropTypes.string.isRequired,
  size: PropTypes.string,
}

Bandeau.defaultProps = {
  texte: '',
  size: '15',
}

export default Bandeau
