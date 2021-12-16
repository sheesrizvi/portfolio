import React from 'react'
import { Card, Button } from 'react-bootstrap'
import Header from '../components/Header'
import app2 from '../img/Appdev/app2.jpg'
import app3 from '../img/Appdev/app3.png'
import app4 from '../img/Appdev/app4.png'
import chek1 from '../img/Appdev/chek_b-1.png'
import chek2 from '../img/Appdev/chek_o-1.png'
import chek3 from '../img/Appdev/chek_g-1.png'
import seoLogo from '../img/img_box_01-1.png'
import compLogo from '../img/img_box_02-1.png'
import marketLogo from '../img/img_box_03-1.png'
import services_img3 from '../img/service/services_img3.png'
import Footer from '../components/Footer'
import ahimg from '../img/Appdev/app1.png'

const AppDev = () => {
  return (
    <main className='adevw'>
      <div className='app-service-page'>
        <Header />
        <div className='app-heading'>
          <div className='ah-info'>
            <h3>WELCOME</h3>
            <h1>
              {' '}
              Maximize Your <span>Visibility</span>
            </h1>
            <p>
              We design and develop custom mobile application for iOS and
              Android platforms.
            </p>
          </div>
          <div className='ah-img'>
            <img src={ahimg} className='ahimg' alt='' />
          </div>
        </div>
      </div>
      <h2 className='app-service-head'>
        <p>CARE FEATURES</p>
        <h2>Provide Awesome Service With Our Tools</h2>
      </h2>
      <div className='app-cards-section ap3'>
        <div className='app-card card1'>
          <img className='abt-img' src={seoLogo} alt='' />
          <h4>Android App Development</h4>
          <p>
            Using latest technology and industry experience, our full-stack
            Android developers develop successful Android apps
          </p>
        </div>
        <div className='app-card card2'>
          <img className='abt-img' src={compLogo} alt='' />
          <h4>iPhone App Development</h4>
          <p>
            We know what it requires to make a perfect iPhone application as we
            have already developed over 2500 iPhone apps of different categories
          </p>
        </div>
        <div className='app-card card3'>
          <img className='abt-img' src={marketLogo} alt='' />
          <h4>Cross-platform Mobile Apps</h4>
          <p>
            Here, we have expertise in creating multi-platform mobile app
            solutions for both Android and iOS devices.
          </p>
        </div>
      </div>
      <div className='app-service-section1'>
        <div>
          <img className='as1-img' src={app2} />
        </div>
        <div className='app-section1-right'>
          <p>ABOUT US</p>
          <h2>Boosts Your Business Traffic!</h2>
          <p>
            Android can set you far ahead of competitors, embracing the 51.5% of
            mobile users in love with the operating system.
          </p>
          <p>
            Android growth is continually skyrocketing, quickly catching the
            explosive growth of the iPhone’s iOS, but many companies are slow to
            the punch when it comes to building quality Android apps.
          </p>
          <button className='btn1'>About Us</button>
        </div>
      </div>
      <div className='app-service-section2 WCU-section'>
        <div className='app-WCU-info'>
          <div className='app-WCU-header'>
            <h4>WHY CHOOSE US </h4>
            <h2>Outstanding Digital Experience</h2>
            <p>
              Global Outsource Hub delivers premium-quality applications that
              put the core of our talent in your customer’s hands.
            </p>
          </div>
          <div className='app2-info WCU-infoi'>
            {/* <h3>First Working Process</h3> */}{' '}
            <img className='check-img' src={chek1} alt='' />
            <p>
              Android and iOS apps with the growing Windows Mobile platform
              windows Phone is slowly gaining traction among users and hardware
              manufacturers.
            </p>
          </div>

          <div className='app2-info WCU-infoi'>
            {/* <h3>Dedicated Team Member</h3> */}
            <img className='check-img' src={chek2} alt='' />
            <p>
              The operating system has seen a slew of updates with increasingly
              mature functionality.
            </p>
          </div>
          <div className='app2-info WCU-infoi'>
            {/* <h3>24/7 Hours Support</h3> */}{' '}
            <img className='check-img' src={chek3} alt='' />
            <p>
              Most think of Android development as a secondary task, but at
              Global Outsource Hub, we see Android as a new medium to showcase
              you.
            </p>
          </div>
          <button className='btn1'>DISCOVER MORE</button>
        </div>

        <img className='wcus-img' src={app3} alt='' />
      </div>
      <div className='app-service-section1'>
        <div>
          <img className='as3-img' src={app4} />
        </div>
        <div className='app-section1-right'>
          <p>CREATIVITY</p>
          <h2>Best APP Development Company</h2>
          <p>
            From concept to application software development, GOH covers the
            entire mobile app development cycle, no matter how diverse or
            complex your needs are. Our ability to meet your needs stem from our
            team of experts, who have years of experience in global app solution
            services and product engineering industries.
          </p>

          <div className='app2-info WCU-infoi'>
            {/* <h3>First Working Process</h3> */}{' '}
            <img className='check-img' src={chek2} alt='' />
            <p>
              We have a team of 100+ associates (UI/UX designers, mobile app
              developers, and quality analysts) in our work centers to deliver
              strategically designed and creatively crafted mobile application
              development services
            </p>
          </div>

          <div className='app2-info WCU-infoi'>
            {/* <h3>Dedicated Team Member</h3> */}
            <img className='check-img' src={chek3} alt='' />
            <p>
              Most think of Android development as a secondary task, but at
              Global Outsource Hub, we see Android as a new medium to showcase
              you.
            </p>
          </div>
          <button className='btn1'>DISCOVER MORE</button>
        </div>
      </div>
      <div className='service-section3'>
        <div>
          <img src={services_img3} />
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
      <Footer />
    </main>
  )
}

export default AppDev
