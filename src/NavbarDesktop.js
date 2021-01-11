import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import Fade from 'react-reveal/Fade';
import "./NavbarDesktop.css";

class NavbarDesktop extends Component {
  render() {
    let pathname = this.props.location ? this.props.location.pathname : 'default';
    if (pathname === '/portfolio' || pathname === '/' || pathname === '' ) {
        return (
            null
        );
    }
    return (
      <ul className='NavbarDesktop'>
        {this.props.menu.map(p => (
          <Fade top>
            <li className="nav-item"  key={p.key}>
              <NavLink exact activeClassName='Navbar-active' to={p.link} className="custom-underline">
                {p.name}
              </NavLink>
            </li>
          </Fade>
        ))}
      </ul>
    );
  }
}
export default NavbarDesktop;