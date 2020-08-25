import React, {Component} from 'react';
import styled, {css} from 'styled-components';
import {Col, Row, Container, Table} from 'react-bootstrap';

const STYLES = styled('div')`
  p {
    font-size: 1.5em;
    margin: 2em;
  }
`;

const Intro = () => {
  return(
    <STYLES>
    <Container>
      <Row>
        <Col xs={12} md={{span: 8, offset: 2}}>
          <p className="text-center">Canucks Stats Application - provides live statistics using NHL's undocumented REST API</p>
        </Col>
      </Row>
    </Container>
    </STYLES>
  );
}

export default Intro;
