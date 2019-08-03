import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../authentication/auth-service/auth-service';


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.service = new AuthService();
  }

  logMeOut = () => {
    this.service.logout()
    .then(() => {
      this.props.logout(null);
    });
  }

  render() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to="/" className="navbar-brand"><img src="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png" height="40" alt="Phoenix" /></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to="" className="nav-link">About Us <span className="sr-only">(current)</span></Link>
              </li>
              {
                !this.props.isLoggedIn ?
              <>
                <li className="nav-item">
                  <Link to="/login" className="nav-link">Login</Link>
                </li>
                <li className="nav-item">
                  <Link to="/signup" className="nav-link">Signup</Link>
                </li>
              </>
              : 
              <li className="nav-item">
                <Link to="/" onClick={() => this.logMeOut()} className="nav-link">
                  Logout
                </Link>
              </li>
              }
              <li className="nav-item">
                <Link to="/chart" className="nav-link">
                  <i class="fas fa-shopping-cart"></i>
                </Link>
              </li>
            </ul>
          </div>
        </nav>
    )
  }
}

export default Navbar;