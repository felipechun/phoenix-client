import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Sidebar extends Component {
  render() {
    return (
      <div className="btn-group mb-3 d-none d-sm-none d-md-block d-lg-block d-xl-block" role="group" aria-label="Button group with nested dropdown">
        <Link className="btn btn-outline-secondary" onClick={() => this.props.getProductsFromApi('All')} to='/products/'>All</Link>
        <Link className="btn btn-outline-secondary" onClick={() => this.props.getProductsFromApi('Laptop')} to='/products/'>Laptop</Link>
        <Link className="btn btn-outline-secondary" onClick={() => this.props.getProductsFromApi('Tablet')} to='/products/'>Tablet</Link>
        <Link className="btn btn-outline-secondary" onClick={() => this.props.getProductsFromApi('Mobile')} to='/products/'>Mobile</Link>
        <Link className="btn btn-outline-secondary" onClick={() => this.props.getProductsFromApi('Console')} to='/products/'>Consoles</Link>
        <Link className="btn btn-outline-secondary" onClick={() => this.props.getProductsFromApi('TV')} to='/products/'>TV's</Link>
        <Link className="btn btn-outline-secondary" onClick={() => this.props.getProductsFromApi('Audio')} to='/products/'>Audio</Link>
      </div>
    )
  }
}

export default Sidebar;
