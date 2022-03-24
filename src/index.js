import './style/style.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Apropos from './pages/Apropos/Apropos.jsx'
import Home from './pages/Home/Home'
import GlobalStyle from './style/GlobalStyle'
import Logement from './pages/Logement/Logement.jsx'
import Error from './pages/Error/Error'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/logement/:id" element={<Logement />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
