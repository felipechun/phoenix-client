import React, { Component, Fragment } from 'react';

class ProductGallery extends Component {
  render() {
    return (
      <Fragment>
        <div className="col-12 col-sm-6 col-md-6 col-lg-6">
          <img src="https://www.fillmurray.com/300/200" className="img-fluid w-100" alt="Responsive 1" />
        </div>
        <div className="col-12 col-sm-6 col-lg-6">
          <img src="https://www.fillmurray.com/284/196" className="img-fluid w-100" alt="Responsive 2" />
        </div>
      </Fragment>
    )
  }
}

export default ProductGallery;
