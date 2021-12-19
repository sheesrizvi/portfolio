import React from "react";
import Logo from "../img/Logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-info">
        <div className="logo">
          <img src={Logo} alt="Logo" style={{ width: "10vw" }} />
        </div>
        <div className="footer-mail">
          <h3>📧info@globaloutsourcehub.com</h3>
        </div>
      </div>
      <div className="footer-services">
        <div className="f-about">
          <h3>About</h3>
          <p>
            Global Outsource have much planned for the future, working with
            great clients and continued software development.
          </p>
          <div className="social-media">
            <div className="r-icons">
              <a
                target="_blank"
                href="https://www.facebook.com/GlobalOutsourceHub/"
              >
                <FaFacebook />
              </a>
            </div>
            <div className="r-icons">
              <a
                target="_blank"
                href="https://www.instagram.com/globaloutsourcehub/"
              >
                <FaInstagram />
              </a>
            </div>
            <div className="r-icons">
              <a
                target="_blank"
                href="https://www.linkedin.com/company/global-outsource-hub"
              >
                <FaLinkedinIn />
              </a>
            </div>
            <div className="r-icons">
              <a target="_blank" href="https://twitter.com/gbloutsourcehub">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>
        <div className="f-services">
          <h3>Services</h3>
          <ul>
            <li><NavLink to='/mobile-app-development'>Mobile APP Development</NavLink></li>
            <li> <NavLink to='/seo-services'>SEO Services</NavLink></li>
            <li><NavLink to='/digital-marketing'>Marketing</NavLink></li>
            <li><NavLink to='/web-development'>Web Development</NavLink></li>
          </ul>
        </div>
        <div className="f-quickLinks">
          <h3>Quick Links</h3>
          <ul>
            <li><NavLink to='/'>Home</NavLink></li>
            <li><NavLink to='/about'>About Us</NavLink></li>
            <li><NavLink to='/contact-us'>Contacts</NavLink></li>
          </ul>
        </div>
      </div>
      <p className="copyright">
        © 2022 — Global Outsource Hub. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;
