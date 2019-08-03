import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ShowcaseProduct.css';

class ShowcaseProduct extends Component {
  render() {
    return (
      <div className="col-md-3">
          <div className="card mb-4 shadow-sm">
            <img src="./images/placeimg_500_350_grayscale_tech.jpg" alt="Product Avatar" />
            <div className="card-body">
              <p className="card-text">Product Name</p>
              <p className="card-text"><small>Product Description</small></p>
              <p className="text-right">R$ 99.999,99</p>
              <div className="d-flex justify-content-center align-items-center">
                <div className="btn-group">
                  <Link to="/:category/:id" className="btn btn-sm btn-outline-secondary">Add to Chart</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
  }
}

export default ShowcaseProduct;
