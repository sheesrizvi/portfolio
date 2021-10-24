import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Contact from '../pages/Contact'

const Header = () => {
  return (
    <Router>
      <nav>
        <div className='logo'>
          <h1>Startup</h1>
        </div>
        <div className='links'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/services'>Services</Link>
            </li>
            <li>
              <Link to='/contact'>Contacts</Link>
            </li>
          </ul>
          <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path='/services'>
              <Services />
            </Route>
            <Route path='/'>{/* <Home /> */}</Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            +
          </Switch>
        </div>
        <div className='cart'>
          {' '}
          <Link to='/cart'>🛒</Link>
        </div>
      </nav>
    </Router>
  )
}

export default Header
