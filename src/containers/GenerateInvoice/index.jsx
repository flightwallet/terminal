import React from 'react';
import { withRouter } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import CreateQr from './components/CraeteQr';
import { generateQr } from '../../redux/actions/generateQr';

const GenerateInvoice = props => (
  <Container className="dashboard">
    <Row>
      <Col md={12}>
        <h3 className="page-title">Generate invoice</h3>
      </Col>
    </Row>
    <Row>
      <CreateQr generateQr={generateQr} {...props} />
    </Row>
  </Container>
);

export default withRouter(GenerateInvoice);
