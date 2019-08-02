import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AuthService from '../authentication/auth-service/auth-service';


class Navbar extends Component {
  constructor(props) {
    super(props);
    this.service = new AuthService();
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
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
          <Link to="/" className="navbar-brand">Phoenix</Link>
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
            </ul>
          </div>
        </nav>
    )
  }
}

export default Navbar;