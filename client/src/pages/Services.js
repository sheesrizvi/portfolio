import {React, useState, useEffect} from 'react'
import axios from 'axios'
import Product from '../components/Product'

import Header from '../components/Header'
import services_img1 from '../img/service/services_img1.png'
import services_img2 from '../img/service/services_img2.png'
import services_img3 from '../img/service/services_img3.png'

const Services = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchProducts = async () => {
      const {data} = await axios.get('/api/products')
      setProducts(data)
    }
    fetchProducts()
  })
  
  return (
    <main>
      <div className='service-page'>
        <Header />
        <div className='s-heading'>
          <h1>Web Development</h1>
        </div>
      </div>
      <div className='service-section1'>
        <div>
          <img src={services_img1} />
        </div>
        <div className='section1-right'>
          <p>Best for You</p>
          <h2>Boosts Your Website Traffic!</h2>
          <p>
            A website is a brand touchpoint, a business tool, and a place to
            drive critical conversions. A great website can be an engine of
            business growth. A poor site can inflict damage on your brand.
          </p>
          <p>
            The first key deliverable is a sitemap, which shows the structure
            and hierarchy of the site’s pages. Next come wireframes –
            low-fidelity, black and white designs that show each page template’s
            essential structure.
          </p>
        </div>
      </div>
      <br />
      <br />
      <br />
      <div className='service-section1'>
        <div className='section1-right'>
          <p>Why choose us</p>
          <h2>Outstanding Digital Experience</h2>

          <p>
            Put the needs of the site’s users first. If you don’t know what
            users’ needs are, ask them. As a user-centered agency, this
            principle is the foundation of everything we create.
          </p>
          <p>
            A great website has beauty and brains. Naturally, it should look
            good. But it also needs to be built with a clear view of its most
            important goals and conversion points.
          </p>
          <p>
            A site must be designed in such a way that people can find it – and
            that starts with visibility to search engines.
          </p>
        </div>
        <div>
          <img src={services_img2} />
        </div>
      </div>

      <div>Our Process</div>
      <div className='pricing'>
        <p>PRICING PLANS</p>
        <h2>The Best Solutions for Our Clients</h2>
        <div className='wrapper'>
          {products.map((product) => (
            <Product product={product} />
          ))}
        </div>
      </div>
      <div className='service-section3'>
        <div>
          <img className='ss3-img' src={services_img3} />
        </div>
        <div className='section3-right'>
          <p>Analysis</p>
          <h2>Get Free Analysis?</h2>
          <form className='analysis-form'>
            <input type='text' name='name' placeholder='Your Name*' />
            <input type='email' name='email' placeholder='Your email*' />
            <input type='text' name='phone' placeholder='Phone' />
            <input type='text' name='website' placeholder='Website*' />
          </form>
        </div>
      </div>
    </main>
  )
}

export default Services
