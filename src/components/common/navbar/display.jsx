import React from 'react';
import { NavLink } from 'react-router-dom';
import './style.css';

const Navbar = ({ authenticated }) => {
  const renderLinks = () => {
    let link = <NavLink className="nav-link" to="/signin">Sign In</NavLink>;
    if (authenticated) link = <NavLink className="nav-link" Name="nav-link" to="/signout">Sign Out</NavLink>;
    return (
      <li className="nav-item" key={1}>
        {link}
      </li>
    );
  };
  return (
    <nav className="navbar navbar-inverse bg-inverse">
      <a className="navbar-brand" href="#">I2X</a>
      <div className="navbar" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/feature">Feature</NavLink>
          </li>
          {renderLinks()}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
