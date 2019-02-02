/*
 *
 * RegisterPage actions
 *
 */

import { CLEAR_STATE, REGISTER, GET_ADDRESS } from './constants';

export function clearState() {
  return {
    type: CLEAR_STATE,
  };
}

export function register(data) {
  return {
    type: REGISTER,
    payload: data,
  };
}

export function getAddressByLatLng(data) {
  return {
    type: GET_ADDRESS,
    payload: data,
  };
}
