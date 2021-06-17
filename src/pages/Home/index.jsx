import React from "react";
import Example from "./Carousel/Example";
import Navigation from "../../components/Navigation";



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
