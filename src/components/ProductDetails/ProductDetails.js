import React, { Component } from 'react';
import MainSearchBar from '../MainSearchBar/MainSearchBar';
import ProductInfos from '../ProductInfos/ProductInfos';

class ProductDetails extends Component {
  render() {
    return (
      <div className="container mt-3">
        <MainSearchBar />
        <ProductInfos />
      </div>
    )
  }
}

export default ProductDetails;
