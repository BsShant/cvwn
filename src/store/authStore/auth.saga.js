import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  GET_USER,
  START_SUBSCRIBER_AUTHENTICATION,
  START_SUBSCRIBER_LOGOUT,
  START_USER_AUTHENTICATION,
  START_USER_LOGOUT,
} from "./authActionTypes";
import {
  userAuthFailure,
  userAuthSuccess,
  userLogoutSuccess,
  userLogoutFailure,
  updateToken,
  updateUser,
  updateSubscriber,
  updateSubscriberToken,
  subscriberAuthSuccess,
  subscriberAuthFailure,
  subscriberLogoutFailure,
  subscriberLogoutSuccess,
} from "./auth.action";
import { login, logout, subscriberCheck } from "../../utils/api-calls/authCalls";

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

export function* subscriberLogin(values) {
  try {
    let fetchData = yield subscriberCheck(values.payload);
    yield put(updateSubscriber(fetchData));
    yield put(subscriberAuthSuccess());
  } catch (error) {
    yield put(subscriberAuthFailure(error));
  }
}

export function* userLogout() {
  try {
    let fetchData = yield logout();
    yield put(updateUser(null));
    yield put(updateToken(null));
    yield put(userLogoutSuccess());
  } catch (error) {
    yield put(userLogoutFailure(error));
  }
}

export function* subscriberLogout() {
  try {
    let fetchData = yield logout();
    yield put(updateSubscriber(fetchData.user));
    yield put(subscriberLogoutSuccess());
  } catch (error) {
    yield put(subscriberLogoutFailure(error));
  }
}

export function* startUserAuth() {
  yield takeLatest(START_USER_AUTHENTICATION, userLogin);
}

export function* startUserLogout() {
  yield takeLatest(START_USER_LOGOUT, userLogout);
}

export function* startSubscriberAuth() {
  yield takeLatest(START_SUBSCRIBER_AUTHENTICATION, subscriberLogin);
}

export function* startSubscriberLogout() {
  yield takeLatest(START_SUBSCRIBER_LOGOUT, subscriberLogout);
}

export function* authMode() {
  yield all([
    call(startUserAuth),
    call(startUserLogout),
    call(startSubscriberAuth),
    call(startSubscriberLogout),
  ]);
}
