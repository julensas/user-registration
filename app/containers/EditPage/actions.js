/*
 *
 * EditPage actions
 *
 */

import { CLEAR_STATE, EDIT_USER, GET_ADDRESS, GET_USER } from './constants';

export function clearState() {
  return {
    type: CLEAR_STATE,
  };
}

export function edit(data) {
  return {
    type: EDIT_USER,
    payload: data,
  };
}

export function getUserById(id) {
  return {
    type: GET_USER,
    payload: id,
  };
}

export function getAddressByLatLng(data) {
  return {
    type: GET_ADDRESS,
    payload: data,
  };
}
