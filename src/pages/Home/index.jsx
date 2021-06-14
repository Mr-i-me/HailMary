import React from "react";
import Example from "./Carousel/Example";
import {Nav, Navbar, NavbarBrand} from "reactstrap";
import {Link} from "react-router-dom";
// import {Carousel} from "reactstrap";

function NavBranv() {
    return null;
}

const Navigation = props => (
    <Nav className="navbar navbar-expand-lg navbar-dark bg-dark static-top">
        <div className="container">
            {/*<a className="navbar-brand" href="#">*/}
               <NavbarBrand className="navbar-brand" href="#">

                <img src="http://placehold.it/150x50?text=Logo" alt=""/>
               </NavbarBrand>
            {/*</a>*/}
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
                    aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"/>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Home
                            <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">About</a>
                    </li>
                    <li className="nav-item">
                        <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link classNameName="nav-link" to="/about">
                            About
                        </Link>
                    </li>
                    <li className="nav-item">
                        <li className="nav-item">
                            <Link to="/store">Store</Link>
                        </li>
                    </li>
                    <li className="nav-item">
                        <li className="nav-item">
                            <Link to="/item">Item</Link>
                        </li>
                    </li>
                </ul>
            </div>
        </div>
    </Nav>
);
const Home = props => (
    <>
        <div>
            <Navigation/>
        </div>
        <section className="Home">
            <div>
                <Example/>
                {/*<img src={imge} alt="" />*/}
            </div>
        </section>
    </>
);

export default Home;
