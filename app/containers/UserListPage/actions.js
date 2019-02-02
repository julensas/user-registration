/*
 *
 * UserListPage actions
 *
 */

import { GET_DATA, CLEAR_STATE } from './constants';

export function getData() {
  return {
    type: GET_DATA,
  };
}

export function clearState() {
  return {
    type: CLEAR_STATE,
  };
}
