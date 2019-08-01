import React, { Component } from 'react';
import MainSearchBar from '../MainSearchBar/MainSearchBar';

class ProductDetails extends Component {
  render() {
    return (
      <div className="container mt-3">
        <MainSearchBar />
        <ProductGallery />
      </div>
    )
  }
}

export default ProductDetails;
