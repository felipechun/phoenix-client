import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UpperFooter extends Component {
  render() {
    return (
      <footer className="container-fluid mt-3 py-5 bg-secondary text-white">
        <div className="row">
          <div className="col-12 col-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="d-block mb-2" role="img" viewBox="0 0 24 24" focusable="false"><title>Product</title><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></svg>
            <small className="d-block mb-3 text-white">© 2017-2019</small>
          </div>
          <div className="col-6 col-md">
            <h5>Features</h5>
            <ul className="list-unstyled text-small">
              <li><Link className="text-white" to="#">Cool stuff</Link></li>
              <li><Link className="text-white" to="#">Random feature</Link></li>
              <li><Link className="text-white" to="#">Team feature</Link></li>
              <li><Link className="text-white" to="#">Stuff for developers</Link></li>
              <li><Link className="text-white" to="#">Another one</Link></li>
              <li><Link className="text-white" to="#">Last time</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><Link className="text-white" to="#">Resource</Link></li>
              <li><Link className="text-white" to="#">Resource name</Link></li>
              <li><Link className="text-white" to="#">Another resource</Link></li>
              <li><Link className="text-white" to="#">Final resource</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Resources</h5>
            <ul className="list-unstyled text-small">
              <li><Link className="text-white" to="#">Business</Link></li>
              <li><Link className="text-white" to="#">Education</Link></li>
              <li><Link className="text-white" to="#">Government</Link></li>
              <li><Link className="text-white" to="#">Gaming</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>About</h5>
            <ul className="list-unstyled text-small">
              <li><Link className="text-white" to="#">Team</Link></li>
              <li><Link className="text-white" to="#">Locations</Link></li>
              <li><Link className="text-white" to="#">Privacy</Link></li>
              <li><Link className="text-white" to="#">Terms</Link></li>
            </ul>
          </div>
        </div>
      </footer>
    )
  }
}

export default UpperFooter;
