import React, {useState} from 'react'
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
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
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

const AppDev = () => {

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
      <div className='service-section3'>
        <div>
          <img src={services_img3} />
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

export default AppDev
