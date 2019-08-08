import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
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
      <nav id="uppernav" className="navbar navbar-expand-lg navbar-light bg-light">
        <Link to="/" className="navbar-brand"><img src="../../images/phix-icon.svg" height="40" alt="Phoenix" />&nbsp;&nbsp;Phixit</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {
              !this.props.isLoggedIn ?
            <Fragment>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link to="/about" className="nav-link">About Us <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link to="/login" className="nav-link">Login</Link>
              </li>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link to="/signup" className="nav-link">Signup</Link>
              </li>
            </Fragment>
            :
            <Fragment>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link to="/profile" className="nav-link"><i className="fas fa-user-circle"></i> {this.props.isLoggedIn.username}</Link>
              </li>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link to="/about" className="nav-link">About Us <span className="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
                <Link to="/" onClick={() => this.logMeOut()} className="nav-link">
                  Logout
                </Link>
              </li>
            </Fragment>
            }
            <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
              <Link to="/cart" className="nav-link">
                <i className="fas fa-shopping-cart"></i>
                <span className="badge badge-danger">{this.props.cartLength}</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    )
  }
}

export default Navbar;