import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer as reduxFormReducer } from 'redux-form';

import webcam from './webcam';
import generateQr from './generateQr';
import themeReducer from './themeReducer';
import sidebarReducer from './sidebarReducer';


export default history => combineReducers({
  router: connectRouter(history),
  form: reduxFormReducer,
  theme: themeReducer,
  sidebar: sidebarReducer,
  qrcode: generateQr,
  camera: webcam,
});
