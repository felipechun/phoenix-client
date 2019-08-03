import React, { Component } from 'react';

class Input extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <input
      type={props.type}
      name={props.name}
      value={props.value}
      className={props.className}
      onChange={props.onChange}
      placeholder={props.placeholder}
      required/>
    )
  }
}

export default Input;
