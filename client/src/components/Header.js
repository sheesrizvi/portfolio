import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from 'react-router-dom'

import Logo from '../img/Logo.png'

const Header = () => {
  // const Navbar = () => {
  //   const [colorChange, setColorchange] = useState(false)
  //   const changeNavbarColor = () => {
  //     if (window.scrollY >= 80) {
  //       setColorchange(true)
  //     } else {
  //       setColorchange(false)
  //     }
  //   }
  // }
  // window.addEventListener('scroll', changeNavbarColor)
  return (
    <nav>
      <div className='logo'>
        <img src={Logo} alt='Logo' style={{ width: '10vw' }} />
      </div>
      <div className='links'>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <div class='dropdown'>
              <button className='dropbtn'>
                Services
                {/* <NavLink to='/services'>Services</NavLink> */}
              </button>
              <div className='dropdown-content'>
                <a href='/web-development'>Web Development</a>
                <a href='/mobile-app-development'>Mobile APP Development</a>
                <a href='/seo-services'>SEO Services</a>
                <a href='/digital-marketing'>Digital Marketing</a>
              </div>
            </div>
          </li>
          <li>
            <NavLink to='/contact-us'>Contacts</NavLink>
          </li>
        </ul>
        {/* <Switch>
            <Route path='/about'>
              <About />
            </Route>
            <Route path="/services">
              <Services />
            </Route>
            <Route path='/'><Home /></Route>
            <Route path='/contact'>
              <Contact />
            </Route>
            +
          </Switch> */}
      </div>
      <div className='cart'>
        {' '}
        <NavLink to='/cart'>🛒</NavLink>
      </div>
    </nav>
  )
}

export default Header
