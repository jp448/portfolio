import React, { Component } from "react";
import Header from "./Header";
import ProfileImg from "./images/lw-pic.jpg";
import BackgroundBlock from "./BackgroundBlock";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className='About'>
          <Header title="About"/>
          <BackgroundBlock >
            <h2>About Me</h2>
            <img className="lw-pic" src={ProfileImg} alt='Profile' />
            <p>After working for several years in the education sector I recently graduated from Le Wagon, a 9 week Ruby on Rails Full stack Web Development Bootcamp and am now looking for my first employment as a web developer. I am excited to learn new technologies, programming languages, and frameworks. I know how to work in a team and am a good communicator.</p>
            <p>Post Le Wagon I have mainly been focused on further learning (using udemy to learn frameworks like React and to review Ruby). I am also a Teaching Assisstant at Le Wagon helping current students in the de-bugging process and reiterating core concepts with them. I have also been working on a few freelance projects one of which required learning more about the CMS wordpress.</p>
          </BackgroundBlock>
      </div>
    );
  }
}

export default About;