import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ShowcaseProduct.css';

class ShowcaseProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProducts: '',
    }
  }
  
  render() {
    return (
      <div className="col-lg-4 col-md-6 col-xs-12">
        <div className="card mb-4 shadow-sm">
          <img src={this.props.product.repairImageUrl} className="category-img" alt="Product Avatar" />
          <div className="card-body">
            <p className="card-text font-weight-bold m-0 p-0">{this.props.product.finalName}</p>
            <p className="card-text m-0 p-0"><small>{this.props.product.specs}</small></p>
            <p className="card-text text-right">R$ {this.props.product.totalPrice}</p>
            <div className="d-flex justify-content-center align-items-center">
              <div className="btn-group">
                <Link to={{ pathname: `/products/${this.props.product._id}`, state: {selectedProduct: this.props.product}}}className="btn btn-sm btn-outline-secondary">Product Details</Link>
                <button type="submit" className="btn btn-sm btn-outline-primary" onClick={() => this.props.getProducts(this.props.product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ShowcaseProduct;
