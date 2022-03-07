import styled from 'styled-components'
import { useState } from 'react'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const StyledImg = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const StyledSection = styled.section`
  width: 100%;
  // height: 15rem;
  height: 415px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  margin-top: 2rem;
  position: relative;
  background: #000000;
  overflow: hidden;
`

const StyledIconR = styled(FontAwesomeIcon)`
  z-index: 2;
  color: white;
  position: absolute;
  right: 20px;
  font-size: 3rem;
`
const StyledIconL = styled(FontAwesomeIcon)`
  z-index: 2;
  color: white;
  position: absolute;
  left: 20px;
  font-size: 3rem;
`

function Carrousel({ photos }) {
  const [photoIndex, setPhotoIndex] = useState(0)
  return (
    <StyledSection>
      <StyledImg src={photos[photoIndex]} alt="fond d'écran de bandeau" />
      <StyledIconL
        icon={faAngleLeft}
        onClick={() => {
          photos[photoIndex - 1]
            ? setPhotoIndex(photoIndex - 1)
            : setPhotoIndex(photos.length - 1)
        }}
      />
      <StyledIconR
        icon={faAngleRight}
        onClick={() => {
          photos[photoIndex + 1]
            ? setPhotoIndex(photoIndex + 1)
            : setPhotoIndex(0)
        }}
      />
    </StyledSection>
  )
}

export default Carrousel
