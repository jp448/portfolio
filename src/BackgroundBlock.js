import React, { Component } from "react";
import "./BackgroundBlock.css";

class BackgroundBlock extends Component {
  render() {
    return <div className='BackgroundBlock'>{this.props.children}</div>;
  }
}
export default BackgroundBlock;
