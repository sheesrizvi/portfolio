import React from 'react'
import Typewriter from 'typewriter-effect'
import Card1 from '../components/Card'
import Footer from '../components/Footer'
import dbms from '../img/dbms.png'
import product from '../img/product.png'
import seo from '../img/seo.png'

const Home = () => {
  return (
    <main>
      <div className='welcome-section'>
        <h2>WELCOME</h2>
        <h1>
          Global Outsource Hub
          <Typewriter
            onInit={(typewriter) => {
              setInterval(() => {
                typewriter
                  .typeString('for business')
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString('for your ideas')
                  .deleteAll()
                  .start()
              }, 2000)
            }}
          />
        </h1>
        <p>
          Global Outsource Hub is a full-service Internet marketing and SEO
          company offering innovative web marketing solutions to mid to large
          size companies across the globe
        </p>
        <button className='btn1 contact-btn'>CONTACT TODAY</button>
      </div>

      <div className='service-section'>
        <h2>Provide Awesome Service With Our Tools</h2>
        <div className='wrapper service-wrapper'>
          <Card1
            title='Database Management System'
            img={dbms}
            description='DATABASE MANAGEMENT'
          />
          <Card1
            title='Product UX'
            img={product}
            description='DIGITAL PRODUCT UX, DESIGN & DEVELOPMENT'
          />
          <Card1
            title='Marketing & SEO'
            img={seo}
            description='MARKETING STRATEGY & SEO CAMPAIGNS'
          />
        </div>
        <div className='why-us-section'>
          <div className='why-info'>
            <h3>WHY CHOOSE US</h3>
            <h2>Benefits of Outsourcing</h2>
            <p>
              One Stop vendor for Design, Programming & Flash with extensive
              skills in web programming & application development along with
              expertise in Online Media Marketing, PR, Back office and Finance
              related outsourcing. Our digital strategists have put together
              successful Internet marketing campaigns for businesses ranging
              from local coffee shops to publicly traded companies.
            </p>
            <button className='btn1'>Discover More</button>
          </div>
          <div className='number-section'>
            <div className='contribution-section'>
              <div className='cs-i'>
                <h1>25+ </h1>
                <p>Business partners</p>
              </div>
              <div className='cs-p'>
                We are experts with an extreme focus on Quality of Work we do!
              </div>
            </div>
            <div className='contribution-section'>
              <div className='cs-i'>
                <h1>25+ </h1>
                <p>Business partners</p>
              </div>
              <div className='cs-p'>
                We are experts with an extreme focus on Quality of Work we do!
              </div>
            </div>
            <div className='contribution-section'>
              <div className='cs-i'>
                <h1>25+ </h1>
                <p>Business partners</p>
              </div>
              <div className='cs-p'>
                We are experts with an extreme focus on Quality of Work we do!
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}

export default Home
