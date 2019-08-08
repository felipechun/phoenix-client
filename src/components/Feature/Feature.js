import React, { Component, Fragment } from 'react';

class Feature extends Component {

  constructor(props) {
    super(props)
    this.state = {
      featuredProduct: this.props.singleProduct,
    }
  }

  render() {
    console.log(this.props.singleProduct);
    
    return (
        <div className="carousel-item">
          <div className="card d-flex flex-column justify-content-center align-items-center">
            <img src={this.props.singleProduct.repairImageUrl} className="d-block w-100 featured-product-img" alt="Featured Product #2" />
            <div className="centered position-absolute text-dark">{this.props.singleProduct.finalName}</div>
          </div>
        </div>
    )
  }
}

export default Feature;

