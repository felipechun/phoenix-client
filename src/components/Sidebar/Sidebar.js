import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Sidebar extends Component {
  render() {
    return (
      <div className="btn-group mb-3 d-none d-sm-none d-md-block d-lg-block d-xl-block" role="group" aria-label="Button group with nested dropdown">
        <Link to="/all" className="btn btn-outline-secondary">All</Link>
        <Link to="/laptop" className="btn btn-outline-secondary">Laptop</Link>
        <Link to="/tablet" className="btn btn-outline-secondary">Tablet</Link>
        <Link to="/mobile" className="btn btn-outline-secondary">Mobile</Link>
        <Link to="/consoles" className="btn btn-outline-secondary">Consoles</Link>
        <Link to="/tvs" className="btn btn-outline-secondary">TV's</Link>
        <Link to="/audio" className="btn btn-outline-secondary">Audio</Link>
      </div>
    )
  }
}

export default Sidebar;
