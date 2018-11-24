import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, CardBody, Col, Row, Button } from 'reactstrap';
import Input from '../../../shared/components/Input';


class CreateQr extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    generateQr: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    match: PropTypes.objectOf(PropTypes.object).isRequired,
  };


  handleCrateQr = (address, amount, linkElement) => {
    const { dispatch, generateQr } = this.props;
    const value = `bitcoin:${address}?amount=${amount}`;

    dispatch(generateQr(value, {
      scale: 10,
      width: 250,
      margin: 0,
    }, linkElement));
  };

  render() {
    const { match: { params: { address, amount } } } = this.props;
    const { show } = this.props;

    return (
      <Fragment>
        <Row>
          <Col md={12}>
            <Card>
              <CardBody>
                <div className="card__title">
                  <h5 className="bold-text">Please enter address and amount</h5>
                  <h5 className="subhead">And push button after</h5>
                </div>
                <div className="form form--horizontal">
                  <Input
                    name="enterAddress"
                    type="text"
                    label="Enter address"
                    value={address}
                    placeholder="mnCLLbtNuXfmHHbDunyjqj61o63XjxNCpG"
                    ref={(el) => { this.inputAddress = el; return true; }}
                  />
                  <Input
                    name="enterAmount"
                    type="text"
                    value={amount}
                    label="Enter amount"
                    placeholder="0.0013"
                    ref={(el) => { this.inputAmount = el; return true; }}
                  />
                  <Button
                    color="success"
                    outline
                    onClick={() => this.handleCrateQr(
                      this.inputAddress.value,
                      this.inputAmount.value,
                      this.linkCanvas,
                    )}
                  >
                    Generate
                  </Button>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 12, offset: 1 }}>
            <Card>
              <CardBody>
                <div className="card__title">
                  <h5 className="bold-text">See QR code</h5>
                  <h5 className="subhead">Scan this code</h5>
                </div>
                <canvas
                  style={{ display: show ? 'block' : 'none' }}
                  ref={(el) => { this.linkCanvas = el; return true; }}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default connect(state => ({
  show: state.qrcode.show,
}))(CreateQr);
