import {
  URL_PARAMS_PARSED
} from '../actions/parseURLParams';

const initialState = {
  params: {}
};

export default function (state = initialState, action) {
  switch (action.type) {
    case URL_PARAMS_PARSED:
      return { ...state, params: action.params };

    default:
      return state;
  }
}
