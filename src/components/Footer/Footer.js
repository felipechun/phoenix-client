import React, { Fragment } from 'react';
import './Footer.css';
import UpperFooter from './UpperFooter';

const Footer = () => {
  return (
    <Fragment>
      <UpperFooter />
      <footer className="footer navbar bg-dark">
        <div className="container d-flex flex-row justify-content-around">
          <a href="mailto:contact@phoenix.com" className="navbar-item nav-link text-white"><small>contact@phoenix.com</small></a>
          <a href="/" className="navbar-item text-white"><small>Copyright 2019. All rights reserved</small></a>
        </div>
      </footer>
    </Fragment>
  )
}

export default Footer;
