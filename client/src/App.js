import React from "react";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Services from "./pages/Services";

const App = () => {
  return (
    <Router>
      <Header />
        <Route path="/" component={Home} exact />
        <Route path="/services" component={Services} />
    </Router>
  );
};

export default App;
