import logo from '../../assets/LOGO.png'
import { Link } from 'react-router-dom'
import { useNavigate, useLocation } from 'react-router-dom'

function Header() {
  const navigate = useNavigate()
  const location = useLocation()
  const { pathname } = location
  const splitLocation = pathname.split('/')
  return (
    <nav className="headerContainer">
      <img onClick={() => navigate('/')} src={logo} alt="logo Kasa" />
      <div className="headerContent">
        <Link
          className={
            splitLocation[1] === '' ? 'headerLink active' : 'headerLink'
          }
          to="/"
        >
          Accueil
        </Link>
        <Link
          className={
            splitLocation[1] === 'apropos' ? 'headerLink active' : 'headerLink'
          }
          to="/apropos"
        >
          A propos
        </Link>
      </div>
    </nav>
  )
}

export default Header
