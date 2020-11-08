import React, { Component } from "react";
import LongBackgroundBlock from "./LongBackgroundBlock";
import Header from "./Header";
import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className='Contact'>
          <Header title="Reach Out" />
          <LongBackgroundBlock>
            <ul className="list-inline">
                <li className="contact-item hvr-pulse"><a className="doc-link" href="https://github.com/jp448" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"> </i> GitHub</a></li>
                <li className="contact-item hvr-pulse"><a className="doc-link" href="https://www.linkedin.com/in/jocelyn-proctor-448448jkp/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i> LinkedIn</a></li>
                <li className="contact-item hvr-pulse"><a className="doc-link" href="mailto:jocelynkproctor@gmail.com"><i className="fas fa-envelope-square"></i> E-Mail</a></li>
            </ul> 
          </LongBackgroundBlock>
      </div>
    );
  }
}

export default Contact;