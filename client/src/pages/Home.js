import React from 'react'
import Typewriter from 'typewriter-effect'
import Card1 from '../components/Card'
import Footer from '../components/Footer'
import Header from '../components/Header'
import prLogo from '../img/pr.png'
import dbms from '../img/dbms.png'
import product from '../img/product.png'
import seo from '../img/seo.png'
import pfLogo1 from '../img/service/portfolio_img_01-1-670x485.jpg'
import pfLogo2 from '../img/service/portfolio_img_02-1-670x485.jpg'

const Home = () => {
  return (
    <main>
      <div className='home-page'>
        <Header />
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
          <h2 className='service-head'>
            Provide Awesome Service With Our Tools
          </h2>
          <div className='homeSection1'>
            <div className='c1'>
              <h3>Online Public Relations</h3>
              <img src={prLogo} alt='' />
              <p>DISCOVER, EXPLORE & UNDERSTANDING THE PRODUCT</p>
            </div>
            <div className='c1'>
              <h3>Database Management</h3>
              <img src={dbms} alt='' />
              <p>DATABASE MANAGEMENT</p>
            </div>
            <div className='c1'>
              <h3>Product UX, Design & Development</h3>
              <img src={product} alt='' />
              <p>DIGITAL PRODUCT UX, DESIGN & DEVELOPMENT</p>
            </div>
            <div className='c1'>
              <h3>Marketing Strategy & SEO Campaigns</h3>
              <img src={seo} alt='' />
              <p>MARKETING STRATEGY & SEO CAMPAIGNS</p>
            </div>
          </div>

          {/* <div className='wrapper service-wrapper'>
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
          </div> */}

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
                <div className='line' />
                <div className='cs-p'>
                  We are experts with an extreme focus on Quality of Work we do!
                </div>
              </div>
              <div className='contribution-section'>
                <div className='cs-i'>
                  <h1>250+ </h1>
                  <p>Business partners</p>
                </div>
                <div className='line' />
                <div className='cs-p'>
                  We are experts with an extreme focus on Quality of Work we do!
                </div>
              </div>
              <div className='contribution-section'>
                <div className='cs-i'>
                  <h1>100+ </h1>
                  <p>Business partners</p>
                </div>
                <div className='line' />
                <div className='cs-p'>
                  One Stop vendor for Design, Programming & Flash with extensive
                  skills in web programming & application development.
                </div>
              </div>
            </div>
          </div>
          <div className='exp-section'>
            <div className='get-in-touch'>
              <p>📱</p>
              <h1>Expand Your Digital Presence</h1>
              <p>
                Global Outsourse Hub gives you the best solution for business
              </p>
              <button className='btn1'>GET IN TOUCH➡</button>
            </div>
            <div className='tech-depth'>
              <h3>EXPERIENCE</h3>
              <h2>Technical Depth Know-How</h2>
              <p>
                Global Outsource Hub stays ahead of the curve with digital
                marketing trends. Our success has us leading the pack amongst
                our competitors with our ability to anticipate change and
                innovation.
              </p>
              <button className='btn1'>Discover More</button>
            </div>
          </div>
          <div className='outsourcing-section'>
            <div className='tech-depth'>
              <h3>OUTSOURCING</h3>
              <h2>Leading Business Expert</h2>
              <p>
                Outsourcing as an idea is not novice; it has been for over a
                thousand years now, the only difference being that it’s gaining
                lot more popularity since a decade for whatever reasons.
                Outsourcing basically means asking a third-party vendor to work
                for you on a contractual basis.
              </p>
              <button className='btn1'>Discover More</button>
            </div>
            <div className='get-in-touch'>
              <p>💡</p>
              <h1>Have a project in mind? Let’s get to work.</h1>
              <p>
                Have a project in mind? Let’s get to work. Find out how it works
                and ask any questions you may have.
              </p>
              <button className='btn1'>GET IN TOUCH➡</button>
            </div>
          </div>
          <div className='homeSection-5'>
            <div className='service-head'>
              <p>FEATURED PROJECTS</p>
              <h2>Our Case Studies</h2>
            </div>
            <div className='case-carousel'>
              <div className='c2'>
                <img src={pfLogo1} alt='' />
              </div>
              <div className='c2'>
                <img src={pfLogo2} alt='' />
              </div>
              <div className='c2'>
                <img src={pfLogo1} alt='' />
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}

export default Home
