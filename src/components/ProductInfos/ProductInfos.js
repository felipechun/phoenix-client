import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ProductGallery from '../ProductGallery/ProductGallery';

class ProductInfos extends Component {
  render() {
    console.log('prod infos', this.props)
    return (
      <Fragment>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-9">
              <h5 className="border-bottom">{this.props.product.finalName}</h5>
            <div className="row">
              <ProductGallery imageUrl={this.props.product.imageUrl} />
            </div>
            <div className="row mt-3">
              <div className="col-12">
                <h6 className="border-bottom">Description:</h6>
                <p>{this.props.product.finalDescription}</p>
              </div>
              <div className="col-12">
                <h6 className="border-bottom">Specifications:</h6>
                <p>{this.props.product.specs}</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
            <div className="card mb-4 shadow-sm mt-4">
              <div className="card-header">
                <h5 className="my-0 font-weight-normal">Price</h5>
              </div>
              <div className="card-body">
                <h5 className="card-title pricing-card-title d-flex flex-row justify-content-between"><span>R$</span> <span>{this.props.product.totalPrice}</span></h5>
                <Link to="/cart" onClick={() => this.props.getProducts(this.props.product)} className="btn btn-sm btn-block btn-outline-primary">Buy</Link>
                <button type="button" className="btn btn-sm btn-block btn-outline-success" onClick={() => this.props.getProducts(this.props.product)}>Add to Cart</button>
              </div>
            </div>
            <h6 className="border-bottom">History</h6>
                <p>{this.props.product.finalDescription}</p>
                <h6>What was the repair?</h6>
                <p>{this.props.product.repairDescription}</p>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default ProductInfos;
