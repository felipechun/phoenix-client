import React, { Component } from 'react';

class Paragraph extends Component {
  render(props) {
    return (
      <p className={props.className}>{props.children}</p>
    )
  }
}

export default Paragraph;
