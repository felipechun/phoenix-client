import React, { Component } from 'react';

class ItemList extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className={this.props.itemListCLass}>{this.props.children}</li>
    )
  }
}

export default ItemList;
