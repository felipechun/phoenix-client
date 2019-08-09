import React, { Component, Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
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
      status: false
    }
  }

  
  render() {
    if(this.state.status){
      this.setState({
        status: true,
      })
      return(
        <>
        </>
      )
    } else if(this.props.userObj){
      if (this.props.userObj.role === 'Company' && this.props.userObj.company.length <= 0) {
        return <Redirect to="/company-signup"/>
      } else if (this.props.userObj.role === 'Customer' && this.props.userObj["name"] === undefined) {
        return <Redirect to="/edit-profile"/>
      } else {
        return (
          <Fragment>
            <div className="container-fluid">
              {/* <div className="row">
                <div className="col-12">
                  <MainSearchBar />
                </div>
              </div> */}
              <div className="row">
                <div className="col-12 p-0">
                  <div id="carouselExampleFade" className="carousel slide mb-3" data-ride="carousel">
                    <div className="carousel-inner">
                      <div className="carousel-item active" data-interval="10000">
                        <div className="card cover-image">
                          <div class="col-lg-6 col-md-9 col-xs-12 my-auto">
                            <h1 className="text-light text-wrap phix-title ml-5 mr-5">This is where products come back to <b className="colorful">life</b></h1>
                          </div>
                        </div>
                      </div>
                      {
                        !this.props.featuredProducts
                        ? null
                        :
                        this.props.featuredProducts.map((singleProduct, index) => {
                          return <Feature key={index} singleProduct={singleProduct} />
                        })
                      }
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                      {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                      <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                      {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                      <span className="sr-only">Next</span>
                    </a>
                  </div>
                </div>
              </div>
              {/* <div className="row mb-3 mt-3">
                <div className="col-12">
                  <h1 className="font-weight-bold">Categories</h1>
                </div>
              </div> */}
              <div className="row">
                <div className="col-lg-6 col-sm-6 col-xs-12 p-2 position-relative">
                  <Link onClick={() => this.props.getProductsFromApi('Laptop')} to='/products/'>
                    <div className="color-bg position-absolute w-100 h-100 top-0"></div>
                    <div className="card d-flex flex-column justify-content-center align-items-center">
                      <img className="category-img" src="./images/laptops-category.jpg" alt="laptops category" />
                      <div className="centered position-absolute text-light">Laptops</div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12 p-2">
                  <Link onClick={() => this.props.getProductsFromApi('TV')} to='/products/'>
                    <div className="card d-flex flex-column justify-content-center align-items-center">
                      <img className="category-img" src="./images/tv-category.jpg" alt="tv category" />
                      <div className="centered position-absolute text-dark">TV's</div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12 p-2">
                  <Link onClick={() => this.props.getProductsFromApi('Mobile')} to='/products/'>
                    <div className="card d-flex flex-column justify-content-center align-items-center">
                      <img className="category-img" src="./images/mobile-category.jpg" alt="laptops category" />
                      <div className="centered position-absolute text-dark">Smartphones</div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12 p-2">
                  <Link onClick={() => this.props.getProductsFromApi('Tablet')} to='/products/'>
                    <div className="card d-flex flex-column justify-content-center align-items-center">
                      <img className="category-img" src="./images/tablet-category.jpeg" alt="laptops category" />
                      <div className="centered position-absolute text-dark">Tablets</div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12 p-2">
                  <Link onClick={() => this.props.getProductsFromApi('Consoles')} to='/products/'>
                    <div className="card d-flex flex-column justify-content-center align-items-center">
                      <img className="category-img" src="./images/console-category.jpeg" alt="laptops category" />
                      <div className="centered position-absolute text-dark">Consoles</div>
                    </div>
                  </Link>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12 p-2">
                  <Link onClick={() => this.props.getProductsFromApi('Audio')} to='/products/'>
                    <div className="card d-flex flex-column justify-content-center align-items-center">
                      <img className="category-img" src="./images/audio-category.jpeg" alt="laptops category" />
                      <div className="centered position-absolute text-dark">Audio</div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </Fragment>
        )
      }
    } else if(!this.props.userObj){
      return (
        <Fragment>
          <div className="container-fluid">
            {/* <div className="row">
              <div className="col-12">
                <MainSearchBar />
              </div>
            </div> */}
            <div className="row">
              <div className="col-12 p-0">
                <div id="carouselExampleFade" className="carousel slide mb-3" data-ride="carousel">
                  <div className="carousel-inner">
                    <div className="carousel-item active" data-interval="10000">
                      <div className="card cover-image">
                        <div class="col-lg-6 col-md-9 col-xs-12 my-auto">
                          <h1 className="text-light text-wrap phix-title ml-5 mr-5 pl-5">This is where products come back to <b className="colorful">life</b></h1>
                        </div>
                      </div>
                    </div>
                    {
                      !this.props.featuredProducts
                      ? null
                      :
                      this.props.featuredProducts.map((singleProduct, index) => {
                        return <Feature key={index} singleProduct={singleProduct} />
                      })
                    }
                  </div>
                  <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    {/* <span className="carousel-control-prev-icon" aria-hidden="true"></span> */}
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    {/* <span className="carousel-control-next-icon" aria-hidden="true"></span> */}
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
            {/* <div className="row mb-3 mt-3">
              <div className="col-12">
                <h1 className="font-weight-bold">Categories</h1>
              </div>
            </div> */}
            <div className="row">
              <div className="col-lg-6 col-sm-6 col-xs-12 p-2 position-relative">
                <Link onClick={() => this.props.getProductsFromApi('Laptop')} to='/products/'>
                  <div className="color-bg position-absolute w-100 h-100 top-0"></div>
                  <div className="card d-flex flex-column justify-content-center align-items-center">
                    <img className="category-img" src="./images/laptops-category.jpg" alt="laptops category" />
                    <div className="centered position-absolute text-light">Laptops</div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12 p-2">
                <Link onClick={() => this.props.getProductsFromApi('TV')} to='/products/'>
                  <div className="card d-flex flex-column justify-content-center align-items-center">
                    <img className="category-img" src="./images/tv-category.jpg" alt="tv category" />
                    <div className="centered position-absolute text-dark">TV's</div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12 p-2">
                <Link onClick={() => this.props.getProductsFromApi('Mobile')} to='/products/'>
                  <div className="card d-flex flex-column justify-content-center align-items-center">
                    <img className="category-img" src="./images/mobile-category.jpg" alt="laptops category" />
                    <div className="centered position-absolute text-dark">Smartphones</div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12 p-2">
                <Link onClick={() => this.props.getProductsFromApi('Tablet')} to='/products/'>
                  <div className="card d-flex flex-column justify-content-center align-items-center">
                    <img className="category-img" src="./images/tablet-category.jpeg" alt="laptops category" />
                    <div className="centered position-absolute text-dark">Tablets</div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12 p-2">
                <Link onClick={() => this.props.getProductsFromApi('Consoles')} to='/products/'>
                  <div className="card d-flex flex-column justify-content-center align-items-center">
                    <img className="category-img" src="./images/console-category.jpeg" alt="laptops category" />
                    <div className="centered position-absolute text-dark">Consoles</div>
                  </div>
                </Link>
              </div>
              <div className="col-lg-6 col-sm-6 col-xs-12 p-2">
                <Link onClick={() => this.props.getProductsFromApi('Audio')} to='/products/'>
                  <div className="card d-flex flex-column justify-content-center align-items-center">
                    <img className="category-img" src="./images/audio-category.jpeg" alt="laptops category" />
                    <div className="centered position-absolute text-light">Audio</div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </Fragment>
      )
    }
  }
}

export default Home;
