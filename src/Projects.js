import React, { Component } from "react";
import Header from "./Header";
import Cards from "./Cards";
import "./Projects.css";

class Projects extends Component {
  render() {
    return (
      <div className='Projects'>
          <Header title="Projects" />
          <Cards data={this.props.projects} />
          <Header title="In Progress"/>
          <Cards data={this.props.incompletes} />
      </div>
    );
  }
}

export default Projects;