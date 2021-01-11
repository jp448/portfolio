import React, { Component } from "react";
import "./Card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';

library.add(
  faGithubAlt
);

class Card extends Component {
  render() {
    return (
    <div className='Card'>
            <div className="card-category hvr-grow hvr-sweep-to-bottom" style={{backgroundImage: "url(" + this.props.img + ")" }}> 
              <p>
                  {this.props.description}
              </p>
              <p>Click to see a demo!</p>
              <FontAwesomeIcon className="icon" icon={faFilm}/>
          </div>
          <div className="card-category-bottom">
            <div className="links">
              <a href={this.props.gitlink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon" icon={faGithubAlt}/></a>
              <a href={this.props.weblink} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="icon" icon={faExternalLinkAlt}/></a>
              <FontAwesomeIcon className="icon" icon={faFilm}/>
            </div>
          </div>
    </div> 
    );
  }
}
export default Card;