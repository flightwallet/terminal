import React, { Component } from 'react';
import { Col, Container, Row } from 'reactstrap';
import BroadcastCard from './components/BroadcastCard';
import { connect } from 'react-redux';
import { broadcastTx } from '../../redux/actions/btc';
import { parseURLParams } from '../../redux/actions/parseURLParams';

class ExamplePage extends Component {

  componentWillMount() {
    const { dispatch, location } = this.props

    dispatch(parseURLParams(location))
  }

  render () {
    const { URLParams: { tx, publish } } = this.props

    return (
      <Container className="dashboard">
        <Row>
          <Col md={12}>
            <h3 className="page-title">Decode and publish transaction</h3>
          </Col>
        </Row>
        <Row>
          <BroadcastCard broadcastTx={broadcastTx} rawTx={tx} autopublish={publish} {...this.props} />
        </Row>
      </Container>
    );
  }
}

export default connect(state => ({
  URLParams: state.URLParams.params,
}))(ExamplePage);
