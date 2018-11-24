import React from 'react';

import { Card, CardBody, Col } from 'reactstrap';
import FormGoup from './FormGroup';


const ExampleCard = () => (
  <Col md={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Decode and publish transaction</h5>
          <h5 className="subhead">Enter or see QR</h5>
        </div>
        <FormGoup />
      </CardBody>
    </Card>
  </Col>
);

export default ExampleCard;
