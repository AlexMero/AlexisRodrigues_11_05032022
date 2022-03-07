import { useState } from 'react'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import styled from 'styled-components'
import colors from '../../style/color'
import PropTypes from 'prop-types'

const StyledDropdownContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: start;
  align-items: center;
  width: 100%;
  height: auto;
  margin-top: 30px;
`

const StyledTitle = styled.h2`
  font-size: 24px;
`

function Dropdown({ title, content, size }) {
  const StyledDropdown = styled.div`
    display: flex;
    border-radius: 5px;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px 0 10px;
    background-color: ${colors.primary};
    width: ${size}%;
    height: 4rem;
    color: white;
  `
  const StyledDropdownContent = styled.div`
    width: ${size}%;
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
    padding: 20px 10px 20px 10px;
    background-color: ${colors.backgroundLight};
    font-size: 24px;
    color: ${colors.primary};
  `

  const [isOpen, setIsOpen] = useState(false)
  return (
    <StyledDropdownContainer>
      <StyledDropdown
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <StyledTitle>{title}</StyledTitle>
        <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
      </StyledDropdown>
      {isOpen ? <StyledDropdownContent>{content}</StyledDropdownContent> : ''}
    </StyledDropdownContainer>
  )
}

Dropdown.propType = {
  title: PropTypes.string,
  content: PropTypes.string.isRequired,
  size: PropTypes.string,
}

Dropdown.defaultProps = {
  content: '',
  size: '100',
}

export default Dropdown
