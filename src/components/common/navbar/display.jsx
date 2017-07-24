import React from 'react';
import { NavLink } from 'react-router-dom';
import NavbarLayout from './layout';
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
    <NavbarLayout>
      <li className="nav-item">
        <NavLink className="nav-link" to="/feature">Feature</NavLink>
      </li>
      {renderLinks()}
    </NavbarLayout>
  );
};

export default Navbar;
