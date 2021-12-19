import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import s1 from '../img/DigitalMarketing/s1-img.png'
import s2 from '../img/DigitalMarketing/s2-img.png'
import s3 from '../img/DigitalMarketing/s3.png'
import mail_img from '../img/DigitalMarketing/mail-img.png'
import s2c1 from '../img/DigitalMarketing/s2-1.png'
import s2c2 from '../img/DigitalMarketing/s2-2.png'
import { NavLink } from 'react-router-dom'

const DigitalMarketing = () => {
  return (
    <main>
      {' '}
      <div className='service-page'>
        <Header />
        <div className='s-heading'>
          <h1>Digital Marketing</h1>
          <p>
            <NavLink to='/'>Home</NavLink> ➡ Digital Marketing
          </p>
        </div>
      </div>
      <div className='dm-s1'>
        <div className=''>
          <img src={s1} alt='' />
        </div>
        <div className='section1-right'>
          <div className='heading'>
            {' '}
            <p>WHAT WE DO</p>
            <h2>We Provided Best Digital Marketing</h2>
          </div>
          <div className='dm-s1-info'>
            <div className='dm-s1-c'>
              <p className='dm-s1-num'>01.</p>
              <h4>DIGITAL MARKETING AUDIT</h4>
              <p>
                With your permission, we’ll access your analytics data and
                analyse it to identify how your website and online channels have
                contributed to your business
              </p>
            </div>
            <div className='dm-s1-c'>
              <p className='dm-s1-num'>02.</p>
              <h4>COMPETITOR ANALYSIS</h4>
              <p className='dm-s1-p'>
                It’s important to know what your marketplace looks like in order
                to ascertain where the opportunities lie. This means reviewing
                your competitors.
              </p>
            </div>
            <div className='dm-s1-c'>
              <p className='dm-s1-num'>03.</p>
              <h4>STRATEGIC RECOMMENDATIONS</h4>
              <p>
                We’ll combine all of this with our combined experience of over
                10 years to recommend a digital marketing strategy for you.
              </p>
            </div>
            <div className='dm-s1-c'>
              <p className='dm-s1-num'>04.</p>
              <h4>AUDIENCE DEVELOPMENT</h4>
              <p>
                If your business is already performing well in terms of core
                keyword targeting and gaining good traction amongst the existing
                audience.
              </p>
            </div>
          </div>
          <button className='btn1'>CONTACT US</button>
        </div>
      </div>
      <div className='dm-s2'>
        <div className='dm-s2-left-info'>
          <div className='dm-s2-heading'>
            <h5>HOW IT WORKS</h5>
            <h3>We are Exclusive Solution Agency</h3>
            <p>
              We’ve worked with businesses just like yours to set a strategic
              direction for their digital marketing and outline the key tasks
              and activities that help them reach their goals.
            </p>
          </div>
          <div className='dm-s2-cards'>
            <div>
              <img src={s2c1} alt='' />
              <h5>Media Promotion</h5>
              <p>
                Campaigns initiated by GOH can and will drive lead and sales and
                this is what matters to businesses.
              </p>
            </div>
            <div>
              <img src={s2c2} alt='' />
              <h5>Infographics Content</h5>
              <p>
                Our team of creative graphic designers will work closely with
                you to develop images and graphics that truly reflect your
                brand.
              </p>
            </div>
          </div>
          <button className='btn1 '>DISCOVER MORE</button>
        </div>
        <div className='dm-s2-img'>
          <img src={s2} alt='' />
        </div>
      </div>
      <div className='service-section3'>
        <div className='section3-right'>
          <img src={mail_img} className='mail-img' />
          <p>CONTACT US</p>
          <h2>Drop Us a Line</h2>
          <form className='analysis-form'>
            <input type='text' name='name' placeholder='Your Name*' />
            <input type='email' name='email' placeholder='Your email*' />
            <input type='text' name='phone' placeholder='Phone' />
            <input type='text' name='website' placeholder='Website*' />
          </form>
          <button className='btn2'>CHECK NOW</button>
        </div>
        <div>
          <img src={s3} className='dm-s3-img' />
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default DigitalMarketing
