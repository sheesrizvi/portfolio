import React from "react";
import Typewriter from "typewriter-effect";
import Card1 from "../components/Card";
import Footer from "../components/Footer";
import Header from "../components/Header";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import prLogo from "../img/pr.png";
import dbms from "../img/dbms.png";
import product from "../img/product.png";
import seo from "../img/seo.png";
import pfLogo1 from "../img/service/portfolio_img_01-1-670x485.jpg";
import pfLogo2 from "../img/service/portfolio_img_02-1-670x485.jpg";
import pfLogo3 from "../img/service/portfolio_img_05-1-670x485.jpg";
import test1 from "../img/Home/testimonial/Denis-Robinson-1-258x258.jpg";
import test2 from "../img/Home/testimonial/img_2-1-258x258.jpg";
import test3 from "../img/Home/testimonial/Silviia-Garden-1-258x258.jpg";
import comp1 from "../img/Home/company/accite-300x67.jpg";
import comp2 from "../img/Home/company/british.jpg";
import comp3 from "../img/Home/company/e2m2-300x65.jpg";
import comp4 from "../img/Home/company/atm-300x150.png";
import comp5 from "../img/Home/company/delhifoot.png";
import comp6 from "../img/Home/company/future-300x182.png";
import comp7 from "../img/Home/company/Market-Research-Statistics-Logo-300x134.png";
import comp8 from "../img/Home/company/oakwood-300x114.png";
import comp9 from "../img/Home/company/sunshine.png";
import comp10 from "../img/Home/company/tsunami-300x50.png";
import { NavLink } from "react-router-dom";
const Home = () => {
  
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
    <main>
      <div className="home-page">
        <Header />
        <div className="welcome-section">
          <h2>WELCOME</h2>
          <h1>
            Global Outsource Hub
            <Typewriter
              onInit={(typewriter) => {
                setInterval(() => {
                  typewriter
                    .typeString("for business")
                    .pauseFor(1000)
                    .deleteAll()
                    .typeString("for your ideas")
                    .deleteAll()
                    .start();
                }, 2000);
              }}
            />
          </h1>
          <p>
            Global Outsource Hub is a full-service Internet marketing and SEO
            company offering innovative web marketing solutions to mid to large
            size companies across the globe
          </p>
          <button className="btn1 contact-btn"><NavLink to='/contact-us'>CONTACT TODAY</NavLink></button>
        </div>

        <div className="service-section">
          <h2 className="service-head">
            Provide Awesome Service With Our Tools
          </h2>
          <div className="homeSection1">
            <div className="c1">
              <h3>Online Public Relations</h3>
              <img src={prLogo} alt="" />
              <p>DISCOVER, EXPLORE & UNDERSTANDING THE PRODUCT</p>
            </div>
            <div className="c1">
              <h3>Database Management</h3>
              <img src={dbms} alt="" />
              <p>DATABASE MANAGEMENT</p>
            </div>
            <div className="c1">
              <h3>Product UX, Design & Development</h3>
              <img src={product} alt="" />
              <p>DIGITAL PRODUCT UX, DESIGN & DEVELOPMENT</p>
            </div>
            <div className="c1">
              <h3>Marketing Strategy & SEO Campaigns</h3>
              <img src={seo} alt="" />
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

          <div className="why-us-section">
            <div className="why-info">
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
              <button className="btn1"><NavLink to='/about'>Discover More</NavLink></button>
            </div>
            <div className="number-section">
              <div className="contribution-section">
                <div className="cs-i">
                  <h1>25+ </h1>
                  <p>Business partners</p>
                </div>
                <div className="line" />
                <div className="cs-p">
                  We are experts with an extreme focus on Quality of Work we do!
                </div>
              </div>
              <div className="contribution-section">
                <div className="cs-i">
                  <h1>250+ </h1>
                  <p>Business partners</p>
                </div>
                <div className="line" />
                <div className="cs-p">
                  We are experts with an extreme focus on Quality of Work we do!
                </div>
              </div>
              <div className="contribution-section">
                <div className="cs-i">
                  <h1>100+ </h1>
                  <p>Business partners</p>
                </div>
                <div className="line" />
                <div className="cs-p">
                  One Stop vendor for Design, Programming & Flash with extensive
                  skills in web programming & application development.
                </div>
              </div>
            </div>
          </div>
          <div className="exp-section">
            <div className="get-in-touch">
              <p>📱</p>
              <h1>Expand Your Digital Presence</h1>
              <p>
                Global Outsourse Hub gives you the best solution for business
              </p>
              <button className="btn1"><NavLink to='/contact-us'>GET IN TOUCH➡</NavLink></button>
            </div>
            <div className="tech-depth">
              <h5>EXPERIENCE</h5>
              <h2>Technical Depth Know-How</h2>
              <p>
                Global Outsource Hub stays ahead of the curve with digital
                marketing trends. Our success has us leading the pack amongst
                our competitors with our ability to anticipate change and
                innovation.
              </p>
              <h4>WordPress, PHP</h4>
              <div className="progress" style={{ height: "8px" }}>
                <div
                  className="progress-bar progress-bar-striped bg-warning progress-bar-animated"
                  role="progressbar"
                  style={{ width: "90%" }}
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  90%
                </div>
              </div>
              <h4 className="mt-4">React Native</h4>
              <div className="progress" style={{ height: "8px" }}>
                <div
                  className="progress-bar progress-bar-striped bg-warning progress-bar-animated"
                  role="progressbar"
                  style={{ width: "79%" }}
                  aria-valuenow="79"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  79%
                </div>
              </div>
              <h4 className="mt-4">Node JS</h4>
              <div className="progress" style={{ height: "8px" }}>
                <div
                  className="progress-bar progress-bar-striped bg-warning progress-bar-animated"
                  role="progressbar"
                  style={{ width: "95%" }}
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  95%
                </div>
              </div>
              <button className="btn1"><NavLink to='/about'>Discover More</NavLink></button>
            </div>
          </div>
          <div className="outsourcing-section">
            <div className="tech-depth touch1">
              <h3>OUTSOURCING</h3>
              <h2>Leading Business Expert</h2>
              <p>
                Outsourcing as an idea is not novice; it has been for over a
                thousand years now, the only difference being that it’s gaining
                lot more popularity since a decade for whatever reasons.
                Outsourcing basically means asking a third-party vendor to work
                for you on a contractual basis.
              </p>
              <button className="btn1"><NavLink to='/about'>Discover More</NavLink></button>
            </div>
            <div className="get-in-touch touch">
              <p>💡</p>
              <h1>Have a project in mind? Let’s get to work.</h1>
              <p>
                Have a project in mind? Let’s get to work. Find out how it works
                and ask any questions you may have.
              </p>
              <button className="btn1"><NavLink to='/contact-us'>GET IN TOUCH➡</NavLink></button>
            </div>
          </div>
          <div className="homeSection-5">
            <div className="service-head">
              <p>FEATURED PROJECTS</p>
              <h2>Our Case Studies</h2>
            </div>
            {/* <div className='case-carousel'>
              
              <div className='c2'>
                <img src={pfLogo1} alt='' />
                <div className='c2-info'>
                  {' '}
                  <h5>Online Media Management</h5>
                  <p>Marketing</p>
                  <p>Read More</p>
                </div>
              </div>
              <div className='c2'>
                <img src={pfLogo2} alt='' />
                <div className='c2-info'>
                  {' '}
                  <h5>Mannix Marketing</h5>
                  <p>SEO</p>
                  <p>Read More</p>
                </div>
              </div>
              <div className='c2'>
                <img src={pfLogo3} alt='' />
                <div className='c2-info'>
                  {' '}
                  <h5>Online Media Management</h5>
                  <p>Marketing</p>
                  <p>Read More</p>
                </div>
              </div>
            </div> */}
            <div className="case-carousel">
              <OwlCarousel
                className="owl-theme"
                // items={3}
                autoplay
                loop
                margin={10}
                responsiveClass={true}
                responsive= {scsize}
              >
                <div>
                  <img className="img" src={pfLogo1} />{" "}
                  <div className="c2-info">
                    {" "}
                    <h5>Online Media Management</h5>
                    <p>Marketing</p>
                    <p>Read More</p>
                  </div>{" "}
                </div>
                <div>
                  <img className="img" src={pfLogo2} />
                  <div className="c2-info">
                    {" "}
                    <h5>Mannix Marketing</h5>
                    <p>SEO</p>
                    <p>Read More</p>
                  </div>
                </div>
                <div>
                  <img className="img" src={pfLogo3} />
                  <div className="c2-info">
                    {" "}
                    <h5>Online Media Management</h5>
                    <p>Marketing</p>
                    <p>Read More</p>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
          <div className="homeSection-5 home5top">
            <div className="service-head w-30">
              <h5>Testimonials</h5>
              <h3 className="mb-4">What our Client's say</h3>
              <OwlCarousel
                className="owl-theme"
                items={1}
                autoplay
                loop
                margin={10}
              >
                <div>
                  <img
                    className="img rounded-circle mx-auto"
                    style={{ width: "120px" }}
                    src={test1}
                  />
                  <div className="my-3 cstmr">
                    This company helped me a lot to increase my brand awareness
                    and promote my products and services. Its team guided me to
                    improve brand loyalty. I really appreciate with work done by
                    the team.
                  </div>
                  <div className="mt-3">
                    Tommy Dents
                    <p className="cstmr">Customer</p>
                  </div>
                </div>
                <div>
                  <img
                    className="img rounded-circle mx-auto"
                    style={{ width: "120px" }}
                    src={test2}
                  />
                  <div className="my-3 cstmr">
                    Time delivery services! Affordable &amp; Discounts offers on
                    special deals! Great improvement and complete satisfaction.
                    Supportive and manageable work strategy. I positively
                    recommend this company for web development services.
                  </div>
                  <div className="mt-3">
                    Dennis Robinson
                    <p className="cstmr">Customer</p>
                  </div>
                </div>
                <div>
                  <img
                    className="img rounded-circle mx-auto"
                    style={{ width: "120px" }}
                    src={test3}
                  />
                  <div className="my-3 cstmr">
                    Get up to the mark digital marketing Services done by Global
                    Outsource Hub team who is very professional and experienced
                    in their work. They understand each and everything very
                    carefully and provide the best suggestion for the growth of
                    the business. I really appreciate them. Great Experience
                  </div>
                  <div className="mt-3">
                    Silvia Garden
                    <p className="cstmr">Customer</p>
                  </div>
                </div>
              </OwlCarousel>
            </div>
          </div>
          <div className="company">
            <div className="homeSection-5 home5top">
              <OwlCarousel className="owl-theme" responsive={scsize} autoplay loop margin={50}>
                <div className="cmpny-item">
                  <img className="imgcm" src={comp1} />
                </div>
                <div className="cmpny-item">
                  <img className="imgcm" src={comp2} />
                </div>
                <div className="cmpny-item">
                  <img className="imgcm" src={comp3} />
                </div>
                <div className="cmpny-item"> 
                  <img className="imgcm" src={comp4} />
                </div>
                <div className="cmpny-item">
                  <img className="imgcm" src={comp5} />
                </div>
                <div className="cmpny-item">
                  <img className="imgcm" src={comp6} />
                </div>
                <div className="cmpny-item"> 
                  <img className="imgcm" src={comp7} />
                </div>
                <div className="cmpny-item">
                  <img className="imgcm" src={comp8} />
                </div>
                <div className="cmpny-item">
                  <img className="imgcm" src={comp9} />
                </div>
                <div className="cmpny-item">
                  <img className="imgcm" src={comp10} />
                </div>
              </OwlCarousel>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Home;
