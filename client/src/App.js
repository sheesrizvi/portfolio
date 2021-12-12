import React from 'react'
import { Container } from 'react-bootstrap'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import About from './pages/About'
import LoginScreen from './pages/LoginScreen'
// import Register from './pages/Register'
import Header from './components/Header'
import AppDev from './pages/AppDev'
import SeoServices from './pages/SeoServices'
import DigitalMarketing from './pages/DigitalMarketing'
import ContactUs from './pages/ContactUs'
import CartScreen from './pages/CartScreen'
import RegisterScreen from './pages/RegisterScreen'
import ShippingScreen from './pages/ShippingScreen'
import PaymentScreen from './pages/PaymentScreen'
import PlaceOrderScreen from './pages/PlaceOrderScreen'
import OrderScreen from './pages/OrderScreen'
import ProfileScreen from './pages/ProfileScreen'

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
      <Route path='/shipping' component={ShippingScreen} />
      <Route path='/cart/:id' component={CartScreen} />
      <Route path='/login' component={LoginScreen} />
      <Route path='/register' component={RegisterScreen} />
      <Route path='/payment' component={PaymentScreen} />
      <Route path='/placeorder' component={PlaceOrderScreen} />
      <Route path='/order/:id' component={OrderScreen} />
      <Route path='/profile' component={ProfileScreen} />
    </Router>
  )
}

export default App
