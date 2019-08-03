import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <button
      type={props.type}
      name={props.name}
      value={props.value}
      className={props.className}
      >{props.children}</button>
    )
  }
}

export default Button;
