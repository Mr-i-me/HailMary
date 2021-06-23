import React from 'react';
import {Container, Row} from 'reactstrap';
import './styles.scss';
import Slider from "./Carousel/Slider";
import Navigation from "../../components/Navigation";
import Contact from "../../components/Contact";

const Home = (props) => (
    <>
        <div>
            <Navigation/>
        </div>
        <section className="Home">
            <Container fluid>
                <Row>
                    <div className={'Home-slider'}>
                        <Slider/>
                    </div>
                </Row>
                <Row>
                    <p>lorem ipsum</p>
                </Row>
                <Row>
                    <Contact/>
                </Row>
            </Container>
        </section>
    </>
);

export default Home;
