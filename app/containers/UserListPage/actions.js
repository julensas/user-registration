/*
 *
 * UserListPage actions
 *
 */

import { GET_DATA, CLEAR_STATE, REMOVE_USER } from './constants';

export function getData() {
  return {
    type: GET_DATA,
  };
}

export function remove(id) {
  return {
    type: REMOVE_USER,
    payload: id,
  };
}

export function clearState() {
  return {
    type: CLEAR_STATE,
  };
}
