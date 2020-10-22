import React, { Component } from "react";
import "./Card.css";

class Card extends Component {
  render() {
    return (
    <div className='Card'>
        <a href={this.props.link} target="_blank">
            <div className="card-category hvr-grow hvr-sweep-to-bottom" style={{backgroundImage: "url(" + this.props.img + ")" }}>
                <p>
                    {this.props.description}
                </p>
            </div>
        </a>
    </div> 
    );
  }
}
export default Card;