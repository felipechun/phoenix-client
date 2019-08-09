import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../authentication/auth-service/auth-service';

class Feature extends Component {

  constructor(props) {
    super(props)
    this.state = {
      featuredProduct: this.props.singleProduct,
    }
    this.service = new AuthService();
  }

  render() {    
    return (
        <div className="carousel-item">
          <Link to={{ pathname: `/products/${this.props.singleProduct._id}`, state: {selectedProduct: this.props.singleProduct}}} className="">
            <div className="card d-flex flex-column justify-content-center align-items-center">
              <img src={this.props.singleProduct.repairImageUrl} className="d-block w-100 featured-product-img" alt="Featured Product #2" />
              {/* <div className="centered position-absolute text-dark">{this.props.singleProduct.finalName}</div> */}
            </div>
          </Link>
        </div>
    )
  }
}

export default Feature;

