import React from 'react';
import './styles.scss'
import {Container} from "reactstrap";

const Index = (props) => (
    <div>
        <header>
            <div className="overlay"></div>
            <video playsInline="playsinline" autoPlay="autoplay" muted="muted" loop="loop">
                <source src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4" type="video/mp4"/>
            </video>
            <div className="container h-100">
                <div className="d-flex h-100 text-center align-items-center">
                    <div className="w-100 text-white">
                        <h1 className="display-3">Alem do Tecido</h1>
                        <p className="lead mb-0">Texto foda sobre tecido</p>
                    </div>
                </div>
            </div>
        </header>

        <section className="my-5">
            <Container className="container">
                <div className="row">
                    <div className="col-md-8 mx-auto">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus leo quis nisl maximus,
                            gula ut tempor euismod, turpis erat
                            egestas dolor, id vulputate tortor dolor et dolor. Aliquam sit amet ipsum arcu. Nunc
                            pellentesque nulla vitae libero suscipit, vitae sem
                        </p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing <code>background-color</code> of
                            the <code>: )</code>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dapibus leo quis nisl maximus, ut dapibus neque sollicitudin. Nullam consequat, ligula ut tempor euismod, turpis erat egestas dolor, id vulputate tortor dolor et dolor. Aliquam sit amet ipsum arcu. Nunc pellentesque nulla vitae libero suscipit, vitae sem</p>
                        <p className="mb-0">
                            Created by <a href="https://startbootstrap.com">Hail Mary</a>
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    </div>
);

export default Index;