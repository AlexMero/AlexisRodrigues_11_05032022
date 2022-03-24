import Header from '../../components/Header/Header.jsx'
import { Link } from 'react-router-dom'

function Error() {
  return (
    <div className="errorPage">
      <Header />
      <div className="mainContent">
        <h1>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link to="/" className="styledLink">
          Retourner sur la page d’accueil
        </Link>
      </div>
    </div>
  )
}

export default Error
