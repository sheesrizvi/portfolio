import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Header from './components/Header'
import AppDev from './pages/AppDev'
import SeoServices from './pages/SeoServices'
import DigitalMarketing from './pages/DigitalMarketing'
// import Home from "./pages/Home";
// import Services from "./pages/Services";

const App = () => {
  return (
    <Router>
      <Route path='/' component={Home} exact />
      <Route path='/about' component={About} />
      <Route path='/web-development' component={Services} />
      <Route path='/mobile-app-development' component={AppDev} />
      <Route path='/seo-services' component={SeoServices} />
      <Route path='/digital-marketing' component={DigitalMarketing} />
    </Router>
  )
  // }
  //       {/* <Header /> */}
  //         <Route path="/" component={Home} exact />
  //         <Route path="/services" component={Services} />
  //     </Router>
  //   );
}

export default App
