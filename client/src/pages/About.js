import React from 'react'
import { NavLink } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import abtLogo from '../img/about_us_img_02-1.jpg'
import wvdLogo from '../img/about_us_img_01-1.png'
import wcuLogo from '../img/home_img-03-1.png'
import seoLogo from '../img/img_box_01-1.png'
import compLogo from '../img/img_box_02-1.png'
import marketLogo from '../img/img_box_03-1.png'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import test1 from '../img/Home/testimonial/Denis-Robinson-1-258x258.jpg'
import test2 from '../img/Home/testimonial/img_2-1-258x258.jpg'
import test3 from '../img/Home/testimonial/Silviia-Garden-1-258x258.jpg'
import comp1 from '../img/Home/company/accite-300x67.jpg'
import comp2 from '../img/Home/company/british.jpg'
import comp3 from '../img/Home/company/e2m2-300x65.jpg'
import comp4 from '../img/Home/company/atm-300x150.png'
import comp5 from '../img/Home/company/delhifoot.png'
import comp6 from '../img/Home/company/future-300x182.png'
import comp7 from '../img/Home/company/Market-Research-Statistics-Logo-300x134.png'
import comp8 from '../img/Home/company/oakwood-300x114.png'
import comp9 from '../img/Home/company/sunshine.png'
import comp10 from '../img/Home/company/tsunami-300x50.png'

