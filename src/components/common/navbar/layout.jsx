import React from 'react';

const NavbarLayout = ({ children }) => (
  <nav className="navbar navbar-inverse bg-inverse">
    <a className="navbar-brand" href="#">I2X</a>
    <div className="navbar" id="navbarNav">
      <ul className="navbar-nav">
        {children}
      </ul>
    </div>
  </nav>
);

export default NavbarLayout;
