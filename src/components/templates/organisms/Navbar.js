import React, { Component, Fragment } from 'react';
import Logo from './molecules/Logo';
import List from './molecules/List';
import SearchBar from './molecules/SearchBar';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state= {
      links: ['About Us', 'Login', 'Logout', 'Signup', '<i class="fas fa-shopping-cart"></i>']
    }
  }

  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Logo />
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <List listClass="navbar-nav ml-auto">
              {this.state.links}
            </List>
        </nav>
        <div className="container">
          <SearchBar />
        </div>
      </Fragment>
    )
  }
}

export default Navbar;
