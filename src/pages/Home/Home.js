import React from 'react';
import {Container, Row} from 'reactstrap';
import Navigation from 'components/Navigation';
import './styles.scss';
import Slider from "./Carousel/Slider";

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
            </Container>
        </section>
    </>
);

export default Home;
