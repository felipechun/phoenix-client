import React, { Component } from 'react';
import './FeaturedImage.css';
import { Link } from 'react-router-dom';

class FeaturedImage extends Component {
  render(props) {
    return (
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Link to="/:category/:id">
            <img src={this.props.imgSource} className="d-block w-100" alt="Featured Product #1" />
          </Link>
        </div>
        <div className="carousel-item">
          <Link to="/:category/:id">
            <img src="./images/featured-searched-product-02.jpg" className="d-block w-100" alt="Featured Product #2" />
          </Link>
        </div>
        <div className="carousel-item">
          <Link to="/:category/:id">
            <img src="./images/featured-searched-product-03.jpg" className="d-block w-100" alt="Featured Product #3" />
          </Link>
        </div>
      </div>
    )
  }
}

export default FeaturedImage;
