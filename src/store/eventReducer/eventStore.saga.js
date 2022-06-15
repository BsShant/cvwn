import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  START_FETCHING_EVENT,
  START_FETCHING_EVENT_WITH_SPINNER,
  START_FETCHING_REQUEST,
  START_FETCHING_REQUEST_WITH_SPINNER,
} from "./eventStore.actionTypes";
import { eventSpinnerStarts, eventSpinnerStops, fetchingEventFailure, fetchingEventSuccess, fetchingRequestFailure, fetchingRequestSuccess, requestSpinnerStarts, requestSpinnerStops } from "./eventStore.actions";
import { fetchEvent, fetchRequest } from "../../utils/api-calls/eventCalls";

export function* eventFetch() {
  try {
    let fetchData = yield fetchEvent();
    yield put(fetchingEventSuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingEventFailure(error));
  }
}

export function* eventFetchWithSpinner() {
  try {
    yield put(eventSpinnerStarts());
    let fetchData = yield fetchEvent();
    yield put(fetchingEventSuccess(fetchData.data));
    yield put(eventSpinnerStops());
  } catch (error) {
    yield put(fetchingEventFailure(error));
    // yield put(publicationSpinnerStops())
  }
}


export function* requestFetch() {
  try {
    let fetchData = yield fetchRequest();
    yield put(fetchingRequestSuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingRequestFailure(error));
  }
}

export function* requestFetchWithSpinner() {
  try {
    yield put(requestSpinnerStarts());
    let fetchData = yield fetchRequest();
    yield put(fetchingRequestSuccess(fetchData.data));
    yield put(requestSpinnerStops());
  } catch (error) {
    yield put(fetchingRequestFailure(error));
    // yield put(publicationSpinnerStops())
  }
}

export function* startRequestFetch() {
  yield takeLatest(START_FETCHING_REQUEST, requestFetch);
}

export function* startRequestFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_REQUEST_WITH_SPINNER,
    requestFetchWithSpinner
  );
}


export function* startEventFetch() {
  yield takeLatest(START_FETCHING_EVENT, eventFetch);
}

export function* startEventFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_EVENT_WITH_SPINNER,
    eventFetchWithSpinner
  );
}

export function* eventMode() {
  yield all([
    call(startEventFetch),
    call(startEventFetchWithSpinner),
    call(startRequestFetch),
    call(startRequestFetchWithSpinner),
  ]);
}
