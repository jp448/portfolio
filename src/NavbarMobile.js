import React, { Component } from "react";
import { slide as Menu } from 'react-burger-menu'
import "./NavbarMobile.css";

class NavbarMobile extends Component {
  render() {
    let pathname = this.props.location ? this.props.location.pathname : 'default';
    if (pathname === 'default') {
        return (
            null
        );
    }
    return (
      <Menu>
        {this.props.menu.map(p => (
          <a id={p.name} key={p.name} className="menu-item" href={p.link} >{p.name} </a>
        ))}
      </Menu>
    );
  }
}
export default NavbarMobile;