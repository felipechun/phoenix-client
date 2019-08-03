import React, { Component, Fragment } from 'react';
import './HorizontalSlider.css';

class HorizontalSlider extends Component {
  render() {
    return (
      <Fragment>
        <div className="horizontal-slider-container">
          <div className="item">
            <img src="https://loremflickr.com/320/240" alt="random cat" />
          </div>
          <div className="item">
            <img src="https://loremflickr.com/320/240/dog" alt="random cat" />
          </div>
          <div className="item">
            <img src="https://loremflickr.com/320/240/fish" alt="random cat" />
          </div>
          <div className="item">
            <img src="https://loremflickr.com/320/240/bird" alt="random cat" />
          </div>
          <div className="item">
            <img src="https://loremflickr.com/320/240/bear" alt="random cat" />
          </div>
        </div>
        <div class="content">
          <div class="background">
            <div class="left">left</div>
            <div class="right">right</div>
          </div>
          <div class="content-container">content here...</div>
        </div>
      </Fragment>
    )
  }
}

export default HorizontalSlider;
