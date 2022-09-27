import React, { Component } from "react";
import Navbar from "../components/navigation/navbar";
import AboutContent from "../components/contents/aboutcontent";
import Footer from "../components/navigation/footer";

class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <AboutContent />
        <Footer />
      </div>
    );
  }
}
export default About;
