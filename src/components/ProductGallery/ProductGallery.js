import React, { Component, Fragment } from 'react';

class ProductGallery extends Component {  
  render() {
    return (
      <Fragment>
        <div className="col-12 col-sm-12 col-md-6 offset-md-3 col-lg-6 offset-lg-3 col-xl-6 offset-xl-3">
          <img src={this.props.imageUrl} className="img-fluid w-100" alt="Responsive 1" />
        </div>
      </Fragment>
    )
  }
}

export default ProductGallery;
