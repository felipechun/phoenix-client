import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import ProductGallery from '../ProductGallery/ProductGallery';

class ProductInfos extends Component {
  render() {
    console.log('prod infos', this.props)
    return (
      <Fragment>
        <div className="row">
          <div className="col-12 mb-4 p-0">
            <ProductGallery imageUrl={this.props.product.repairImageUrl} />
          </div>
          <div className="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-9">
            <h2 className="mt-4 mb-4 pl-4">{this.props.product.finalName}</h2>
            <hr></hr>
            <div className="row mt-3">
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-3 pl-5">
                <h4 className="mt-4">Brand</h4>
              </div>
              <div className="col-sm-12 col-md-8 col-lg-8 col-xl-9 pl-5">
                <p className="mt-4" >{this.props.product.brand}</p>
              </div>
            </div>
            <hr className="mt-4 mb-4"></hr>
            <div className="row mt-3">
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-3 pl-5">
                <h4 className="mt-4">Description</h4>
              </div>
              <div className="col-sm-12 col-md-8 col-lg-8 col-xl-9 pl-5">
                <p className="mt-4" >{this.props.product.finalDescription}</p>
              </div>
            </div>
            <hr className="mt-4 mb-4"></hr>
            <div className="row mt-3">
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-3 pl-5">
                <h4 className="mt-4">Specifications</h4>
              </div>
              <div className="col-sm-12 col-md-8 col-lg-8 col-xl-9 pl-5">
                <p className="mt-4" >{this.props.product.specs}</p>
              </div>
            </div>
            <hr className="mt-4 mb-4"></hr>
            <div className="row mt-3">
              <div className="col-sm-12 col-md-4 col-lg-4 col-xl-3 pl-5">
                <h4 className="mt-4">Repairs Performed</h4>
              </div>
              <div className="col-sm-12 col-md-8 col-lg-8 col-xl-9 pl-5">
                <p className="mt-4" >{this.props.product.repairDescription}</p>
              </div>
            </div>
            <hr className="mt-4 mb-4"></hr>
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
          </div>
        </div>
      </Fragment>
    )
  }
}

export default ProductInfos;
