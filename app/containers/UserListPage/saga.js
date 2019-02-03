import { takeEvery, put, select } from 'redux-saga/effects';
import { DATA_KEY } from 'containers/App/constants';
import { GET_DATA, GET_DATA_SUCCESS, REMOVE_USER } from './constants';
import { makeSelectUsers } from './selectors';

function* getData() {
  const users = JSON.parse(localStorage.getItem(DATA_KEY));
  yield put({ type: GET_DATA_SUCCESS, payload: users || [] });
}

function* remove({ payload }) {
  const currentUsers = yield select(makeSelectUsers());
  const users = currentUsers.filter(user => user.id !== payload);
  localStorage.setItem(DATA_KEY, JSON.stringify(users));
  yield put({ type: GET_DATA_SUCCESS, payload: users || [] });
}

export default function* userListPageSaga() {
  yield takeEvery(GET_DATA, getData);
  yield takeEvery(REMOVE_USER, remove);
}
