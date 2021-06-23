import { Container, Nav, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';
import NavLinks from "./NavLinks";
import Logo from '../../assets/img/logo.svg'
import './styles.scss'
// const Navigation = (props) => (
  // <Nav className="navbar navbar-expand-lg navbar-light bg-light">
  //   <Container fluid className=" px-4 px-lg-5">
  //     <NavbarBrand className="navbar-brand" href="#">
  //       Hail Mary
  //       {/*<img src="http://placehold.it/150x50?text=Logo" alt="" />*/}
  //     </NavbarBrand>
  //     <button
  //       className="navbar-toggler"
  //       type="button"
  //       data-bs-toggle="collapse"
  //       data-bs-target="#navbarSupportedContent"
  //       aria-controls="navbarSupportedContent"
  //       aria-expanded="false"
  //       aria-label="Toggle navigation"
  //     >
  //       <span className="navbar-toggler-icon" />
  //     </button>
  //     <div className="collapse navbar-collapse" id="navbarSupportedContent">
  //       <NavLinks />
  //       <form className="d-flex">
  //         {/*<button className="btn btn-outline-dark" type="submit">*/}
  //         {/*  <i className="bi-cart-fill me-1"></i>*/}
  //         {/*  Cart*/}
  //         {/*  <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>*/}
  //         {/*</button>*/}
  //       </form>
  //     </div>
  //   </Container>
  // </Nav>

//
// );
// export default Navigation;
export {default} from './Navigation'