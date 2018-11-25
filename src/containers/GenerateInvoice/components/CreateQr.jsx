import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Card, CardBody, Col, Row, Button } from 'reactstrap';
import Input from '../../../shared/components/Input';
import { parseURLParams } from '../../../redux/actions/parseURLParams';


class CreateQr extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    generateQr: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
  };

  handleCreateQr = (address, amount, linkElement) => {
    const { dispatch, generateQr } = this.props;
    const value = `bitcoin:${address}?amount=${amount}`;
    console.log('draw qr value', value)

    if (!linkElement) return

    dispatch(generateQr(value, {
      scale: 10,
      width: 250,
      margin: 0,
    }, linkElement));
  };

  updateQR = () => {
    this.handleCreateQr(
      this.inputAddress.value,
      this.inputAmount.value,
      this.linkCanvas,
    )
  }

  componentWillMount() {
    const { dispatch, location } = this.props

    dispatch(parseURLParams(location))
  }

  componentWillReceiveProps() {
    this.updateQR()
  }

  render() {
    const { params: { address, amount } } = this.props;
    const { show } = this.props;

    return (
      <Fragment>
        <Row>
          <Col md={12}>
            <Card>
              <CardBody>
                <div className="card__title">
                  <h5 className="bold-text">Please enter address and amount</h5>
                  <h5 className="subhead">And push button after that</h5>
                </div>
                <div className="form form--horizontal">
                  <Input
                    name="enterAddress"
                    type="text"
                    label="Enter address"
                    onChange={this.handleChange}
                    value={address}
                    placeholder="mnCLLbtNuXfmHHbDunyjqj61o63XjxNCpG"
                    setRef={(ref) => { this.inputAddress = ref; }}
                  />
                  <Input
                    name="enterAmount"
                    type="text"
                    value={amount}
                    onChange={this.handleChange}
                    label="Enter amount"
                    placeholder="0.0013 BTC"
                    setRef={(ref) => { this.inputAmount = ref; }}
                  />
                  <Button
                    color="success"
                    outline
                    onClick={this.updateQR}
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
                  <h5 className="bold-text">Scan this code</h5>
                </div>
                <canvas
                  style={{ display: show ? 'block' : 'none' }}
                  ref={(ref) => { this.linkCanvas = ref; }}
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
  params: state.URLParams.params,
}))(CreateQr);
