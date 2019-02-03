import { clearState } from '../actions';
import { CLEAR_STATE } from '../constants';

describe('EditPage actions', () => {
  describe('Default Action', () => {
    it('has a type of DEFAULT_ACTION', () => {
      const expected = {
        type: CLEAR_STATE,
      };
      expect(clearState()).toEqual(expected);
    });
  });
});
