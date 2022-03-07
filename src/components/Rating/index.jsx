import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import colors from '../../style/color'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const StyledStarColor = styled(FontAwesomeIcon)`
  color: ${colors.primary};
`
const StyledStarGrey = styled(FontAwesomeIcon)`
  color: ${colors.backgroundLight};
`

function Rating({ note }) {
  const items = []
  for (let i = 0; i < 5; i++) {
    i <= parseInt(note) - 1
      ? items.push(<StyledStarColor icon={faStar} />)
      : items.push(<StyledStarGrey icon={faStar} />)
  }
  return <div>{items}</div>
}

Rating.propTypes = {
  note: PropTypes.string.isRequired,
}

export default Rating
