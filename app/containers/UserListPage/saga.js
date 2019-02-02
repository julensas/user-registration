import { takeEvery, put } from 'redux-saga/effects';
import { DATA_KEY } from 'containers/App/constants';
import { GET_DATA, GET_DATA_SUCCESS } from './constants';

function* getData() {
  const users = JSON.parse(localStorage.getItem(DATA_KEY));
  yield put({ type: GET_DATA_SUCCESS, payload: users || [] });
}

export default function* userListPageSaga() {
  yield takeEvery(GET_DATA, getData);
}
