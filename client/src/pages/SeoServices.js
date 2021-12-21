import React, {useState} from 'react'
import { Card, Button } from 'react-bootstrap'
import Footer from '../components/Footer'
import Header from '../components/Header'
import s1 from '../img/Seo/s1.png'
import services_img1 from '../img/service/services_img1.png'
import services_img2 from '../img/service/services_img2.png'
import services_img3 from '../img/service/services_img3.png'
import c1 from '../img/Seo/c1.png'
import c2 from '../img/Seo/c2.png'
import c3 from '../img/Seo/c3.png'
import c4 from '../img/Seo/c4.png'
import c5 from '../img/Seo/c5.png'
import c6 from '../img/Seo/c6.png'
import { NavLink } from 'react-router-dom'

const SeoServices = () => {
  const [status, setStatus] = useState('Submit')
  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('Sending...')
    const { name, email, message, phone, website } = e.target.elements
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
      phone: phone.value,
      website: website.value,
    }
    console.log(details)
    let response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(details),
    })
    setStatus('Submit')
    let result = await response.json()
    alert(result.status)
  }
  return (
    <main>
      <div className='service-page'>
        <Header />
        <div className='s-heading'>
          <h1>SEO Services</h1>
          <p>
            <NavLink to='/'>Home</NavLink> ➡ SEO Services
          </p>
        </div>
      </div>
      <div className='service-section1'>
        <div>
          <img src={s1} />
        </div>
        <div className='section1-right'>
          <p>OUR VISION</p>
          <h2>We Provide Best SEO Services</h2>
          <p>
            Our experienced team of SEO experts are constantly evaluating the
            ever changing algorithms of the search engines and because we stay
            on top we keep our clients on top! Choosing an SEO company is one of
            the most important decisions you will make for your business!
          </p>
          <ul className='seo-ul'>
            <li>Receive remarkable results</li>
            <li>Help them build their business</li>
            <li>Digital consultants</li>
            <button className='btn1'>GET IN TOUCH</button>
          </ul>
        </div>
      </div>
      <div className='seo-section2'>
        <div className='s2-heading'>
          <p>OUR SERVICES</p>
          <h1>How We Can Help?</h1>
        </div>
        <div className='s2-cards'>
          <div className='app-cards-section'>
            <div className='app-s2-c'>
              <div className='app-s2-imgs'>
                <img className='app-s2-imgs' src={c1} alt='' />
              </div>
              <div className='app-s2-cInfo'>
                <h4>Key Word Analysis</h4>
                <p>
                  Google and Overture offer keyword search tools that show you
                  which keywords are most highly searched for within your
                  specific niche and these can then be inserted into your
                  content.
                </p>
              </div>
            </div>
            <div className='app-s2-c'>
              <div className='app-s2-imgs'>
                <img className='app-s2-imgs' src={c2} alt='' />
              </div>
              <div className='app-s2-cInfo'>
                <h4>Social Media Marketing</h4>
                <p>
                  The goal of Global Outsource Hub Social Media Marketing
                  Services is to put your company on a certain position wherein
                  you can tap into the incredible two way relationship between
                  customers and businesses.
                </p>
              </div>
            </div>
            <div className='app-s2-c'>
              <div className='app-s2-imgs'>
                <img className='app-s2-imgs' src={c3} alt='' />
              </div>
              <div className='app-s2-cInfo'>
                <h4>Content Marketing & Development</h4>
                <p>
                  Content marketing's purpose is to attract and retain customers
                  by consistently creating and curating relevant and valuable
                  content with the intention of changing or enhancing consumer
                  behavior.
                </p>
              </div>
            </div>
            <div className='app-s2-c'>
              <div className='app-s2-imgs'>
                <img className='app-s2-imgs' src={c4} alt='' />
              </div>
              <div className='app-s2-cInfo'>
                <h4>Website Optimization</h4>
                <p>
                  You want to make your website search engine friendly and this
                  can be done through keyword analysis mentioned above, easy to
                  navigate site and a site that is clean to look at. Google has
                  no interest advertising messy websites that are impossible to
                  navigate.
                </p>
              </div>
            </div>
            <div className='app-s2-c'>
              <div className='app-s2-imgs'>
                <img className='app-s2-imgs' src={c5} alt='' />
              </div>
              <div className='app-s2-cInfo'>
                <h4>Bulk Email & SMS</h4>
                <p>
                  Bulk EMail & Bulk SMS Marketing has revolutionized over the
                  last decade or so. We are Static King, one of the leading
                  Email Service Providers of web solutions. No matter what your
                  products and services are.
                </p>
              </div>
            </div>
            <div className='app-s2-c'>
              <div className='app-s2-imgs'>
                <img className='app-s2-imgs' src={c6} alt='' />
              </div>
              <div className='app-s2-cInfo'>
                <h4>Link Competition Analysis</h4>
                <p>
                  We offer the ability to estimate just how many links it will
                  take to get your website into that sought after number 1 or 2
                  spot on Google Most of your competitors are focussing solely
                  on keyword optimization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='service-section3'>
        <div>
          <img src={services_img3} className='seo-s3-img' />
        </div>
        <div className='section3-right'>
          <p>Analysis</p>
          <h2>Get Free Analysis?</h2>
          <form onSubmit={handleSubmit}>
            <div className='analysis-form'>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Your Name*'
              />
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Your email*'
              />
              <input type='text' name='phone' id='phone' placeholder='Phone' />
              <input
                type='text'
                name='website'
                id='website'
                placeholder='Website*'
              />
              <input
                type='text'
                name='message'
                id='message'
                placeholder='Message'
              />
            </div>
            <button className='btn1' type='submit'>
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default SeoServices
