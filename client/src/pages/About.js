import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import abtLogo from '../img/about_us_img_02-1.jpg'
import wvdLogo from '../img/about_us_img_01-1.png'
import wcuLogo from '../img/home_img-03-1.png'
import seoLogo from '../img/img_box_01-1.png'
import compLogo from '../img/img_box_02-1.png'
import marketLogo from '../img/img_box_03-1.png'

const About = () => {
  return (
    <div>
      <Header />
      <header>
        <h1 className='about-header'>About Us</h1>
        <p>
          <NavLink to='/'>Home</NavLink> ➡ About Us
        </p>
      </header>
      <div className='cards-section'>
        <div className='card card1'>
          <img className='abt-img' src={seoLogo} alt='' />
          <h4>SEO Consultancy</h4>
        </div>
        <div className='card card2'>
          <img className='abt-img' src={compLogo} alt='' />
          <h4>Competitor Analysis</h4>
        </div>
        <div className='card card3'>
          <img className='abt-img' src={marketLogo} alt='' />
          <h4>Social Media Marketing</h4>
        </div>
      </div>
      <div className='about-us-section'>
        <div className='aboutUs'>
          <h4>ABOUT US</h4>
          <h2>Boosts Your Business !</h2>
          <p className='abt-ph'>
            Global Outsource Hub’ has experience of many years in developing
            customised software of varying sizes and complexities.
          </p>
          <p className='abt-p'>
            Outsourcing will definitely help to save your time, your budget and
            will open doors to high level expertise overseas. Focus on the
            product improvement, marketing and etc… And meanwhile low cost and
            knowledgeable team will help to launch the product sooner.
          </p>
          <button className='btn1'>OUR SERVICES</button>
        </div>
        <img src={abtLogo} alt='' />
      </div>
      <div className='WVD-header'>
        <h4>WHAT WE DO </h4>
        <h2>Fresh Ideas for Every Business</h2>
      </div>
      <div className='WVD-section'>
        <img src={wvdLogo} alt='' />
        <div className='WVD-info'>
          <div className='WVD-info'>
            <h3>Creative Approach</h3>
            <p>
              Global Outsource Hub’ has all the skills & expertise required to
              win your business challenges & help you reach your full potential!
            </p>
          </div>
          <div className='WVD-info'>
            <h3>Guaranteed Success</h3>
            <p>
              We shall thrive to match smaller players with their bigger
              counterparts of their industry.
            </p>
          </div>
          <div className='WVD-info'>
            <h3>Business Growth</h3>
            <p>
              Our designers stay ahead of the curve to provide engaging and
              user-friendly website designs to make your business stand out.
            </p>
          </div>
        </div>
      </div>

      <div className='WCU-section'>
        <img src={wcuLogo} alt='' />

        <div className='WCU-info'>
          <div className='WCU-header'>
            <h4>WHY CHOOSE US </h4>
            <h2>Save Time & Effort With the GOH</h2>
          </div>
          <div className='WCU-infoi'>
            <h3>First Working Process</h3>
            <p>
              For startups and growing businesses, an online specialist can
              develop a digital marketing plan to help you grow.
            </p>
          </div>

          <div className='WCU-infoi'>
            <h3>Dedicated Team Member</h3>
            <p>
              Your digital consultant will also be able to kickstart campaigns
              and maximise your marketing budget.
            </p>
          </div>
          <div className='WCU-infoi'>
            <h3>24/7 Hours Support</h3>
            <p>Our expert team will be happy to help you any time, any day</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
