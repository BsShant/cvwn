import { takeLatest, call, put, all } from "redux-saga/effects";
import {

  fetchingProjectSuccess,
  fetchingProjectFailure,
  projectSpinnerStarts,
  projectSpinnerStops,
} from "./projectStore.actions";
import { fetchProject } from "../../utils/api-calls/projectCalls";
import {
  START_FETCHING_PROJECT,
  START_FETCHING_PROJECT_WITH_SPINNER,
} from "./projectStore.actionTypes";

export function* projectFetch() {
  try {
    let fetchData = yield fetchProject();
    yield put(fetchingProjectSuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingProjectFailure(error));
  }
}

export function* projectFetchWithSpinner() {
  try {
    yield put(projectSpinnerStarts());
    let fetchData = yield fetchProject();
    yield put(fetchingProjectSuccess(fetchData.data));
    yield put(projectSpinnerStops());
  } catch (error) {
    yield put(fetchingProjectFailure(error));
    // yield put(publicationSpinnerStops())
  }
}

export function* startProjectFetch() {
  yield takeLatest(START_FETCHING_PROJECT, projectFetch);
}

export function* startProjectFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_PROJECT_WITH_SPINNER,
    projectFetchWithSpinner
  );
}

export function* projectMode() {
  yield all([
    call(startProjectFetch),
    call(startProjectFetchWithSpinner),
  ]);
}
