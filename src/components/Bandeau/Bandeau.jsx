import PropTypes from 'prop-types'

function Bandeau({ texte, picture }) {
  return (
    <section className="bandeauContainer">
      <h1>{texte}</h1>
      <img src={picture} alt="fond d'écran de bandeau" />
    </section>
  )
}

Bandeau.propType = {
  texte: PropTypes.string,
  picture: PropTypes.string.isRequired,
}

Bandeau.defaultProps = {
  texte: '',
}

export default Bandeau
