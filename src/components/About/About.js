import React, { Component } from 'react';
import MainSearchBar from '../MainSearchBar/MainSearchBar';
import Sidebar from '../Sidebar/Sidebar';
import Feature from '../Feature/Feature';

class About extends Component {
  constructor(props) {
    super(props)
    this.state = {
      imageUrl: '../../../public/images/featured-searched-product-01.png',
    }
  }
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
              <Feature imgSource={this.state.imageUrl} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
