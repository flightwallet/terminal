import React, { Fragment, Component } from 'react';
import { Card, CardBody, Col, Row } from 'reactstrap';
import Qrcode from '../../../shared/components/Qrcode';
import FormGroup from './FormGroup';


class ExampleCard extends Component {
  constructor() {
    super();

    this.state = {
      isVisible: false,
    };
  }

  setScanResult = (res) => {
    this.setState(() => ({
      data: res,
    }));
  }

  handleShowCamera = () => {
    this.setState(() => ({
      isVisible: true,
    }));
  }

  render() {
    const { isVisible, data } = this.state;

    return (
      <Fragment>
        <Row>
          <Col md={12}>
            <Card>
              <CardBody>
                <div className="card__title">
                  <h5 className="bold-text">RAW transaction</h5>
                  <h5 className="subhead">Enter or see QR</h5>
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
      </Fragment>
    );
  }
}

export default ExampleCard;
