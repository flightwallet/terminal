import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'reactstrap';


class BroadcastTxForm extends Component {
  static propTypes = {
    broadcastTx: PropTypes.func.isRequired,
    autopublish: PropTypes.string.isRequired,
    rawTx: PropTypes.string,
  };

  constructor() {
    super();

    this.state = {
      isAutopublishLaunched: false,
      error: false,
      msgError: '',
    };
  }

  componentWillReceiveProps() {
    const { rawTx, autopublish } = this.props;
    console.log('rawTx', rawTx)

    const check = RegExp(/^[0-9a-fA-F]+$/).test(rawTx);
    const isTxOk = rawTx && rawTx.length > 0 && check

    if (isTxOk) {
      this.textArea.value = rawTx;
    }

    if (autopublish && isTxOk && !this.state.isAutopublishLaunched) {
      this.setState({
        isAutopublishLaunched: true
      })

      this.handleSendTx(rawTx)
    }
  }

  handleSendTx = (value) => {
    this.props.broadcastTx(value)
      .then((res) => {
        this.setState(() => ({
          txSend: true,
          txInfo: res.data.txid,
        }));
        return true;
      }).catch((error) => {
        this.setState(() => ({
          error: true,
          msgError: error.message,
        }));
        return false;
      });
  };

  render() {
    const {
      error, msgError, txSend, txInfo,
    } = this.state;

    return (
      <div className="form form--horizontal">
        <Button color="success" outline onClick={() => this.handleSendTx(this.textArea.value)}>Publish</Button>
        <div className="form__form-group">
          <span className="form__form-group-label">RAW Transaction</span>
          <div className="form__form-group-field">
            <textarea
              name="rawTx"
              type="text"
              style={{ height: '350px' }}
              ref={(el) => { this.textArea = el; return true; }}
            />
          </div>
        </div>
        {
          txSend && (
            <span>
              Transaction hash:{' '}
              <a
                href={`https://live.blockcypher.com/btc-testnet/tx/${txInfo}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                {txInfo}
              </a>
            </span>
          )
        }
        {
          error && <span style={{ color: 'red' }}>{msgError}</span>
        }
      </div>
    );
  }
}

export default BroadcastTxForm;
