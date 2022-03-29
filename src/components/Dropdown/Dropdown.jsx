import { createElement, useState } from 'react'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

function Dropdown({ title, content }) {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="dropdownContainer">
      <div
        className="dropdownContent"
        onClick={() => {
          setIsOpen(!isOpen)
        }}
      >
        <h2>{title}</h2>
        <FontAwesomeIcon icon={isOpen ? faAngleUp : faAngleDown} />
      </div>
      {isOpen
        ? typeof content === 'string'
          ? templateText(content)
          : templateArray(content)
        : ''}
    </div>
  )
}

function templateText(content) {
  return <div className="dropdownText">{content}</div>
}

function templateArray(content) {
  return (
    <div className="dropdownText">
      {content.map((text) => {
        return <p>{text}</p>
      })}
    </div>
  )
}

Dropdown.propType = {
  title: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]).isRequired,
}

Dropdown.defaultProps = {
  content: '',
}

export default Dropdown