const About = () => {
  const scsize = {
    0: {
      items: 1,
    },
    450: {
      items: 2,
    },
    1000: {
      items: 4,
    },
  }
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
          <div className='WVD-infoi'>
            <div style={{ width: 100, height: 100 }}>
              <CircularProgressbar value={76} text={`${76}%`} />
            </div>
            {/* <CircularProgressbar value={percentage} text={`${percentage}%`} />; */}
            <h3>Creative Approach</h3>
            <p>
              Global Outsource Hub’ has all the skills & expertise required to
              win your business challenges & help you reach your full potential!
            </p>
          </div>
          <div className='WVD-infoi'>
            <div style={{ width: 100, height: 100 }}>
              <CircularProgressbar
                value={89}
                // minValue={0}
                // maxValue={0}
                text={`${89}%`}
              />
            </div>
            <h3>Guaranteed Success</h3>
            <p>
              We shall thrive to match smaller players with their bigger
              counterparts of their industry.
            </p>
          </div>
          <div className='WVD-infoi'>
            <div style={{ width: 100, height: 100 }}>
              <CircularProgressbar
                value={75}
                // minValue={0}
                // maxValue={0}
                text={`${75}%`}
              />
            </div>
            <h3>Business Growth</h3>
            <p>
              Our designers stay ahead of the curve to provide engaging and
              user-friendly website designs to make your business stand out.
            </p>
          </div>
        </div>
      </div>
      <div className='about-us-section-3'>
        <div className='about-us-s3-heading'>
          <p>OUR STORY</p>
          <h2>The Story of Global Outsource Hub</h2>
          <p>
            Our success has us leading the pack amongst our competitors with our
            ability to anticipate change and innovation.
          </p>
        </div>
        <div className='about-us-s3-cards-wrapper'>
          <div className='year-c'>
            <div className='year yd1'>2015</div>
            <div className='circle-wrapper c11'></div>
            <div className='y-content y1'>
              <h5>Project Idea</h5>
              <p>Maecenas elementum sapien in metus placerat finibus.</p>
            </div>
          </div>
          <div className='year-c'>
            <div className='y-content y2'>
              <h5>Business Conception</h5>
              <p>Maecenas elementum sapien in metus placerat finibus.</p>
            </div>
            <div className='circle-wrapper c22'></div>
            <div className='year yd2'>2016</div>
          </div>
          <div className='year-c'>
            <div className='year yd3'>2017</div>
            <div className='circle-wrapper c33'></div>
            <div className='y-content y3'>
              <h5>Legal Review</h5>
              <p>Maecenas elementum sapien in metus placerat finibus.</p>
            </div>
          </div>
          <div className='year-c'>
            <div className='y-content y4'>
              <h5>Infrastucture Design</h5>
              <p>Maecenas elementum sapien in metus placerat finibus.</p>
            </div>
            <div className='circle-wrapper c44'></div>
            <div className='year yd4'>2018</div>
          </div>
          <div className='year-c'>
            <div className='year yd5'>2019</div>
            <div className='circle-wrapper c55'></div>
            <div className='y-content y5'>
              <h5>Company Established</h5>
              <p>Maecenas elementum sapien in metus placerat finibus.</p>
            </div>
          </div>
        </div>
      </div>

      <div className='WCU-section'>
        <img className='wcu-img' src={wcuLogo} alt='' />

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
      <div className='homeSection-5 home5top'>
            <div className='service-head w-30'>
              <h5>Testimonials</h5>
              <h3 className='mb-4'>What our Client's say</h3>
              <OwlCarousel
                className='owl-theme'
                items={1}
                autoplay
                loop
                margin={10}
              >
                <div>
                  <img
                    className='img rounded-circle mx-auto'
                    style={{ width: '120px' }}
                    src={test1}
                  />
                  <div className='my-3 cstmr'>
                    This company helped me a lot to increase my brand awareness
                    and promote my products and services. Its team guided me to
                    improve brand loyalty. I really appreciate with work done by
                    the team.
                  </div>
                  <div className='mt-3'>
                    Tommy Dents
                    <p className='cstmr'>Customer</p>
                  </div>
                </div>
                <div>
                  <img
                    className='img rounded-circle mx-auto'
                    style={{ width: '120px' }}
                    src={test2}
                  />
                  <div className='my-3 cstmr'>
                    Time delivery services! Affordable &amp; Discounts offers on
                    special deals! Great improvement and complete satisfaction.
                    Supportive and manageable work strategy. I positively
                    recommend this company for web development services.
                  </div>
                  <div className='mt-3'>
                    Dennis Robinson
                    <p className='cstmr'>Customer</p>
                  </div>
                </div>
                <div>
                  <img
                    className='img rounded-circle mx-auto'
                    style={{ width: '120px' }}
                    src={test3}
                  />
                  <div className='my-3 cstmr'>
                    Get up to the mark digital marketing Services done by Global
                    Outsource Hub team who is very professional and experienced
                    in their work. They understand each and everything very
                    carefully and provide the best suggestion for the growth of
                    the business. I really appreciate them. Great Experience
                  </div>
                  <div className='mt-3'>
                    Silvia Garden
                    <p className='cstmr'>Customer</p>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
          <div className='company'>
            <div className='homeSection-5 home5top'>
              <OwlCarousel
                className='owl-theme'
                responsive={scsize}
                autoplay
                loop
                margin={50}
              >
                <div className='cmpny-item'>
                  <img className='imgcm' src={comp1} />
                </div>
                <div className='cmpny-item'>
                  <img className='imgcm' src={comp2} />
                </div>
                <div className='cmpny-item'>
                  <img className='imgcm' src={comp3} />
                </div>
                <div className='cmpny-item'>
                  <img className='imgcm' src={comp4} />
                </div>
                <div className='cmpny-item'>
                  <img className='imgcm' src={comp5} />
                </div>
                <div className='cmpny-item'>
                  <img className='imgcm' src={comp6} />
                </div>
                <div className='cmpny-item'>
                  <img className='imgcm' src={comp7} />
                </div>
                <div className='cmpny-item'>
                  <img className='imgcm' src={comp8} />
                </div>
                <div className='cmpny-item'>
                  <img className='imgcm' src={comp9} />
                </div>
                <div className='cmpny-item'>
                  <img className='imgcm' src={comp10} />
                </div>
              </OwlCarousel>
            </div>
          </div>
      <Footer />
    </div>
  )
}

export default About
