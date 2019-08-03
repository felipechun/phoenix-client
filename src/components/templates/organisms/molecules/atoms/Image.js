import React, { Component } from 'react';

class Image extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <img
      src={this.props.imageUrl}
      className={this.props.imageClass}
      alt={this.props.imageAlt} />
    )
  }
}

export default Image;
