import React, { Component, Fragment } from 'react';
import Article from './molecules/Article';

class ProductMain extends Component {
  render() {
    return (
      <Fragment>
        <Article  />
        <Article />
      </Fragment>
    )
  }
}

export default ProductMain;
