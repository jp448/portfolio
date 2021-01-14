import React, { Component } from "react";
import "./Popup.css";

class Popup extends Component {
    render() {
      return (
        <div className='popup'>
          <div className='popup_inner'>
            <button onClick={this.props.closePopup}>X</button>
            <video width="712" height="400" controls autoplay><source src={this.props.vid} type="video/mp4"/>Your browser does not support the video tag.</video>
          </div>
        </div>
      );
    }
}

export default Popup;
  