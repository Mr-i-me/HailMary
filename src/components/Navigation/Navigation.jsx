import React from 'react';
import { Container, Nav } from 'reactstrap';
import Logo from '../../assets/img/logo.svg';

const Navigation = (props) => (
  <Nav className="main-nav-outer" id="test">
    <Container fluid>
      <ul className="main-nav">
        <li>
          <a href="#header">Home</a>
        </li>
        <li>
          <a href="#service">Servicos</a>
        </li>
        <li>
          <a href="#Portfolio">Parceiros</a>
        </li>
        <li className="small-logo">
          {/*<a href="#header">*/}
            <img src={Logo} className="logo" alt="" />
          {/*</a>*/}
        </li>
        <li>
          <a href="#client">Clients</a>
        </li>
        <li>
          <a href="#team">Team</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
      <a className="res-nav_click" href="#">
        <i className="fa fa-bars" />
      </a>
    </Container>
  </Nav>
);

export default Navigation;
