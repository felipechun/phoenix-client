import React, { Component } from 'react';
import MainSearchBar from '../MainSearchBar/MainSearchBar';
import ProductInfos from '../ProductInfos/ProductInfos';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log('prod details', this.props)
    return (
      <div className="container mt-3">
        <MainSearchBar />
        <ProductInfos product={this.props.location.state.selectedProduct} getProducts={this.props.getProducts} />
      </div>
    )
  }
}

export default ProductDetails;
