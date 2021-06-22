import React from "react";
import { useHistory } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';

import "./style.scss";

const Age = props => {
  const history = useHistory();

  return (
    <Container fluid className="AgeWrapper">
      <div className="AgeContent">
        <p className="AgeQuestion">
          Você tem mais de 18 anos?
        </p>

        <Row>
          <Col>
            <Button size="lg" color="success" style={{ width: 132 }} onClick={() => history.push('/home')}>
              Yep
            </Button>
          </Col>
          <Col>
            <Button size="lg" color="danger" style={{ width: 132 }}>
              Nop
            </Button>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Age;
