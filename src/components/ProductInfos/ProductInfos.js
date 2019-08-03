import React, { Component, Fragment } from 'react';
import ProductGallery from '../ProductGallery/ProductGallery';

class ProductInfos extends Component {
  render() {
    return (
      <Fragment>
        <div className="row">
          <div className="col-12 col-sm-12 col-md-8 col-lg-9 col-xl-9">
              <h5 className="border-bottom">Product Name</h5>
            <div className="row">
              <ProductGallery />
            </div>
            <div className="row mt-3">
              <div className="col-12">
                <h6 className="border-bottom">Description:</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt vulputate suscipit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam vulputate, orci ut interdum pharetra, leo odio luctus dui, nec lobortis urna neque ut dui.</p>
              </div>
              <div className="col-12">
                <h6 className="border-bottom">Specifications:</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non elit mauris. Sed lacinia nisi diam, sed vehicula mauris tincidunt in. Curabitur nulla nisi, ullamcorper non nibh id, suscipit tempor leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
            <div class="card mb-4 shadow-sm mt-4">
              <div class="card-header">
                <h5 class="my-0 font-weight-normal">Price</h5>
              </div>
              <div class="card-body">
                <h5 class="card-title pricing-card-title d-flex flex-row justify-content-between"><span>R$</span> <span>999,99</span></h5>
                <button type="button" class="btn btn-sm btn-block btn-outline-primary">Buy</button>
              </div>
            </div>
            <h6 className="border-bottom">History</h6>
                <p>Here you will know details of what was wrong and what kind of repair was made in the product.</p>
                <h6>What was wrong?</h6>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec non elit mauris.</p>
                <h6>What was the repair?</h6>
                <p>Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default ProductInfos;
