import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { NavLink } from 'react-router-dom'
// import { Map, GoogleApiWrapper } from 'google-maps-react'
import img1 from '../img/ContactUs/contacts_01-1.jpg'
import f1 from '../img/ContactUs/f1.png'
import f2 from '../img/ContactUs/f2.png'
import f3 from '../img/ContactUs/f3.png'
import f4 from '../img/ContactUs/f4.png'
import Map from '../components/Map'
// import Maps from '../components/Maps.js'

const ContactUs = () => {
  return (
    <main>
      {' '}
      <div className='service-page'>
        <Header />
        <div className='s-heading'>
          <h1>Contact Us</h1>
          <p>
            <NavLink to='/'>Home</NavLink> ➡ Contact Us
          </p>
        </div>
      </div>
      <div className='contact-us-s1'>
        <div className='contact-us-s1-heading'>
          <h6>BUSINESS</h6>
          <h3>Find the Perfect Solution for Your Business</h3>
          <p className='txt-responsive'>
            Global Outsource is a full-service Internet marketing and SEO
            company offering innovative web marketing solutions to mid to large
            size companies across the globe.
          </p>
        </div>
        <div className='contact-us-s1-img'>
          <img className="img-responsive" src={img1} />
        </div>
      </div>
      <div className='service-section3 contact-us-query'>
        <div className='contact-us-query-left'>
          <p>GET IN TOUCH</p>
          <h3>Contact Us</h3>
          <p>
            We have world-class, flexible support via live chat, email and
            phone. I guarantee that you’ll be able to have any issue resolved
            within 24 hours.
          </p>
        </div>
        <div className='section3-right contact-us-query-right'>
          <h3>Post your query</h3>
          <p>Programs provide patient peace mind when option.</p>
          <form className='analysis-form'>
            <input type='text' name='name' placeholder='Your Name*' />
            <input type='email' name='email' placeholder='Your email*' />
            <input type='text' name='phone' placeholder='Phone' />
            <input type='text' name='website' placeholder='Website*' />
            <input type='text' name='message' placeholder='Message' />
          </form>
          <button className='btn1'>SEND MESSAGE</button>
        </div>
      </div>
      <div className='contact-us-s3'>
        <h2>Global Presence & Contact Details</h2>
        <div className='contact-us-s3-info'>
          <div className='f1'>
            <img src={f1} alt='' />
            <h2>USA</h2>
            <h3>+1 612 9915022</h3>
          </div>
          <div className='f1'>
            <img src={f2} alt='' />
            <h2>UAE</h2>
            <h3>+971 585799495</h3>
          </div>
          <div className='f1'>
            <img src={f3} alt='' />
            <h2>UK</h2>
            <h3>+44 7481094940</h3>
          </div>
        </div>
      </div>
      <div className='map-section'>
        <Map />
      </div>
      <div className='news-letter'>
        <img src={f4} alt='' />
        <h2>Sign up for Newsletter</h2>
        <p>and receive 40% discount on first project</p>
      </div>
      <Footer />
    </main>
  )
}

export default ContactUs
