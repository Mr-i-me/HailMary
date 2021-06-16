import { Nav, NavbarBrand } from "reactstrap";
import { Link } from "react-router-dom";

const Navigation = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container px-4 px-lg-5">
      <NavbarBrand className="navbar-brand" href="#">
        Hail Mary
        {/*<img src="http://placehold.it/150x50?text=Logo" alt="" />*/}
      </NavbarBrand>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
              <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li className="nav-item">
            <Link classNameName="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/store">
              Store
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/item">
              Item
            </Link>
          </li>
        </ul>
        <form className="d-flex">
          <button className="btn btn-outline-dark" type="submit">
            <i className="bi-cart-fill me-1"></i>
            Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill">
              0
            </span>
          </button>
        </form>
      </div>
    </div>
  </nav>
);
export default Navigation;
