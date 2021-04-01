import React from 'react';
import styled from 'styled-components';
import {Col, Row, Container} from 'react-bootstrap';

const Styles = styled('div')`
  p {
    font-weight: bold;
    font-size: 1.5em;
    margin: 1em;
    text-align: center;
  }
`;

const Intro = () => {
  return(
    <Styles>
      <Container>
        <Row>
          <Col xs={12} md={{span: 8, offset: 2}}>
              <p>Canucks Stats Application</p>
              <p>Provides live statistics using the NHL's undocumented REST API</p>
          </Col>
        </Row>
      </Container>
    </Styles>
  );
};

export default Intro;
