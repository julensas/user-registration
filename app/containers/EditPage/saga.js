import { call, put, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { geocode, parseAddress, getLatLng } from 'utils/geocode';
import {
  stopSubmit,
  change,
  startSubmit,
  setSubmitSucceeded,
} from 'redux-form';
import { push } from 'connected-react-router';
import { DATA_KEY } from 'containers/App/constants';
import {
  EDIT_USER,
  GET_ADDRESS,
  GET_USER,
  GET_USER_SUCCESS,
  ERROR,
} from './constants';

function* edit({ payload }) {
  yield put(startSubmit('user'));
  const { city, street, streetNumber } = payload.address;
  try {
    const geoResults = yield call(geocode, {
      address: `${city} ${street} ${streetNumber}`,
    });
    if (!geoResults.length > 0) {
      yield put(stopSubmit('user', { address: { city: 'Invalid Address' } }));
    } else {
      const coordinates = yield call(getLatLng, geoResults[0]);
      yield put(change('user', 'coordinates', coordinates));
      yield put(stopSubmit('user'));
      yield put(setSubmitSucceeded('user'));
      yield call(delay, 1000);
      const user = { ...payload, coordinates };
      const exitingUsers = JSON.parse(localStorage.getItem(DATA_KEY));
      if (!exitingUsers || exitingUsers.length === 0) {
        localStorage.setItem(DATA_KEY, JSON.stringify([user]));
      } else {
        const index = exitingUsers.findIndex(u => u.id === user.id);
        const users = [
          ...exitingUsers.slice(0, index),
          user,
          ...exitingUsers.slice(index + 1),
        ];
        localStorage.setItem(DATA_KEY, JSON.stringify(users));
      }
      yield put(push('/list'));
    }
  } catch (e) {
    yield put(stopSubmit('user', { address: { city: 'Invalid Address' } }));
  }
}

function* getUserById({ payload }) {
  const users = JSON.parse(localStorage.getItem(DATA_KEY));
  const selectedUser = users.find(user => user.id === payload);
  yield put({ type: GET_USER_SUCCESS, payload: selectedUser });
}

function* getAddress({ payload }) {
  try {
    const geoResults = yield call(geocode, { location: payload });
    if (!geoResults.length > 0) {
      yield put(stopSubmit('user', { address: { city: 'Invalid Address' } }));
    } else {
      const address = parseAddress(geoResults[0]);
      yield put(change('user', 'address.city', address.city));
      yield put(change('user', 'address.street', address.street));
      yield put(change('user', 'address.streetNumber', address.streetNumber));
      yield put(change('user', 'address.zip', address.zip));
    }
  } catch (e) {
    yield put({ type: ERROR });
  }
}

export default function* editPageSaga() {
  yield takeEvery(EDIT_USER, edit);
  yield takeEvery(GET_ADDRESS, getAddress);
  yield takeEvery(GET_USER, getUserById);
}
