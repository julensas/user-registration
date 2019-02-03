/*
 *
 * EditPage reducer
 *
 */

import { fromJS } from 'immutable';
import { CLEAR_STATE, GET_USER_SUCCESS } from './constants';

export const initialState = fromJS({
  user: {},
});

function editPageReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_USER_SUCCESS:
      return state.set('user', fromJS(payload));
    case CLEAR_STATE:
      return initialState;
    default:
      return state;
  }
}

export default editPageReducer;
