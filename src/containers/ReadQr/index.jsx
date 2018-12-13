import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ExampleCard from './components/ExampleCard';

import { generateQr } from '../../redux/actions/generateQr';
import { redirectToTx } from '../../redux/actions/btc';


const ExamplePage = props => (
  <Container className="dashboard" >
    <Row>
      <Col md={12}>
        <h3 className="page-title">Read QR code</h3>
      </Col>
    </Row>
    <Row>
      <ExampleCard handleSubmit={redirectToTx} generateQr={generateQr} {...props} />
    </Row>
  </Container>
);

export default ExamplePage;
