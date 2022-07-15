import React, { Component } from "react";
import Navbar from "../components/navigation/navbar";
import Whynonicontent from "../components/contents/whynonicontent";
import Footer from "../components/navigation/footer";

class Whynoni extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Whynonicontent />
        <Footer />
      </div>
    );
  }
}

export default Whynoni;
