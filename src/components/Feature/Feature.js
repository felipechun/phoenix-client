import React, { Component } from 'react';
import FeaturedImage from './FeaturedImage'; 

class Feature extends Component {
  render() {
    return (
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <FeaturedImage />
      </div>
    )
  }
}

export default Feature;

