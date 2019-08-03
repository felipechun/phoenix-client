import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <button
      type={this.props.type}
      name={this.props.name}
      value={this.props.value}
      className={this.props.className}
      >{this.props.children}</button>
    )
  }
}

export default Button;
