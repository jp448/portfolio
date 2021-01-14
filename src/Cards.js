import React, { Component } from "react";
import Card from "./Card";
import "./Cards.css";

class Cards extends Component {
  render() {
    return (<div className='Cards'>
        {this.props.data.map(p => (
            <Card key={p.name} name={p.name} weblink={p.links[0]} gitlink={p.links[1]} vidlink={p.links[2]} img={p.img} description={p.desc} />
        ))}
    </div>);
  }
}
export default Cards;