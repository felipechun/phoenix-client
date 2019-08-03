import React, { Component } from 'react';

class Paragraph extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <p className={this.props.paragraphClass}>{this.props.children}</p>
    )
  }
}

export default Paragraph;
