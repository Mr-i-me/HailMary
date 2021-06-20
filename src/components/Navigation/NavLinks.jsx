import React from 'react';
import { Link } from 'react-router-dom';
import { NavItem } from 'reactstrap';

const NavLinks = (props) => (
  <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
    <NavItem className="nav-item active">
      <Link className="nav-link" href="#">
        Home
        <span className="sr-only">(current)</span>
      </Link>
    </NavItem>
    <NavItem>
      <Link className="nav-link" to="/dashboard">
        Dashboard
      </Link>
    </NavItem>
    <NavItem>
      <Link className="nav-link" to="/about">
        About
      </Link>
    </NavItem>
    <NavItem>
      <Link className="nav-link" to="/store">
        Store
      </Link>
    </NavItem>
    <NavItem>
      <Link className="nav-link" to="/item">
        Item
      </Link>
    </NavItem>
  </ul>
);

export default NavLinks;
