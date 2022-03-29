import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

function Rating({ note }) {
  const items = []
  for (let i = 0; i < 5; i++) {
    i <= parseInt(note) - 1
      ? items.push(
          <FontAwesomeIcon className="colorStar" icon={faStar} key={i} />
        )
      : items.push(
          <FontAwesomeIcon className="greyStar" icon={faStar} key={i} />
        )
  }
  return <div className="ratingContainer">{items}</div>
}

Rating.propTypes = {
  note: PropTypes.string.isRequired,
}

export default Rating
