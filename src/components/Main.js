import React from "react";
import NavbarTop from "./Navbar";
import Home from "./Home";
import About from "./About";
import Works from "./Works";
import Contact from "./Contact";
import Footer from "./Footer";

import {Container} from "react-bootstrap";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

export default function Main() {
  return (
    <Router>
      <Container fluid className="mainContainer overflow-hidden">
        <NavbarTop />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/works">
            <Works />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
}
