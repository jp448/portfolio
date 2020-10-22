import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";
import "./Navbar.css";
import PropTypes from 'prop-types';

class Navbar extends Component {
  render() {
    let pathname = this.props.location ? this.props.location.pathname : 'default';
    if (pathname === '/portfolio' || pathname === '/') {
        return (
            null
        );
    }
    return (
      <ul className='Navbar'>
        <li className="nav-item">
          <NavLink exact activeClassName='Navbar-active' to='/portfolio' className="custom-underline">
              Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName='Navbar-active' to='/projects' className="custom-underline">
              Projects
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName='Navbar-active' to='/education' className="custom-underline">
              Education
          </NavLink>
        </li>
        <li className="nav-item"> 
          <NavLink exact activeClassName='Navbar-active' to='/about' className="custom-underline">
              About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink exact activeClassName='Navbar-active' to='/contact' className="custom-underline">
              Contact
          </NavLink>
        </li>
      </ul>
    );
  }
}
export default Navbar;