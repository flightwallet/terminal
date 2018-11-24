/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import QrReader from 'react-qr-scanner';


class Qrcode extends Component {
  static propTypes = {
    style: PropTypes.object,
    callback: PropTypes.func.isRequired,
  };

  static defaultProps = {
    style: {
      width: '350px',
      height: '180px',
    },
  }

  constructor() {
    super();

    this.state = {

    };
  }

  handleScan = (result) => {
    const { callback } = this.props;

    if (result) {
      callback(result);
      console.log('result', result);
    }
  }

  render() {
    const { style } = this.props;

    return (
      <QrReader
        delay={500}
        style={style}
        onScan={this.handleScan}
      />
    );
  }
}

export default Qrcode;
