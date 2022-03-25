import { useState } from 'react'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'
import { faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Carrousel({ photos }) {
  const [photoIndex, setPhotoIndex] = useState(0)
  return (
    <section className="carrouselContainer">
      <img src={photos[photoIndex]} alt="fond d'écran de bandeau" />
      {photos.length !== 1 ? (
        <FontAwesomeIcon
          className="angleLeft"
          icon={faAngleLeft}
          onClick={() => {
            photos[photoIndex - 1]
              ? setPhotoIndex(photoIndex - 1)
              : setPhotoIndex(photos.length - 1)
          }}
        />
      ) : (
        ''
      )}
      {photos.length !== 1 ? (
        <FontAwesomeIcon
          className="angleRight"
          icon={faAngleRight}
          onClick={() => {
            photos[photoIndex + 1]
              ? setPhotoIndex(photoIndex + 1)
              : setPhotoIndex(0)
          }}
        />
      ) : (
        ''
      )}
      <p>
        {photoIndex + 1}/{photos.length}
      </p>
    </section>
  )
}

export default Carrousel
