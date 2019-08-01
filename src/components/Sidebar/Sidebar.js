import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class Sidebar extends Component {
  render() {
    return (
      <div className="btn-group-vertical" role="group" aria-label="Button group with nested dropdown">
        <Link to="/category" className="btn btn-outline-secondary">Category #1</Link>
        <Link to="/category" className="btn btn-outline-secondary">Category #2</Link>
        <Link to="/category" className="btn btn-outline-secondary">Category #3</Link>
        <Link to="/category" className="btn btn-outline-secondary">Category #4</Link>
        <Link to="/category" className="btn btn-outline-secondary">Category #5</Link>
        <Link to="/category" className="btn btn-outline-secondary">Category #6</Link>
      </div>
    )
  }
}

export default Sidebar;
