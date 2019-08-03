import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './HorizontalSlider.css';

class HorizontalSlider extends Component {
  render() {
    return (
      <Fragment>
        <div className="col-12">
          <h4 className="border-bottom">Most Wanted</h4>
        </div>
        <div id="horizontal-slider" className="horizontal-slider-container">
          <div className="item">
            <Link to="" className="">
              <img src="https://loremflickr.com/320/240" alt="random cat" />
            </Link>
          </div>
          <div className="item">
            <Link to="" className="">
              <img src="https://loremflickr.com/320/240/dog" alt="random cat" />
            </Link>
          </div>
          <div className="item">
            <Link to="" className="">
              <img src="https://loremflickr.com/320/240/fish" alt="random cat" />
            </Link>
          </div>
          <div className="item">
            <Link to="" className="">
              <img src="https://loremflickr.com/320/240/bird" alt="random cat" />
            </Link>
          </div>
          <div className="item">
            <Link to="" className="">
              <img src="https://loremflickr.com/320/240/bear" alt="random cat" />
            </Link>
          </div>
          <div className="item">
            <Link to="" className="">
              <img src="https://loremflickr.com/320/240" alt="random cat" />
            </Link>
          </div>
          <div className="item">
            <Link to="" className="">
              <img src="https://loremflickr.com/320/240/dog" alt="random cat" />
            </Link>
          </div>
          <div className="item">
            <Link to="" className="">
              <img src="https://loremflickr.com/320/240/fish" alt="random cat" />
            </Link>
          </div>
          <div className="item">
            <Link to="" className="">
              <img src="https://loremflickr.com/320/240/bird" alt="random cat" />
            </Link>
          </div>
          <div className="item">
            <Link to="" className="">
              <img src="https://loremflickr.com/320/240/bear" alt="random cat" />
            </Link>
          </div>
        </div>
      </Fragment>
    )
  }
}

export default HorizontalSlider;
