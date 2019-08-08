import React, { Component } from 'react';

class Feature extends Component {
  render() {
    return (
      <div id="carouselExampleFade" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="./images/featured-searched-product-01.png" className="d-block w-100" alt="Featured Product #1" />
          </div>
          <div className="carousel-item">
          <img src="./images/featured-searched-product-02.jpg" className="d-block w-100" alt="Featured Product #2" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    )
  }
}

export default Feature;

