import * as type from '../constants/actionTypes';
import authReducer from '../reducers/auth_reducer';

describe('authReducer', () => {
  it('returns an empty object if passed in state that is undefined', () => {
    const nextState = authReducer(undefined, {});
    expect(nextState).toEqual({});
  });

  it('returns the exact same state given an unknown type (i.e., does not modify the state)', () => {
    const prevState = {};
    const nextState = authReducer(prevState, { type: 'UNKNOWN' });
    expect(nextState).toBe(prevState);
  });

  it('returns a new state with the authorization set to true', () => {
    const prevState = {};
    const nextState = authReducer(prevState, { type: type.AUTH_USER });
    expect(nextState).not.toBe(prevState);
    expect(nextState).toEqual({ authenticated: true });
  });
  it('returns a new state with the authorization set to true', () => {
    const prevState = {authenticated: true};
    const nextState = authReducer(prevState, { type: type.UNAUTH_USER });
    expect(nextState).not.toBe(prevState);
    expect(nextState).toEqual({ authenticated: false });
  });
});
