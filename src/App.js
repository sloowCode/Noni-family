import React, { Component } from "react";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdbreact";
import LandingPage from "./pages/landing";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import BlogPage from "./pages/blog";
import ProductPage from "./pages/product";
import WhynoniPage from "./pages/whynoni";
import { BrowserRouter, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/product" component={ProductPage} />
            <Route path="/whynoni" component={WhynoniPage} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
