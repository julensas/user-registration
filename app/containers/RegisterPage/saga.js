import { call, put, takeEvery } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { geocode, parseAddress, getLatLng } from 'utils/geocode';
import genGuid from 'utils/guid';
import {
  stopSubmit,
  change,
  startSubmit,
  setSubmitSucceeded,
} from 'redux-form';
import { push } from 'connected-react-router';
import { DATA_KEY } from 'containers/App/constants';
import { REGISTER, GET_ADDRESS } from './constants';

function* register({ payload }) {
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
      const user = { ...payload, coordinates, id: genGuid() };
      const users = JSON.parse(localStorage.getItem(DATA_KEY));
      if (!users) {
        localStorage.setItem(DATA_KEY, JSON.stringify([user]));
      } else {
        users.push(user);
        localStorage.setItem(DATA_KEY, JSON.stringify(users));
      }
      yield put(push('/list'));
    }
  } catch (e) {
    yield put(stopSubmit('user', { address: { city: 'Invalid Address' } }));
  }
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
    console.log(e);
  }
}

export default function* registerPageSaga() {
  yield takeEvery(REGISTER, register);
  yield takeEvery(GET_ADDRESS, getAddress);
}
