import React from "react";
import Example from "./Carousel/Example";
import {Nav, Navbar, NavbarBrand} from "reactstrap";
import {Link} from "react-router-dom";
import Navigation from "../../components/Navigation";
// import {Carousel} from "reactstrap";



const Home = props => (
    <>
        <div>
            <Navigation/>
        </div>
        <section className="Home">
            <div>
                <Example/>
            </div>
        </section>
    </>
);

export default Home;
