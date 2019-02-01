import { fromJS } from 'immutable';
import editPageReducer from '../reducer';

describe('editPageReducer', () => {
  it('returns the initial state', () => {
    expect(editPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
