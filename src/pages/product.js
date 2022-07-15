import React, { Component } from "react";
import Navbar from "../components/navigation/navbar";
import Productcontent from "../components/contents/productcontent";
import Footer from "../components/navigation/footer";

class Product extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Productcontent />
        <Footer />
      </div>
    );
  }
}

export default Product;
