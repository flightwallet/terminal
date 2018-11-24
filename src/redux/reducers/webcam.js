import {
  WEBCAM_INIT,
  SHOW_QR_WEBCAM,
  HIDE_QR_WEBCAM,
} from '../actions/webcam';


const initialState = {
  isVisible: false,
  scanner: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case WEBCAM_INIT:
      return { ...state, scanner: action.scanner };

    case SHOW_QR_WEBCAM:
      return { ...state, isVisible: true };

    case HIDE_QR_WEBCAM:
      return { ...state, isVisible: false };

    default:
      return state;
  }
}
