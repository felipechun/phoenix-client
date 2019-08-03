import React, { Component } from 'react';

class Label extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <label for={props.for}>{props.children}</label>
    )
  }
}

export default Label;
