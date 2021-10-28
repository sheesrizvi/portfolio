import React from "react";
import Typewriter from "typewriter-effect";
import Card1 from "../components/Card"
import dbms from "../img/dbms.png"
import product from "../img/product.png"
import seo from "../img/seo.png"

const Home = () => {
  return (
    <main>
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
        <button className="btn1 contact-btn">CONTACT TODAY</button>
      </div>
     
      <div className="service">
        <h2>Provide Awesome Service With Our Tools</h2>
            <div className="wrapper">
              <Card1 title="Database Management System" img={dbms} description="DATABASE MANAGEMENT" />
              <Card1 title="Product UX" img={product} description="DIGITAL PRODUCT UX, DESIGN & DEVELOPMENT" />
              <Card1 title="Marketing & SEO" img={seo} description="MARKETING STRATEGY & SEO CAMPAIGNS" />
            </div>
      </div>
    </main>
  );
};

export default Home;
