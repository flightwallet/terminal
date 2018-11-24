import {
  SHOW_QR_CODE,
  HIDE_QR_CODE,
  GENERATE_QR_CODE,
} from '../actions/generateQr';


const initialState = {
  show: false,
  options: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GENERATE_QR_CODE:
      return { ...state, show: true, options: action.options };

    case SHOW_QR_CODE:
      return { ...state, show: true };

    case HIDE_QR_CODE:
      return { ...state, show: false };

    default:
      return state;
  }
}
