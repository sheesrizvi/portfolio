import React from 'react'
import Logo from '../img/Logo.png'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-info'>
        <div className='logo'>
          <img src={Logo} alt='Logo' style={{ width: '10vw' }} />
        </div>
        <div className='footer-mail'>
          <h3>📧info@globaloutsourcehub.com</h3>
        </div>
      </div>
      <div className='footer-services'>
        <div className='f-about'>
          <h3>About</h3>
          <p>
            Global Outsource have much planned for the future, working with
            great clients and continued software development.
          </p>
          <div className='social-media'>
            <div className='r-icons'>
              <FaFacebook />
            </div>
            <div className='r-icons'>
              <FaInstagram />
            </div>
            <div className='r-icons'>
              <FaLinkedinIn />
            </div>
            <div className='r-icons'>
              <FaTwitter />
            </div>
          </div>
        </div>
        <div className='f-services'>
          <h3>Services</h3>
          <ul>
            <li>DBMS</li>
            <li>Product UX</li>
            <li> Marketing & SEO</li>
          </ul>
        </div>
        <div className='f-quickLinks'>
          <h3>Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <p className='copyright'>
        © 2022 — Global Outsource Hub. All Rights Reserved.
      </p>
    </div>
  )
}

export default Footer
