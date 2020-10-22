import React, { Component } from "react";
import "./LongBackgroundBlock.css";

class LongBackgroundBlock extends Component {
  render() {
    return <div className='LongBackgroundBlock'>{this.props.children}</div>;
  }
}
export default LongBackgroundBlock;