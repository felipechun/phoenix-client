import React, { Component } from 'react';
import DynamicSearchBar from '../DinamycSearchBar/DynamicSearchBar';
import Sidebar from '../Sidebar/Sidebar';
import Feature from '../Feature/Feature';
import ShowcaseProduct from '../ShowcaseProduct/ShowcaseProduct';

import './Showcase.css';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
          <DynamicSearchBar state={this.props.state} filterHandler={this.props.filterHandler}/>
            {/* <h1>Search Results from Home</h1> */}
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row d-flex flex-column align-items-center">
              <Sidebar getProductsFromApi={this.props.getProductsFromApi} />
              {/* <Feature /> */}
            </div>
            <div id="Showcase" className="row mt-3">
              { this.props.products.map((item, index) => {
                return <ShowcaseProduct key={index} product={item} id={item._id} getProducts={this.props.getProducts} />
              }) }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;
