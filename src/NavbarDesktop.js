import React, { Component } from "react";
import { NavLink } from "react-router-dom";
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
          <li className="nav-item"  key={p.key}>
          <NavLink exact activeClassName='Navbar-active' to={p.link} className="custom-underline">
            {p.name}
          </NavLink>
        </li>
        ))}
      </ul>
    );
  }
}
export default NavbarDesktop;