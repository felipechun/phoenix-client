import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <input
      type={this.props.type}
      name={this.props.name}
      value={this.props.value}
      className={this.props.className}
      onChange={this.props.onChange}
      placeholder={this.props.placeholder}
      required/>
    )
  }
}

export default Input;
