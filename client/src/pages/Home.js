import React from 'react'
import Typewriter from 'typewriter-effect'

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
        <button className='btn contact-btn'>CONTACT TODAY</button>
      </div>
    </main>
  )
}

export default Home
