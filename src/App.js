import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import ContactUs from "./components/pages/ContactUs";
import Home from "./components/pages/Home";
import Portfolio from "./components/pages/Portfolio";
import Services from "./components/pages/Services";
import SignUp from "./components/pages/SignUp";

function App() {
  return (
    <>
      <Router basename="/~praptiankush-mane/client">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/services" exact component={Services} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/sign-up" exact component={SignUp} />
          <Route path="/contact-us" exact component={ContactUs} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
