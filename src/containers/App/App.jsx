import React, { Component } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { hot } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import 'bootstrap/dist/css/bootstrap.css';
import '../../scss/app.scss';
import Router from './Router';
import store, { history } from './store';
import ScrollToTop from './ScrollToTop';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      loaded: false,
    };
  }

  componentDidMount() {
    window.addEventListener('load', () => {
      this.setState({ loading: false });
      setTimeout(() => this.setState({ loaded: true }), 500);
    });
  }

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history} >
          <ScrollToTop>
            <div>
              <Router />
            </div>
          </ScrollToTop>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default hot(module)(App);
