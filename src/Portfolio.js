import React, { Component } from "react";
import Navbar from "./Navbar";
import "./Portfolio.css";

class Portfolio extends Component {  
  render() {
    return (
      <div className='Portfolio'>
          <div className="header">
              <h2 className="header-item highlight">
                <span className="hvr-skew-backward">&lt;</span>
                <span className="hvr-skew-backward">&lt;</span>
                <span className="hvr-skew-backward">&lt;</span>
                <span className="hvr-skew-backward">&lt;</span>
                <span className="hvr-skew-backward">&lt;</span>
                <span className="hvr-skew-backward">&lt;</span>
              </h2>
              <h2 className="header-item">Jocelyn</h2>
              <h2 className="header-item">Proctor</h2>
              <h2 className="header-item highlight">
                <span className="hvr-skew-backward">/</span>
                <span className="hvr-skew-backward">&gt;</span>
                <span className="hvr-skew-backward">&gt;</span>
                <span className="hvr-skew-backward">&gt;</span>
                <span className="hvr-skew-backward">&gt;</span>
                <span className="hvr-skew-backward">&gt;</span>
                <span className="hvr-skew-backward">&gt;</span>
              </h2>
          </div>
          <h1 className="main-header">WebWorks</h1>
          <Navbar menu={this.props.menu} />
      </div>
    );
  }
}

export default Portfolio;