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
    <nav class='navbar navbar-expand-lg navbar-light bg-light c-nav'>
      <div className='nav-1123'>
        <nav class='navbar navbar-light bg-light nav-logo-div'>
          <a class='navbar-brand' href='#'>
            <img
              src={Logo}
              alt='Logo'
              //  style={{ width: '12vw' }}
            />
          </a>
        </nav>
        <div className='ham-btn-div'>
          <button
            class='navbar-toggler ham-btn'
            type='button'
            data-toggle='collapse'
            data-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
        </div>
      </div>

      <div class='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul class='navbar-nav mr-auto'>
          <li class='nav-item active'>
            <a class='nav-link' href='#'>
              <NavLink to='/'>Home</NavLink>
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link' href='#'>
              <NavLink to='/about'>About</NavLink>
            </a>
          </li>
          <li class='nav-item dropdown'>
            <a
              class='nav-link dropdown-toggle'
              // href='#'
              id='navbarDropdown'
              role='button'
              data-toggle='dropdown'
              aria-haspopup='true'
              aria-expanded='false'
            >
              Services
            </a>
            <div class='dropdown-menu' aria-labelledby='navbarDropdown'>
              <a class='dropdown-item' href='#'>
                <NavLink to='/web-development'>Web Development</NavLink>
              </a>
              <a class='dropdown-item' href='#'>
                <NavLink to='/mobile-app-development'>
                  Mobile APP Development
                </NavLink>
              </a>

              <a class='dropdown-item' href='#'>
                <NavLink to='/seo-services'>SEO Services</NavLink>
              </a>
              <a class='dropdown-item' href='#'>
                <NavLink to='/digital-marketing'>Digital Marketing</NavLink>
              </a>
            </div>
          </li>
          <li class='nav-item'>
            <a class='nav-link ' href='#'>
              <NavLink to='/contact-us'>Contacts</NavLink>
            </a>
          </li>
          <li class='nav-item'>
            <a class='nav-link ' href='#'>
              <div className='cart'>
                {' '}
                <NavLink to='/cart'>🛒</NavLink>
                {userInfo ? (
                  <div class='dropdown'>
                    <button
                      className='dropbtn'
                      title={userInfo.name}
                      id='username'
                    >
                      {userInfo.name}
                    </button>
                    <div className='dropdown-content'>
                      {/* <NavLink to='/profile'>Profile</NavLink> */}
                      <a onClick={logoutHandler}>Logout</a>
                      {/* <NavLink ></NavLink> */}
                    </div>
                  </div>
                ) : (
                  <NavLink to='/login'>
                    <i className='fas fa-user'></i> Sign In
                  </NavLink>
                )}
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
    // <nav>
    //   {/* <input type='checkbox' id='check' />
    //   <label for='check' class='checkbtn'>
    //     &#9776;
    //   </label> */}
    //   <div className='logo'>
    //     <img src={Logo} alt='Logo' style={{ width: '10vw' }} />
    //   </div>
    //   <div className='links'>
    //     <ul>
    //       <li>
    //         <NavLink to='/'>Home</NavLink>
    //       </li>
    //       <li>
    //         <NavLink to='/about'>About</NavLink>
    //       </li>
    //       <li>
    //         <div class='dropdown'>
    //           <button className='dropbtn'>Services</button>
    //           <div className='dropdown-content'>
    //             <NavLink to='/web-development'>Web Development</NavLink>
    //             <NavLink to='/mobile-app-development'>
    //               Mobile APP Development
    //             </NavLink>
    //             <NavLink to='/seo-services'>SEO Services</NavLink>
    //             <NavLink to='/digital-marketing'>Digital Marketing</NavLink>
    //           </div>
    //         </div>
    //       </li>
    //       <li>
    //         <NavLink to='/contact-us'>Contacts</NavLink>
    //       </li>
    //     </ul>
    //   </div>
    // <div className='cart'>
    //   {' '}
    //   <NavLink to='/cart'>🛒</NavLink>
    //   {userInfo ? (
    //     <div class='dropdown'>
    //       <button className='dropbtn' title={userInfo.name} id='username'>
    //         {userInfo.name}
    //       </button>
    //       <div className='dropdown-content'>
    //         {/* <NavLink to='/profile'>Profile</NavLink> */}
    //         <a onClick={logoutHandler}>Logout</a>
    //         {/* <NavLink ></NavLink> */}
    //       </div>
    //     </div>
    //   ) : (
    //     <NavLink to='/login'>
    //       <i className='fas fa-user'></i> Sign In
    //     </NavLink>
    //   )}
    // </div>
    // </nav>
  )
}

export default Header
