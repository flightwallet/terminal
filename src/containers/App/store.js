import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createRootReducer from '../../redux/reducers/index';


export const history = createBrowserHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  createRootReducer(history),
  compose(applyMiddleware(middleware)),
);

export default store;
