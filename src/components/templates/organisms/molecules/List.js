import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ul className={this.props.listClass}>
        {this.props.children}
      </ul>
    )
  }
}

export default List;
