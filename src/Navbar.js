import React, { Component } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";
import "./Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <div className='desktop'>
          <NavbarDesktop menu={this.props.menu} location={this.props.location} />
        </div>
        <div className='mobile'>
          <NavbarMobile menu={this.props.menu} location={this.props.location} />
        </div>
      </div>
    );
  }
}
export default Navbar;