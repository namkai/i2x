import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import auth from './auth_reducer';
import recording from './recording_reducer';

export default combineReducers({
  form,
  auth,
  recording,
});
