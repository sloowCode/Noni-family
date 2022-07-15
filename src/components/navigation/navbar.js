import React from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBIcon,
} from "mdbreact";

import { Link, NavLink, withRouter } from "react-router-dom";

const Navbar = (props) => {
  return (
    <MDBNavbar color="white" expand="md" className="navbar " fixed="top">
      <div className="container-fluid text-center nav-content">
        <MDBNavbarNav className="links" right>
          <MDBNavItem>
            <MDBNavLink to="/" className=" font-weight-bold link">
              Home
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/product" className=" font-weight-bold link">
              Products
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink to="/about" className=" font-weight-bold link">
              About
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>

        <MDBNavbarBrand>
          <a href="">
            <img
              src="/images/logo.png"
              width=""
              className="img-fluid logo"
            ></img>
          </a>
        </MDBNavbarBrand>

        <MDBNavbarNav className="links" left>
          <MDBNavItem active>
            <MDBNavLink to="/whynoni" className=" font-weight-bold link">
              Why Noni
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem active>
            <MDBNavLink to="/contact" className=" font-weight-bold link">
              Contact
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem active>
            <MDBNavLink to="/blog" className=" font-weight-bold link">
              Blog
            </MDBNavLink>
          </MDBNavItem>
        </MDBNavbarNav>
      </div>
    </MDBNavbar>
  );
};
export default withRouter(Navbar);
