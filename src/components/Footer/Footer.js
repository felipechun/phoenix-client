import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer navbar bg-dark mt-3">
      <div className="container d-flex flex-row justify-content-between">
        <a href="mailto:contact@phoenix.com" className="navbar-item nav-link text-white"><small>contact@phoenix.com</small></a>
        <a href="/" className="navbar-item text-white"><small>Copyright 2019. All rights reserved</small></a>
      </div>
    </footer>
  )
}

export default Footer;
