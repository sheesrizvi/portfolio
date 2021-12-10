import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import Login from './pages/Login'
import Register from './pages/Register'
import Header from './components/Header'
import AppDev from './pages/AppDev'
import SeoServices from './pages/SeoServices'
import DigitalMarketing from './pages/DigitalMarketing'
import ContactUs from './pages/ContactUs'
import CartScreen from './pages/CartScreen'
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
      <Route path='/contact-us' component={ContactUs} />
      {/* <Route path='/services' component={Services} /> */}
      <Route path='/login' component={Login} />
      <Route path='/register' component={Register} />
      <Route path='/cart' component={CartScreen} />
    </Router>
  )
}

export default App
