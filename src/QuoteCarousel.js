import React, { Component } from 'react';
import Carousel from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';
import "./QuoteCarousel.css";

class QuoteCarousel extends Component {
  render() {
    return (
      <div>
        <Carousel arrows >
        {this.props.quotes.map(q => (
              <p key={q.key} className="quote">{q.content}</p>
          ))} 
        </Carousel>
      </div>
    );
  };
};

export default QuoteCarousel;