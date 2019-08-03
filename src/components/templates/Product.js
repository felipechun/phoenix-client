import React, { Component, Fragment } from 'react';
import Navbar from './organisms/Navbar';
import ProductMain from './organisms/ProductMain';
import ProductSidebar from './organisms/ProductSidebar';
import Footer from './organisms/Footer';

class Product extends Component {
  render() {
    return (
      <Fragment>
        <Navbar />
        <div className="container">
          <ProductMain />
          <ProductSidebar />
        </div>
        <Footer />
      </Fragment>
    )
  }
}

export default Product;
