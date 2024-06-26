
import React, { Component } from "react";
import { withRouter } from "react-router";
import { Route, Switch } from "react-router-dom";
import Projects from "./Projects";
import Experience from "./Experience";
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
import accenture from "./images/Accenture.png";
import pizzaCart from "./images/pizza_cart.png";
import weatherApp from "./images/weather_app_img.png";
import background from "./images/background.png";
import "./App.css";

const NavbarWithRouter = withRouter(Navbar);

class App extends Component {
  static defaultProps = {
    projects: [
      {
        name: "Welcome",
        img: welcome,
        links: ["https://welcome.proctor-webworks.com", "https://github.com/jp448/welcome", "https://storage.jkproctor.com/portfolio/welcome_demo.mp4"],
        desc: "A ruby on rails app that helps expats navigate moving to a new country. It was developed in the last 2 weeks at Le Wagon.",
        key: 1
      },
      {
        name: "Bike Match",
        img: bikematch,
        links: ["https://bikematch.proctor-webworks.com", "https://github.com/jp448/bike-match", "https://storage.jkproctor.com/portfolio/bike_match.mp4"],
        desc: "A ruby on rails app modeled after an Airbnb rental market, but with bikes. Created in one week by the same team which created the Welcome App.",
        key: 2
      },
      {
        name: "Mr. Cocktail",
        img: mrCocktail,
        links: ["https://mr-cocktail.proctor-webworks.com", "https://github.com/jp448/rails-mister-cocktail", "https://storage.jkproctor.com/portfolio/mrcocktail_demo.mp4"],
        desc: "My first ruby on rails app (created in 2 days). Users can post cocktail images and recipies.",
        key: 3
      },
      {
        name: "Accenture Coding Challenge",
        img: accenture,
        links: ["https://accenture.proctor-webworks.com/", "https://github.com/jp448/accenture_code_challenge", "https://storage.jkproctor.com/portfolio/accenture_challenge.mp4"],
        desc: "A coding challenge completed for Accenture using React. The challenge was to create an interactive one-page website about Accenture company identity.",
        key: 4
      },
      {
        name: "Pizza Cart",
        img: pizzaCart,
        links: ["https://pizza-cart.proctor-webworks.com/", "https://github.com/jp448/pizza_cart_app", "https://storage.jkproctor.com/portfolio/pizza_cart_demo.mp4"],
        desc: "A coding challenge completed for a company. The challenge was to create a create your own pizza app.",
        key: 21
      },
      {
        name: "Weather App",
        img: weatherApp,
        links: ["https://weather-app.proctor-webworks.com/", "https://github.com/jp448/weather-app", "https://storage.jkproctor.com/portfolio/weather_app.mp4"],
        desc: "A coding challenge completed for a company. The challenge was to create a weather app using the Open Weather API. Everytime the page refreshes to a new random city",
        key: 22
      }
    ],
    incompletes: [
      {
        name: "STM",
        img: stm,
        links: [],
        desc: "Freelance project designing and programming an architecture firm's website. Programmed using a frontity framework, using react for frotend and wordpress for backend.",
        key: 5
      },
      {
        name: "Swap It",
        img: swapIt,
        links: [],
        desc: "A ruby on rails mobile market place app for swapping everyday household items.",
        key: 6
      },
      {
        name: "Mr. Cocktail",
        img: fatMoon,
        links: [],
        desc: "Freelance project using HTML and CSS to create a static website for a beach house rental.",
        key: 7
      }
    ],
    courses: [
      {
        name: "Web Developer Course",
        img: webdeveloper,
        links: [],
        desc: "Colt Steele's Web Developers Bootcamp is an online Udemy course consisting of about 62 hours of videos and 604 lectures on topics ranging from HTML5, CSS3, JavaScript, NodeJS, MongoDB and many more.",
        key: 8
      },
      {
        name: "React Course",
        img: reactCourse,
        links: [],
        desc: "Colt Steele's Modern React Bootcamp is an online Udemy course consisting of 39 hours of videos and 312 lectures on topics ranging from React Basics, Next JS, Hoooks, React Router, Context API and many more.",
        key: 9
      },
      {
        name: "Ruby Course",
        img: rubyCourse,
        links: [],
        desc: "Is an online Ruby Basics Udemy course consisting of 10.5 hours of video and 100 lecutures on topics from Built in Ruby methods, Ruby Gem libraries, Ruby programming best practices, OOP, and many more.",
        key: 10
      }
    ],
    quotes: [
      {
        content: "\"I remember a ticket we had that you could not find the answer and suddenly after few hours, you texted me back with several solutions. I don't know if took you lots of time or not, but thank you! When I saw those examples I started to understand routing\"",
        key: 11
      },
      {
        content: "\"Jocelyn helped me so much on a couple of tickets, and I always really enjoyed working with her. She was clear and focused and also very friendly – a perfect TA, really!\"",
        key: 12
      },
      {
        content: "\"Jocelyn is a great TA! - She is super super nice and amazing in explaining - I really loved the tickets with her because it helped me a lot - Like all the teachers, very inspiring and emphatic\"",
        key: 13

      },
      {
        content: "\"Helpful and nice!\"",
        key: 14
      },
      {
        content: "\"Very helpful\"",
        key: 15
      } 
    ],
    menu: [
      {
        name: 'Home',
        link: '/portfolio',
        key: 16
      }, 
      {
        name: 'Projects',
        link: '/projects',
        key: 17
      }, 
      {
        name: 'Experience',
        link: '/experience',
        key: 18
      }, 
      {
        name: 'About',
        link: '/about',
        key: 19
      }, 
      {
        name: 'Contact',
        link: '/contact',
        key: 20
      }
    ]
  };
  render() {
    return (
      <div className='App'>
        <div className='Background' style={{backgroundImage: `url(${background})`, "width": "100vw", "height": "100%"}}>
          <NavbarWithRouter menu={this.props.menu} />
          <Switch>
            <Route exact path='/' render={() => <Portfolio menu={this.props.menu} />} />
            <Route exact path='/portfolio' render={() => <Portfolio menu={this.props.menu} />} />
            <Route exact path='/projects' render={() => <Projects projects={this.props.projects} incompletes={this.props.incompletes} />} />
            <Route exact path='/experience' render={() => <Experience courses={this.props.courses} quotes={this.props.quotes} />} />
            <Route exact path='/about' render={() => <About />} />
            <Route exact path='/contact' render={() => <Contact />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
