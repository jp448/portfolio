import React, { Component } from "react";
import "./Card.css";
import Popup from "./Popup"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

library.add(
  faGithubAlt
);

class Card extends Component {
  constructor() {
    super();
    this.state = {
      showPopup: false
    };
  }
  togglePopup() {
    this.setState({
      showPopup: !this.state.showPopup
    });
  }
  render() {
    return (
    <div className='Card'>
            <div className="card-category hvr-grow hvr-sweep-to-bottom" style={{backgroundImage: "url(" + this.props.img + ")", cursor: this.props.vidlink !== undefined ? "pointer" : "cursor"}} onClick={this.props.vidlink !== undefined ? this.togglePopup.bind(this) : ''}> 
              <p>
                  {this.props.description}
              </p>
              {this.props.vidlink !== undefined ? <p>Click to see a demo!</p> : ""}
              {this.props.vidlink !== undefined ? <FontAwesomeIcon className="icon" icon={faFilm}/> : ""}
          </div>
          <div className="card-category-bottom">
            <div className="links">
              {this.props.gitlink !== undefined ? <a href={this.props.gitlink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon" icon={faGithubAlt}/></a> : ''}
              {this.props.weblink !== undefined ? <a href={this.props.weblink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon" icon={faExternalLinkAlt}/></a> : ''}
              {this.props.vidlink !== undefined ? <a onClick={this.togglePopup.bind(this)} href="#"><FontAwesomeIcon className="icon pointer" icon={faFilm}/></a> : ''}
            </div>
          </div>
          {this.state.showPopup ? 
          <Popup
            text='Close Me'
            closePopup={this.togglePopup.bind(this)}
            vid={this.props.vidlink}
          />
          : null
        }
    </div> 
    );
  }
}
export default Card;