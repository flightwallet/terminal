import React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import Layout from '../Layout/index';
import MainWrapper from './MainWrapper';

import ReadQr from '../ReadQr';
import DecodeTx from '../DecodeTx/';
import GenerateInvoice from '../GenerateInvoice';

const Pages = () => (
  <Switch>
    <Route path="/terminal/read" component={ReadQr} />

    <Route path="/terminal/create-invoice/:address-:amount" component={GenerateInvoice} />
    <Route path="/terminal/create-invoice" component={GenerateInvoice} />

    <Route path="/terminal/decode-tx/:rawTx" component={DecodeTx} />
    <Route path="/terminal/decode-tx" component={DecodeTx} />

    <Route path="/terminal/broadcast-tx/" component={ReadQr} />
  </Switch>
);

const wrappedRoutes = () => (
  <div>
    <Layout />
    <div className="container__wrap">
      <Route path="/" component={Pages} />
    </div>
  </div>
);

const Router = () => (
  <MainWrapper>
    <main>
      <Switch>
        <Route path="/" component={wrappedRoutes} />
      </Switch>
    </main>
  </MainWrapper>
);

export default Router;
