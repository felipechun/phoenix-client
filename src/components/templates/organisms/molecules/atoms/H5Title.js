import React, { Component } from 'react';

class H5Title extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <h5 className={props.className}>{props.children}</h5>
    );
  }
}

export default H5Title;
