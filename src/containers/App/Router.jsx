import React from 'react';
import { Route } from 'react-router';
import { Switch } from 'react-router-dom';
import Layout from '../Layout/index';
import MainWrapper from './MainWrapper';

import ExamplePageOne from '../Example/index';
import ExamplePageTwo from '../ExampleTwo/index';
import GenerateInvoice from '../GenerateInvoice';

const Pages = () => (
  <Switch>
    <Route path="/read" component={ExamplePageOne} />

    <Route path="/create-invoice/:address-:amount" component={GenerateInvoice} />
    <Route path="/create-invoice" component={GenerateInvoice} />

    <Route path="/decode/tx:rawTx" component={ExamplePageTwo} />
    <Route path="/decode/tx" component={ExamplePageTwo} />
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
