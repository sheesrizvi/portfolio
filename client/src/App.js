import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'

const App = () => {
  return (
    <Router>
      <Route path='/' component={Home} exact />
      <Route path='/about' component={About} />
      <Route path='/services' component={Services} />
    </Router>
  )
}

export default App
