/*
 *
 * UserListPage reducer
 *
 */

import { fromJS } from 'immutable';
import { GET_DATA_SUCCESS, CLEAR_STATE } from './constants';

export const initialState = fromJS({
  data: [],
});

function userListPageReducer(state = initialState, { type, payload }) {
  switch (type) {
    case GET_DATA_SUCCESS:
      return state.set('data', fromJS(payload));
    case CLEAR_STATE:
      return initialState;
    default:
      return state;
  }
}

export default userListPageReducer;
