
import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import Projects from "./Projects";
import Education from "./Education";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Portfolio from "./Portfolio";
import welcome from "./images/welcome.png";
import bikematch from "./images/bike_match.png";
import mrCocktail from "./images/mr_cocktails.png";
import stm from "./images/stm.png";
import swapIt from "./images/swap_it.png";
import fatMoon from "./images/fat_moon.png";
import webdeveloper from "./images/colt_steele_webdeveloper_bootcamp.png";
import reactCourse from "./images/react_course.png";
import rubyCourse from "./images/ruby_udemy_course.png";
import accenture from "./images/Accenture.png"
import "./App.css";

const NavbarWithRouter = withRouter(Navbar);

class App extends Component {
  static defaultProps = {
    projects: [
      {
        name: "Welcome",
        img: welcome,
        link: "https://welcome.proctor-webworks.com",
        desc: "A ruby on rails app that helps expats navigate moving to a new country. It was developed in the last 2 weeks at Le Wagon."
      },
      {
        name: "Bike Match",
        img: bikematch,
        link: "https://bikematch.proctor-webworks.com",
        desc: "A ruby on rails app modeled after an Airbnb rental market, but with bikes. Created in one week by the same team which created the Welcome App."
    },
      {
        name: "Mr. Cocktail",
        img: mrCocktail,
        link: "https://mr-cocktail.proctor-webworks.com",
        desc: "My first ruby on rails app (created in 2 days). Users can post cocktail images and recipies."
      },
      {
        name: "Accenture Coding Challenge",
        img: accenture,
        link: "https://accenture.proctor-webworks.com/",
        desc: "A coding challenge completed for Accenture using React. The challenge was to create an interactive one-page website about Accenture highlighting the companies identity."
      }
    ],
    incompletes: [
      {
        name: "STM",
        img: stm,
        desc: "Freelance project designing and programming an architecture firm's website. Programmed using a frontity framework, using react for frotend and wordpress for backend."
      },
      {
        name: "Swap It",
        img: swapIt,
        desc: "A ruby on rails mobile market place app for swapping everyday household items."
    },
      {
        name: "Mr. Cocktail",
        img: fatMoon,
        desc: "Freelance project using HTML and CSS to create a static website for a beach house rental."
      }
    ],
    courses: [
      {
        name: "Web Developer Course",
        img: webdeveloper,
        desc: "Colt Steele's Web Developers Bootcamp is an online Udemy course consisting of about 62 hours of videos and 604 lectures on topics ranging from HTML5, CSS3, JavaScript, NodeJS, MongoDB and many more."
      },
      {
        name: "React Course",
        img: reactCourse,
        desc: "Colt Steele's Modern React Bootcamp is an online Udemy course consisting of 39 hours of videos and 312 lectures on topics ranging from React Basics, Next JS, Hoooks, React Router, Context API and many more."
    },
      {
        name: "Ruby Course",
        img: rubyCourse,
        desc: "Is an online Ruby Basics Udemy course consisting of 10.5 hours of video and 100 lecutures on topics from Built in Ruby methods, Ruby Gem libraries, Ruby programming best practices, OOP, and many more."
      }
    ]
  };
  render() {
    return (
      <div className='App'>
        <NavbarWithRouter />
        <Switch>
          <Route exact path='/' render={() => <Portfolio />} />
          <Route exact path='/portfolio' render={() => <Portfolio />} />
          <Route exact path='/projects' render={() => <Projects projects={this.props.projects} incompletes={this.props.incompletes} />} />
          <Route exact path='/education' render={() => <Education courses={this.props.courses} />} />
          <Route exact path='/about' render={() => <About />} />
          <Route exact path='/contact' render={() => <Contact />} />
        </Switch>
      </div>
    );
  }
}

export default App;
