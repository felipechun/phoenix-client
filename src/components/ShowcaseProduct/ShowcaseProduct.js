import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ShowcaseProduct.css';

class ShowcaseProduct extends Component {
  render() {
    return (
      <div className="col-md-4">
          <div className="card mb-4 shadow-sm">
            <img src="./images/placeimg_500_350_grayscale_tech.jpg" alt="Product Avatar" />
            <div className="card-body">
              <p className="card-text">Product Name</p>
              <p className="card-text"><small>Product Description</small></p>
              <div className="d-flex justify-content-between align-items-center">
                <small className="text-muted">R$ 99.999,99</small>
                <div className="btn-group">
                  <Link to="/:category/:id" className="btn btn-sm btn-outline-secondary">Buy</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default ShowcaseProduct;
