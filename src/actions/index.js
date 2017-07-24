import * as type from '../constants/actionTypes';

export const authError = error => ({ type: type.AUTH_ERROR, payload: error });

export const signout = () => {
  localStorage.removeItem('token');
  return { type: type.UNAUTH_USER };
};

