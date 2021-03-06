import React, { Component } from 'react';
import MainSearchBar from '../MainSearchBar/MainSearchBar';
import ProductInfos from '../ProductInfos/ProductInfos';

class ProductDetails extends Component {
  render() {
    return (
      <div className="container-fluid">
        {/* <MainSearchBar /> */}
        <ProductInfos product={this.props.location.state.selectedProduct} getProducts={this.props.getProducts} />
      </div>
    )
  }
}

export default ProductDetails;
