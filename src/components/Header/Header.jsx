import logo from '../../assets/LOGO.png'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <nav className="headerContainer">
      <img src={logo} alt="logo Kasa" />
      <div className="headerContent">
        <Link className="headerLink" to="/">
          Accueil
        </Link>
        <Link className="headerLink" to="/apropos">
          A propos
        </Link>
      </div>
    </nav>
  )
}

export default Header
