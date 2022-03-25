import Header from '../../components/Header/Header.jsx'
import { Link } from 'react-router-dom'
import Footer from '../../components/Footer/Footer.jsx'

function Error() {
  return (
    <div className="errorPage">
      <main>
        <Header />
        <div className="mainContent">
          <h1>404</h1>
          <p>Oups! La page que vous demandez n'existe pas.</p>
          <Link to="/" className="styledLink">
            Retourner sur la page d’accueil
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Error
