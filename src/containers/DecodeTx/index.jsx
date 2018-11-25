import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ExampleCard from './components/ExampleCard';
import { broadcastTx } from '../../redux/actions/btc';

const ExamplePage = props => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Decode and publish transaction</h3>
      </Col>
    </Row>
    <Row>
      <ExampleCard broadcastTx={broadcastTx} {...props} />
    </Row>
  </Container>
);

export default ExamplePage;
