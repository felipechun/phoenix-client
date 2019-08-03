import React, { Component } from 'react';
import Anchor from './atoms/Anchor';
import Image from './atoms/Image';

class Logo extends Component {
  render() {
    return (
      <Anchor anchorPath="/" anchorClass="navbar-brand">
        <Image imageUrl="https://placeholder.com/wp-content/uploads/2018/10/placeholder.com-logo3.png" imageClass="rounded" imageAlt="Phoenix Logo" />
      </Anchor>
    )
  }
}

export default Logo;
