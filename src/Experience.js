import React, { Component } from "react";
import Header from "./Header";
import BackgroundBlock from "./BackgroundBlock";
import Cards from "./Cards";
import QuoteCarousel from "./QuoteCarousel"
import LongBackgroundBlock from "./LongBackgroundBlock";
import LWDoc from "./documents/jocelyn_proctor_lwcert.png";
import "./Experience.css";

class Experience extends Component {
  render() {
    return (
      <div className='Experience'>
          <Header title="Courses" />
          <BackgroundBlock>
            <h2><a className="doc-link" href={LWDoc}>Le Wagon Full Stack Developer 9 week Bootcamp</a></h2>
            <p>Le Wagon is a 9 week intensive full stack web development bootcamp. Every morning there is a lecture on a new topic and then exercises through out the day. After starting with Ruby basics, students then devote a week to learning OOP and the MVC architechture. Then there are several days dedicated to database management (SQL and Rail's Active Record). After students dive into Frontend, learning the basics of CSS and HTML. Finally before projects weeks you learn how to manipulate the DOM using Javascript. After 6 weeks students group together to form teams so that they may experiance what a sprint would look like at a company. At the end of the Camp participants will have made over 6 Rails apps.</p>
          </BackgroundBlock>
          <Header title="Udemy Courses" />
          <Cards data={this.props.courses} />
          <Header title="Work Experience" />
          <BackgroundBlock>
            <h2>Le Wagon Teaching Assistant</h2>
            <p>As a TA at Le Wagon I take tickets students submit and help either walk them through the exercise, help them with de-bugging a problem, or reiterate core concepts from that days lesson. The bootcamp is very intense so as a TA it is my job to be as supporitve and encouraging as possible.</p>
            <p>See what students who have worked with me have to say:</p>
            <QuoteCarousel quotes={this.props.quotes}/>
          </BackgroundBlock>
          <Header title="Skills" />
          <LongBackgroundBlock>
            <div className="icons">
                <div className="hvr-float icon-container">
                    <i className="fab fa-sketch icon"></i>
                    <p>Ruby</p>
                </div>
                <div className="hvr-float icon-container">
                    <i className="fas fa-train icon"></i>
                    <p>Ruby on Rails</p>
                </div>
                <div className="hvr-float icon-container">
                    <i className="fab fa-html5 icon"></i>
                    <p>HTML 5</p>
                </div>
                <div className="hvr-float icon-container">
                    <i className="fab fa-css3-alt icon"></i>
                    <p>CSS 3</p>
                </div>
                <div className="hvr-float icon-container">
                    <i className="fab fa-bootstrap icon"></i>
                    <p>Bootstrap</p>
                </div>
                <div className="hvr-float icon-container">
                    <i className="fab fa-js-square icon"></i>
                    <p>ES6 Javascript</p>
                </div>
                <div className="hvr-float icon-container">
                    <i className="fab fa-react icon"></i>
                    <p>React</p>
                </div>
                <div className="hvr-float icon-container">
                    <i className="fab fa-wordpress icon"></i>
                    <p>Wordpress</p>
                </div>
                <div className="hvr-float icon-container">
                    <i className="fab fa-github icon"></i>
                    <p>Git, Github, Agile development</p>
                </div>
                <div className="hvr-float icon-container">
                    <i className="fas fa-laptop-code icon"></i>
                    <p>APIs, JSON, scraping</p>
                </div>
                <div className="hvr-float icon-container">
                    <i className="fas fa-palette icon"></i>
                    <p>Wireframes, prototyping, UI design</p>
                </div>
                <div className="hvr-float icon-container">
                    <i className="far fa-keyboard icon"></i>
                    <p>Test driven development</p>
                </div>
            </div>
          </LongBackgroundBlock>
      </div>
    );
  }
}

export default Experience;