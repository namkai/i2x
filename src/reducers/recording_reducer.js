import * as type from '../constants/actionTypes';

const initialState = {
  list: [],
  pending: false,
  error: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case type.FETCH_RECORDINGS_STARTED:
      return { ...state, pending: true };
    case type.FETCH_RECORDINGS_COMPLETED:
      return { ...state, list: action.payload, pending: false };
		case type.FETCH_RECORDINGS_FAILED:
      return { ...state, error: action.payload, pending: false };
    default:
      return state;
  }
}
