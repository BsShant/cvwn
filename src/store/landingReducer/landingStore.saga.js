import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  fetchingLandingHeroSuccess,
  fetchingLandingHeroFailure,
  landingHeroSpinnerStops,
  landingHeroSpinnerStarts,
  landingDonateSpinnerStarts,
  landingDonateSpinnerStops,
  fetchingLandingDonateFailure,
  fetchingLandingDonateSuccess,
  landingAboutSpinnerStarts,
  fetchingLandingAboutSuccess,
  landingAboutSpinnerStops,
  fetchingLandingAboutFailure,
} from "./landingStore.actions";
import {
  fetchLandingAbout,
  fetchLandingDonate,
  fetchLandingHero,
} from "../../utils/api-calls/landingCalls";
import {
  START_FETCHING_LANDING_HERO,
  START_FETCHING_LANDING_HERO_WITH_SPINNER,
  START_FETCHING_LANDING_DONATE,
  START_FETCHING_LANDING_DONATE_WITH_SPINNER,
  START_FETCHING_LANDING_ABOUT,
  START_FETCHING_LANDING_ABOUT_WITH_SPINNER,
} from "./landingStore.actionTypes";

export function* landingHeroFetch() {
  try {
    let fetchData = yield fetchLandingHero();
    yield put(fetchingLandingHeroSuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingLandingHeroFailure(error));
  }
}

export function* landingHeroFetchWithSpinner() {
  try {
    yield put(landingHeroSpinnerStarts());
    let fetchData = yield fetchLandingHero();
    yield put(fetchingLandingHeroSuccess(fetchData.data));
    yield put(landingHeroSpinnerStops());
  } catch (error) {
    yield put(fetchingLandingHeroFailure(error));
  }
}

export function* startLandingHeroFetch() {
  yield takeLatest(START_FETCHING_LANDING_HERO, landingHeroFetch);
}

export function* startLandingHeroFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_LANDING_HERO_WITH_SPINNER,
    landingHeroFetchWithSpinner
  );
}

export function* landingAboutFetch() {
  try {
    let fetchData = yield fetchLandingAbout();
    yield put(fetchingLandingAboutSuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingLandingAboutFailure(error));
  }
}

export function* landingAboutFetchWithSpinner() {
  try {
    yield put(landingAboutSpinnerStarts());
    let fetchData = yield fetchLandingAbout();
    yield put(fetchingLandingAboutSuccess(fetchData.data));
    yield put(landingAboutSpinnerStops());
  } catch (error) {
    yield put(fetchingLandingAboutFailure(error));
  }
}

export function* startLandingAboutFetch() {
  yield takeLatest(START_FETCHING_LANDING_ABOUT, landingAboutFetch);
}

export function* startLandingAboutFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_LANDING_ABOUT_WITH_SPINNER,
    landingAboutFetchWithSpinner
  );
}

export function* landingDonateFetch() {
  try {
    let fetchData = yield fetchLandingDonate();
    yield put(fetchingLandingDonateSuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingLandingDonateFailure(error));
  }
}

export function* landingDonateFetchWithSpinner() {
  try {
    yield put(landingDonateSpinnerStarts());
    let fetchData = yield fetchLandingDonate();
    yield put(fetchingLandingDonateSuccess(fetchData.data));
    yield put(landingDonateSpinnerStops());
  } catch (error) {
    yield put(fetchingLandingDonateFailure(error));
  }
}

export function* startLandingDonateFetch() {
  yield takeLatest(START_FETCHING_LANDING_DONATE, landingDonateFetch);
}

export function* startLandingDonateFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_LANDING_DONATE_WITH_SPINNER,
    landingDonateFetchWithSpinner
  );
}

export function* landingMode() {
  yield all([
    call(startLandingHeroFetch),
    call(startLandingHeroFetchWithSpinner),
    call(startLandingAboutFetch),
    call(startLandingAboutFetchWithSpinner),
    call(startLandingDonateFetch),
    call(startLandingDonateFetchWithSpinner),
  ]);
}
