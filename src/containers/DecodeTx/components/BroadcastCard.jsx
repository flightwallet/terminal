import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardBody, Col } from 'reactstrap';
import BroadcastTxForm from './BroadcastTxForm';


const BroadcastCard = ({ broadcastTx, rawTx, autopublish }) => (
  <Col md={12}>
    <Card>
      <CardBody>
        <div className="card__title">
          <h5 className="bold-text">Decode and publish transaction</h5>
          <h5 className="subhead">Enter or see QR</h5>
        </div>
        <BroadcastTxForm broadcastTx={broadcastTx} rawTx={rawTx} autopublish={autopublish} />
      </CardBody>
    </Card>
  </Col>
);

BroadcastCard.propTypes = {
  broadcastTx: PropTypes.func.isRequired,
  autopublish: PropTypes.string,
  rawTx: PropTypes.string,
};

export default BroadcastCard;
