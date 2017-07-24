import axios from 'axios';
import * as type from '../constants/actionTypes';
import { history } from '../pages';

export const signin = ({ email, password }) => dispatch =>
  axios.post(`https://i2x-challenge.herokuapp.com/core/login/`, { email, password })
    .then((response) => {
      // If request is good...
      // - Update state to indicate user is authenticated
      dispatch({ type: type.AUTH_USER });
      // - Save the JWT token
      localStorage.setItem('token', response.data.token);
      // - redirect to the route '/feature'
      history.push('/feature');
    })
    .catch(() => dispatch(authError('Bad Login Info')));

export const authError = error => ({ type: type.AUTH_ERROR, payload: error });

export const signout = () => {
  localStorage.removeItem('token');
  return { type: type.UNAUTH_USER };
};

export const fetchRecordingList = () => dispatch => {
  dispatch({ type: type.FETCH_RECORDINGS_STARTED });
  return axios
    .get(`https://i2x-challenge.herokuapp.com/ai/recording/list/`, {
      headers: { authorization: `JWT ${localStorage.getItem('token')}` }
    })
    .then(response => dispatch({ type: type.FETCH_RECORDINGS_COMPLETED, payload: response.data.results }))
//    .catch(error => dispatch({ type: type.FETCH_RECORDINGS_FAILED, payload: error.data }));
};
