import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Apropos from './pages/Apropos'
import Home from './pages/Home'
import GlobalStyle from './style/GlobalStyle'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apropos" element={<Apropos />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
