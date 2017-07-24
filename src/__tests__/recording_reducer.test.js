import * as type from '../constants/actionTypes';
import recordingReducer from '../reducers/recording_reducer';

describe('recordingReducer', () => {
  it('returns an empty object if passed in state that is undefined', () => {
    const nextState = recordingReducer(undefined, {});
    expect(nextState).toEqual({});
  });

  it('returns the exact same state given an unknown type (i.e., does not modify the state)', () => {
    const prevState = {};
    const nextState = recordingReducer(prevState, { type: 'UNKNOWN' });
    expect(nextState).toBe(prevState);
  });

  it('returns a new state with the authorization set to true', () => {
    const prevState = { list: [], pending: false, error: null };
    const nextState = recordingReducer(prevState, { type: type.FETCH_RECORDINGS_COMPLETED, payload: [{}, {}] });
    expect(nextState).not.toBe(prevState);
    expect(nextState).toEqual({ list: [{}, {}], pending: false, error: null });
  });
  it('returns a new state with the authorization set to true', () => {
    const prevState = { list: [], pending: false, error: null };
    const nextState = recordingReducer(prevState, { type: type.FETCH_RECORDINGS_STARTED });
    expect(nextState).not.toBe(prevState);
    expect(nextState).toEqual({ list: [], pending: true, error: null });
  });
});
