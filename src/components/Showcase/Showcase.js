import React, { Component } from 'react';
import DynamicSearchBar from '../DinamycSearchBar/DynamicSearchBar';
import Sidebar from '../Sidebar/Sidebar';
import Feature from '../Feature/Feature';
import ShowcaseProduct from '../ShowcaseProduct/ShowcaseProduct';

import './Showcase.css';

export class Search extends Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <DynamicSearchBar />
            <h1>Search Results from Home</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="row d-flex flex-column align-items-center">
              <Sidebar />
              <Feature />
            </div>
            <div id="Showcase" className="row mt-3">
              <ShowcaseProduct />
              <ShowcaseProduct />
              <ShowcaseProduct />
              <ShowcaseProduct />
              <ShowcaseProduct />
              <ShowcaseProduct />
              <ShowcaseProduct />
              <ShowcaseProduct />
              <ShowcaseProduct />
              <ShowcaseProduct />
              <ShowcaseProduct />
              <ShowcaseProduct />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Search;