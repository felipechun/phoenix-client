import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class UpperFooter extends Component {
  render() {
    return (
      <footer className="container-fluid mt-3 py-5 bg-secondary text-white">
        <div className="row">
          <div className="col-12 col-md">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="d-block mb-2" role="img" viewBox="0 0 24 24" focusable="false"><title>Product</title><circle cx="12" cy="12" r="10"></circle><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"></path></svg>
            <small className="d-block mb-3 text-white">© 2019-2019</small>
          </div>
          <div className="col-6 col-md">
            <h5>Categories</h5>
            <ul className="list-unstyled text-small">
              <li><Link className="text-white" to="#">Laptop</Link></li>
              <li><Link className="text-white" to="#">Tablet</Link></li>
              <li><Link className="text-white" to="#">Mobile</Link></li>
              <li><Link className="text-white" to="#">Consoles</Link></li>
              <li><Link className="text-white" to="#">TV</Link></li>
              <li><Link className="text-white" to="#">Audio</Link></li>
            </ul>
          </div>
          <div className="col-6 col-md">
            <h5>Cities</h5>
            <ul className="list-unstyled text-small">
              <li><Link className="text-white" to="#">São Paulo</Link></li>
              <li><Link className="text-white" to="#">Rio de Janeiro</Link></li>
              <li><Link className="text-white" to="#">Belo Horizonte</Link></li>
              <li><Link className="text-white" to="#">Florianópolis</Link></li>
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
