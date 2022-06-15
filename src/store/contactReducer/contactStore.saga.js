import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  fetchingContactFailure,
  contactSpinnerStarts,
  contactSpinnerStops,
  fetchingContactSuccess,
} from "./contactStore.actions";

import {
  START_FETCHING_CONTACT,
  START_FETCHING_CONTACT_WITH_SPINNER,
} from "./contactStore.actionTypes";
import { fetchContact } from "../../utils/api-calls/contactCalls";

export function* contactFetch() {
  try {
    let fetchData = yield fetchContact();
    yield put(fetchingContactSuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingContactFailure(error));
  }
}

export function* contactFetchWithSpinner() {
  try {
    yield put(contactSpinnerStarts());
    let fetchData = yield fetchContact();
    yield put(fetchingContactSuccess(fetchData.data));
    yield put(contactSpinnerStops());
  } catch (error) {
    yield put(fetchingContactFailure(error));
  }
}

export function* startContactFetch() {
  yield takeLatest(START_FETCHING_CONTACT, contactFetch);
}

export function* startContactFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_CONTACT_WITH_SPINNER,
    contactFetchWithSpinner
  );
}

export function* contactMode() {
  yield all([call(startContactFetch), call(startContactFetchWithSpinner)]);
}
