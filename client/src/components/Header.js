import React, { useState } from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../Actions/userActions'

import Logo from '../img/Logo.png'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
    // console.log('logout')
  }

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
              <button className='dropbtn'>Services</button>
              <div className='dropdown-content'>
                <NavLink to='/web-development'>Web Development</NavLink>
                <NavLink to='/mobile-app-development'>
                  Mobile APP Development
                </NavLink>
                <NavLink to='/seo-services'>SEO Services</NavLink>
                <NavLink to='/digital-marketing'>Digital Marketing</NavLink>
              </div>
            </div>
          </li>
          <li>
            <NavLink to='/contact-us'>Contacts</NavLink>
          </li>
        </ul>
      </div>
      <div className='cart'>
        {' '}
        <NavLink to='/cart'>🛒</NavLink>
        {userInfo ? (
          <div class='dropdown'>
            <button className='dropbtn' title={userInfo.name} id='username'>
              {userInfo.name}
            </button>
            <div className='dropdown-content'>
              {/* <NavLink to='/profile'>Profile</NavLink> */}
              <a onClick={logoutHandler}>Logout</a>
              {/* <NavLink ></NavLink> */}
            </div>
          </div>
        ) : (
          // <NavDropdown title={userInfo.name} id='username'>
          //   <NavLink to='/profile'>Profile</NavLink>
          //   <NavLink onClick={logoutHandler}>Logout</NavLink>
          //   {/* <LinkContainer to='/profile'>
          //     <NavDropdown.Item>Profile</NavDropdown.Item>
          //   </LinkContainer>
          //   <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item> */}
          // </NavDropdown>
          <NavLink to='/login'>
            <i className='fas fa-user'></i> Sign In
          </NavLink>
          // <LinkContainer to='/login'>
          //   <Nav.Link>
          //     <i className='fas fa-user'></i> Sign In
          //   </Nav.Link>
          // </LinkContainer>
        )}
      </div>
    </nav>
  )
}

export default Header
