import React, { Component } from 'react';
import MainSearchBar from '../MainSearchBar/MainSearchBar';
import Sidebar from '../Sidebar/Sidebar';
import Feature from '../Feature/Feature';
import HorizontalSlider from '../HorizontalSlider/HorizontalSlider';

export class Home extends Component {

  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <MainSearchBar />
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex flex-row justify-content-center">
            <Sidebar />
          </div>
          <div className="col-12">
            <div className="row">
              <Feature />
            </div>
            <div className="row mt-3">
              <HorizontalSlider />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
