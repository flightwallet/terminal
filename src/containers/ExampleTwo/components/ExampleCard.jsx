import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Col } from 'reactstrap';
import FormGoup from './FormGroup';


const ExampleCard = ({ broadcastTx, match }) => (
  <Col md={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Decode and publish transaction</h5>
          <h5 className="subhead">Enter or see QR</h5>
        </div>
        <FormGoup broadcastTx={broadcastTx} params={match.params} />
      </CardBody>
    </Card>
  </Col>
);

ExampleCard.propTypes = {
  broadcastTx: PropTypes.func.isRequired,
  match: PropTypes.objectOf(PropTypes.objectOf).isRequired,
};

export default ExampleCard;
