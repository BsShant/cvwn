import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  GET_USER,
  START_USER_AUTHENTICATION,
  START_USER_LOGOUT,
} from "./authActionTypes";
import {
  userAuthFailure,
  userAuthSuccess,
  userLogoutSuccess,
  userLogoutFailure,
  updateToken,
  updateUser
} from "./auth.action";
import { login, logout } from "../../store/utils/api-calls/authCalls";

export function* userLogin(values) {
  try {
    let fetchData = yield login(values.payload);
    yield put(updateUser(fetchData.user));
    yield put(updateToken(fetchData.token));
    yield put(userAuthSuccess());
  } catch (error) {
    yield put(userAuthFailure(error));
  }
}

export function* userLogout() {
  try {
    let fetchData = yield logout();
    yield put(updateUser(fetchData.user));
    yield put(updateToken(null));
    yield put(userLogoutSuccess());
  } catch (error) {
    yield put(userLogoutFailure(error));
  }
}

export function* startUserAuth() {
  yield takeLatest(START_USER_AUTHENTICATION, userLogin);
}

export function* startUserLogout() {
  yield takeLatest(START_USER_LOGOUT, userLogout);
}

export function* authMode() {
  yield all([call(startUserAuth), call(startUserLogout)]);
}
