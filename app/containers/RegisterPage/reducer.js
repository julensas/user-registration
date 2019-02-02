/*
 *
 * RegisterPage reducer
 *
 */

import { fromJS } from 'immutable';
import { CLEAR_STATE } from './constants';

export const initialState = fromJS({});

function registerPageReducer(state = initialState, action) {
  switch (action.type) {
    case CLEAR_STATE:
      return initialState;
    default:
      return state;
  }
}

export default registerPageReducer;
