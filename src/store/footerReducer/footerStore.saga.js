import { takeLatest, call, put, all } from "redux-saga/effects";

import {
  fetchingFooterAboutFailure,
  fetchingFooterAboutSuccess,
  fetchingFooterContactFailure,
  fetchingFooterContactSuccess,
  fetchingFooterLinksFailure,
  fetchingFooterLinksSuccess,
  footerAboutSpinnerStarts,
  footerAboutSpinnerStops,
  footerContactSpinnerStarts,
  footerContactSpinnerStops,
  footerLinksSpinnerStarts,
  footerLinksSpinnerStops,
} from "./footerStore.actions";
import {
  START_FETCHING_FOOTER_ABOUT,
  START_FETCHING_FOOTER_ABOUT_WITH_SPINNER,
  START_FETCHING_FOOTER_CONTACT,
  START_FETCHING_FOOTER_CONTACT_WITH_SPINNER,
  START_FETCHING_FOOTER_LINKS, 
  START_FETCHING_FOOTER_LINKS_WITH_SPINNER,
} from "./footerStore.actionTypes";
import { fetchFooterAbout, fetchFooterContact, fetchFooterLinks} from '../../utils/api-calls/footerCalls'
export function* footerAboutFetch() {
  try {
    let fetchData = yield fetchFooterAbout();
    yield put(fetchingFooterAboutSuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingFooterAboutFailure(error));
  }
}

export function* footerAboutFetchWithSpinner() {
  try {
    yield put(footerAboutSpinnerStarts());
    let fetchData = yield fetchFooterAbout();
    yield put(fetchingFooterAboutSuccess(fetchData.data));
    yield put(footerAboutSpinnerStops());
  } catch (error) {
    yield put(fetchingFooterAboutFailure(error));
  }
}

export function* startFooterAboutFetch() {
  yield takeLatest(START_FETCHING_FOOTER_ABOUT, footerAboutFetch);
}

export function* startFooterAboutFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_FOOTER_ABOUT_WITH_SPINNER,
    footerAboutFetchWithSpinner
  );
}

export function* footerLinksFetch() {
  try {
    let fetchData = yield fetchFooterLinks();
    yield put(fetchingFooterLinksSuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingFooterLinksFailure(error));
  }
}

export function* footerLinksFetchWithSpinner() {
  try {
    yield put(footerLinksSpinnerStarts());
    let fetchData = yield fetchFooterLinks();
    yield put(fetchingFooterLinksSuccess(fetchData.data));
    yield put(footerLinksSpinnerStops());
  } catch (error) {
    yield put(fetchingFooterLinksFailure(error));
  }
}

export function* startFooterLinksFetch() {
  yield takeLatest(START_FETCHING_FOOTER_LINKS, footerLinksFetch);
}

export function* startFooterLinksFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_FOOTER_LINKS_WITH_SPINNER,
    footerLinksFetchWithSpinner
  );
}

export function* footerContactFetch() {
  try {
    let fetchData = yield fetchFooterContact();
    yield put(fetchingFooterContactSuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingFooterContactFailure(error));
  }
}

export function* footerContactFetchWithSpinner() {
  try {
    yield put(footerContactSpinnerStarts());
    let fetchData = yield fetchFooterContact();
    yield put(fetchingFooterContactSuccess(fetchData.data));
    yield put(footerContactSpinnerStops());
  } catch (error) {
    yield put(fetchingFooterContactFailure(error));
  }
}

export function* startFooterContactFetch() {
  yield takeLatest(START_FETCHING_FOOTER_CONTACT, footerContactFetch);
}

export function* startFooterContactFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_FOOTER_CONTACT_WITH_SPINNER,
    footerContactFetchWithSpinner
  );
}

export function* footerMode() {
  yield all([
    call(startFooterAboutFetch),
    call(startFooterAboutFetchWithSpinner),
    call(startFooterLinksFetch),
    call(startFooterLinksFetchWithSpinner),
    call(startFooterContactFetch),
    call(startFooterContactFetchWithSpinner),
  ]);
}
