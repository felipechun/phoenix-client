import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Anchor extends Component {
  render() {
    return (
      <Link
      to={this.props.anchorPath}
      className={this.props.anchorClass}></Link>
    )
  }
}

export default Anchor;
