import axios from 'axios';
import bitcoin from 'bitcoinjs-lib';
import BigNumber from 'bignumber.js';


export const SEND_BTC = 'SEND_BTC';
export const FETCHING_SENDING_BTC = 'FETCHING_SENDING_BTC';

function fetching() {
  return {
    type: FETCHING_SENDING_BTC,
  };
}


export function broadcastTx(txRaw) {
  return axios.post('https://test-insight.swap.online/insight-api/tx/send', {
    rawtx: txRaw,
  });
}

export async function redirectToTx(txRaw) {
  try {
    const tx = await axios.post('https://test-insight.swap.online/insight-api/tx/send', {
      rawtx: txRaw,
    });

    return tx.data.txid
  } catch (err) {
    console.error(err)
    return err
  }

}

export function send(txRaw) {
  fetching();
  broadcastTx(txRaw)
    .then(() => ({
      type: SEND_BTC,
    }));
}

const fetchUnspents = address =>
  axios.get(`https://test-insight.swap.online/insight-api/addr/${address}/utxo`)
    .then(result => result.data);


export async function createRaw(amount) {
  const key = bitcoin.ECPair.fromWIF('cNaXjURwE9sVFVZ2BhoKugLztkAxm1MjSGBKkvaiJEsDapbdYbUV', bitcoin.networks.testnet);
  const tx = new bitcoin.TransactionBuilder(bitcoin.networks.testnet);
  const unspents = await fetchUnspents('miGhV4TuvQmwraNNLT2FkZgDKhRRxmCXU5');

  const fundValue = new BigNumber(String(amount)).multipliedBy(1e8).integerValue().toNumber();
  const feeValue = 15000;
  const totalUnspent = unspents.reduce((summ, { satoshis }) => summ + satoshis, 0);
  const skipValue = totalUnspent - fundValue - feeValue;

  if (totalUnspent < fundValue + feeValue) {
    alert(`Insufficient funds: totalUnspent < fundValue + feeValue: ${totalUnspent} < ${fundValue} + ${feeValue}`);
    return;
  }

  unspents.forEach(({ txid, vout }) => tx.addInput(txid, vout, 0xfffffffe));
  tx.addOutput('miGhV4TuvQmwraNNLT2FkZgDKhRRxmCXU5', fundValue);
  tx.addOutput('mnCLLbtNuXfmHHbDunyjqj61o63XjxNCpG', skipValue);

  tx.inputs.forEach((input, index) => {
    tx.sign(index, key);
  });

  const txRaw = tx.buildIncomplete();

  console.log('txRaw toHex', txRaw.toHex());
}
