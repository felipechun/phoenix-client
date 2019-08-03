import React, { Component, Fragment } from 'react';
import './Home.css';
import MainSearchBar from '../MainSearchBar/MainSearchBar';
import Sidebar from '../Sidebar/Sidebar';
import Feature from '../Feature/Feature';
import HorizontalSlider from '../HorizontalSlider/HorizontalSlider';
class Home extends Component {

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="row">
            <div className="col-12 mt-3">
              <MainSearchBar />
            </div>
          </div>
          <div className="row">
            <div className="col-12 d-flex flex-row justify-content-center">
              <Sidebar />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Feature />
            </div>
          </div>
        </div>
        <div className="container-fluid mt-3">
          <div className="row mt-3">
            <HorizontalSlider />
          </div>
        </div>
      </Fragment>
    )
  }
}

export default Home;
