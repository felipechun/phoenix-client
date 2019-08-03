import React, { Component } from 'react';

class H6Title extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h6
      className={this.props.className}
      >{this.props.children}</h6>
    );
  }
}

export default H6Title;