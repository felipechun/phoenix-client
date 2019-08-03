import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-12">
            <h4 className="border-bottom text-uppercase">About Us</h4>
          </div>
        </div>
        <div className="row mt-3 mb-3">
          <div className="col-12 col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2 text-center">
            <img src="../../images/about-us.jpg" className="img-fluid" alt="About Us" />
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-12 col-sm-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2 col-xl-8 offset-xl-2">
            <h5 id="weare" className="border-bottom text-uppercase">Who we are.</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eu tempus nisl. Ut sollicitudin quis libero eu aliquam. Curabitur pulvinar aliquet magna quis auctor. Donec in dapibus metus, nec auctor ligula. Nam consectetur enim in enim accumsan, vel lobortis lectus vulputate. Duis venenatis tellus sed est pharetra, a blandit nulla tincidunt. Praesent eleifend magna diam, ac finibus augue rutrum eu. Ut ac dolor nisl. Nam non sem quis ipsum mattis varius. Curabitur vitae posuere mi. Nulla euismod eros nisl, ac suscipit nisl pellentesque vel. Mauris semper vel nisi ultricies lobortis. Ut commodo nisi in dignissim mollis. Curabitur tincidunt diam sed turpis aliquet consectetur.</p>
            <h5 id="wedo" className="border-bottom text-uppercase">What we do.</h5>
            <p>Etiam lectus risus, facilisis eget est quis, mollis vestibulum felis. Vivamus eu risus dui. Curabitur tristique purus ut ullamcorper tempus. Vestibulum volutpat, orci id vulputate tempus, urna felis ullamcorper nibh, nec maximus justo turpis nec turpis. Curabitur purus felis, facilisis id tellus eget, eleifend ultricies est. Fusce arcu nunc, semper non tincidunt sit amet, fringilla id ex. Aenean ultricies accumsan metus eget dignissim. Vestibulum tempus sed leo sagittis dignissim. Integer nec lacus finibus, mollis lorem vel, efficitur tortor. Cras a felis eu leo accumsan cursus. Sed quam ipsum, placerat eget lobortis eget, ultrices quis sapien. Nam maximus felis eu erat varius, ut dignissim erat varius. Sed vehicula, dui auctor aliquam dictum, neque justo tincidunt elit, vitae sollicitudin sem lacus et ex. Cras facilisis porta mauris, at ultricies purus lobortis nec. Phasellus quis purus a lorem venenatis vehicula.</p>
            <h5 id="whywe" className="border-bottom text-uppercase">Why we do.</h5>
            <p>Pellentesque vestibulum feugiat augue id aliquet. Suspendisse porta hendrerit erat ut vestibulum. In sed sapien non nisl eleifend tincidunt. Ut non lectus ut elit maximus placerat. Phasellus dictum volutpat lectus, id fringilla sem finibus vel. Morbi fringilla vitae sapien vehicula bibendum. Cras porttitor lacus nisl, id euismod tortor venenatis sed. Curabitur quam tellus, faucibus quis tortor vel, facilisis aliquam risus. Aenean eget molestie ante. Etiam id laoreet orci. In hac habitasse platea dictumst.</p>
          </div>
        </div>
      </div>
    )
  }
}

export default About;
