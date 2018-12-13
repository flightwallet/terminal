import React, { Fragment, Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import Qrcode from '../../../shared/components/Qrcode';
import FormGroup from './FormGroup';


class ExampleCard extends Component {
  constructor() {
    super();

    this.state = {
      isVisible: false,
      autoSubmit: false,

      result: null,
      error: null,

    };
  }

  componentWillMount() {
    const { autoSubmit, location: { pathname } } = this.props

    console.log('path', pathname)

    if (autoSubmit || pathname === '/terminal/broadcast-tx') {
      this.setState({
        autoSubmit: true,
      })
    }
  }

  setScanResult = (res) => {
    this.setState(() => ({
      data: res,
    }));

    console.log('scanned', res)

    if (this.state.autoSubmit) {
      this.props.handleSubmit(res)
        .then(tx => {
          this.setState({
            result: tx.txid,
          })

          this.props.history.push(`https://live.blockcypher.com/btc-testnet/tx/${tx.txid}`)
        })
        .catch(err => {
          this.setState({
            error: err.message,
          })
        })
    }
  }

  handleShowCamera = () => {
    this.setState(() => ({
      isVisible: true,
    }));
  }

  render() {
    const { isVisible, data, autoSubmit, error, result } = this.state;

    return (
      <Fragment>
        <Row>
          <Col md={12}>
            <Card>
              <CardBody>
                <div className="card__title">
                  <h5 className="bold-text">RAW transaction</h5>
                  <h5 className="subhead">Enter or see QR</h5>
                  { autoSubmit && <h6 className="subhead">Will be automatically published</h6> }
                </div>
                <FormGroup onClick={this.handleShowCamera} data={data} />
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 12, offset: 1 }}>
            <Card>
              <CardBody>
                <div className="card__title">
                  <h5 className="bold-text">Web cam</h5>
                  <h5 className="subhead">See your QR</h5>
                </div>
                {
                  isVisible && <Qrcode callback={res => this.setScanResult(res)} />
                }
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="result">
              {
                result && (
                  <span>
                    <a
                      href={`https://live.blockcypher.com/btc-testnet/tx/${result}`}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {result}
                    </a>
                  </span>
                )
              }
              {
                error && <span style={{ color: 'red' }}>{error}</span>
              }
            </div>
          </Col>
        </Row>
      </Fragment>
    );
  }
}

export default ExampleCard;
