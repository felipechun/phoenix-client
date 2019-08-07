import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import './Home.css';
import MainSearchBar from '../MainSearchBar/MainSearchBar';
// import Sidebar from '../Sidebar/Sidebar';
import Feature from '../Feature/Feature';
// import HorizontalSlider from '../HorizontalSlider/HorizontalSlider';

class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      user: this.props.userObj,
    }
  }

  
  render() {
    if(this.state.user){
      if (this.state.user.role === 'Company' && this.state.user.company.length <= 0) {
        return <Redirect to="/company-signup"/>
      } else {
        return (
          <Fragment>
            <div className="container-fluid">
              <div className="row">
                <div className="col-12">
                  <MainSearchBar />
                </div>
              </div>
              <div className="row">
                <div className="col-12 p-0 mt-5">
                  <Feature />
                </div>
              </div>
              <div className="row mb-3 mt-3">
                <div className="col-12">
                  <h1 className="font-weight-bold">Categories</h1>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-sm-6 col-xs-12 p-2">
                  <div className="card d-flex flex-column justify-content-center align-items-center">
                    <img id="category-img" src="./images/laptops-category.jpg" alt="laptops category" />
                    <div className="centered position-absolute text-light">Laptops</div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-xs-12 p-2">
                  <div className="card d-flex flex-column justify-content-center align-items-center">
                    <img id="category-img" src="./images/tv-category.jpg" alt="tv category" />
                    <div className="centered position-absolute text-dark">TV's</div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-xs-12 p-2">
                  <div className="card d-flex flex-column justify-content-center align-items-center">
                    <img id="category-img" src="./images/mobile-category.jpg" alt="laptops category" />
                    <div className="centered position-absolute text-dark">Smartphones</div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-xs-12 p-2">
                  <div className="card d-flex flex-column justify-content-center align-items-center">
                    <img id="category-img" src="./images/tablet-category.jpeg" alt="laptops category" />
                    <div className="centered position-absolute text-dark">Tablets</div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-xs-12 p-2">
                  <div className="card d-flex flex-column justify-content-center align-items-center">
                    <img id="category-img" src="./images/console-category.jpeg" alt="laptops category" />
                    <div className="centered position-absolute text-dark">Consoles</div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-6 col-xs-12 p-2">
                  <div className="card d-flex flex-column justify-content-center align-items-center">
                    <img id="category-img" src="./images/audio-category.jpeg" alt="laptops category" />
                    <div className="centered position-absolute text-dark">Audio</div>
                  </div>
                </div>
              </div>
            </div>
          </Fragment>
        )
      }
    } else {
      return (
        <Fragment>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <MainSearchBar />
              </div>
            </div>
            <div className="row">
              <div className="col-12 p-0 mt-5">
                <Feature />
              </div>
            </div>
            <div className="row mb-3 mt-3">
              <div className="col-12">
                <h1 className="font-weight-bold">Categories</h1>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 col-sm-6 col-xs-12 p-2">
                <div className="card d-flex flex-column justify-content-center align-items-center">
                  <img id="category-img" src="./images/laptops-category.jpg" alt="laptops category" />
                  <div className="centered position-absolute text-light">Laptops</div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-xs-12 p-2">
                <div className="card d-flex flex-column justify-content-center align-items-center">
                  <img id="category-img" src="./images/tv-category.jpg" alt="tv category" />
                  <div className="centered position-absolute text-dark">TV's</div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-xs-12 p-2">
                <div className="card d-flex flex-column justify-content-center align-items-center">
                  <img id="category-img" src="./images/mobile-category.jpg" alt="laptops category" />
                  <div className="centered position-absolute text-dark">Smartphones</div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-xs-12 p-2">
                <div className="card d-flex flex-column justify-content-center align-items-center">
                  <img id="category-img" src="./images/tablet-category.jpeg" alt="laptops category" />
                  <div className="centered position-absolute text-dark">Tablets</div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-xs-12 p-2">
                <div className="card d-flex flex-column justify-content-center align-items-center">
                  <img id="category-img" src="./images/console-category.jpeg" alt="laptops category" />
                  <div className="centered position-absolute text-dark">Consoles</div>
                </div>
              </div>
              <div className="col-lg-4 col-sm-6 col-xs-12 p-2">
                <div className="card d-flex flex-column justify-content-center align-items-center">
                  <img id="category-img" src="./images/audio-category.jpeg" alt="laptops category" />
                  <div className="centered position-absolute text-dark">Audio</div>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      )
    }
  }
}

export default Home;
