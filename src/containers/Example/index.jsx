import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import ExampleCard from './components/ExampleCard';

import { generateQr } from '../../redux/actions/generateQr';


const ExamplePage = () => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Generate QR code</h3>
      </Col>
    </Row>
    <Row>
      <ExampleCard generateQr={generateQr} />
    </Row>
  </Container>
);

export default ExamplePage;
