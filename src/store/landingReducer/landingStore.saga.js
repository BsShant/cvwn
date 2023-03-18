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
  fetchingMemberSuccess,
  fetchingMemberFailure,
  memberSpinnerStops,
  memberSpinnerStarts,
  partnerSpinnerStarts,
  partnerSpinnerStops,
  fetchingPartnerFailure,
  fetchingPartnerSuccess,
  fetchingLandingSliderSuccess,
  fetchingLandingSliderFailure,
  landingSliderSpinnerStops,
  landingSliderSpinnerStarts,
} from "./landingStore.actions";
import {
  fetchLandingAbout,
  fetchLandingDonate,
  fetchLandingHero,
  fetchLandingSlider,
  fetchMember,
  fetchPartner,
} from "../../utils/api-calls/landingCalls";
import {
  START_FETCHING_LANDING_HERO,
  START_FETCHING_LANDING_HERO_WITH_SPINNER,
  START_FETCHING_LANDING_DONATE,
  START_FETCHING_LANDING_DONATE_WITH_SPINNER,
  START_FETCHING_LANDING_ABOUT,
  START_FETCHING_LANDING_ABOUT_WITH_SPINNER,
  START_FETCHING_MEMBER,
  START_FETCHING_MEMBER_WITH_SPINNER,
  START_FETCHING_PARTNER,
  START_FETCHING_PARTNER_WITH_SPINNER,
  START_FETCHING_LANDING_SLIDER,
  START_FETCHING_LANDING_SLIDER_WITH_SPINNER,
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

export function* landingSliderFetch() {
  try {
    let fetchData = yield fetchLandingSlider();
    yield put(fetchingLandingSliderSuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingLandingSliderFailure(error));
  }
}

export function* landingSliderFetchWithSpinner() {
  try {
    yield put(landingSliderSpinnerStarts());
    let fetchData = yield fetchLandingSlider();
    yield put(fetchingLandingSliderSuccess(fetchData.data));
    yield put(landingSliderSpinnerStops());
  } catch (error) {
    yield put(fetchingLandingSliderFailure(error));
  }
}

export function* startLandingSliderFetch() {
  yield takeLatest(START_FETCHING_LANDING_SLIDER, landingSliderFetch);
}

export function* startLandingSliderFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_LANDING_SLIDER_WITH_SPINNER,
    landingSliderFetchWithSpinner
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

export function* memberFetch() {
  try {
    let fetchData = yield fetchMember();
    yield put(fetchingMemberSuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingMemberFailure(error));
  }
}

export function* memberFetchWithSpinner() {
  try {
    yield put(memberSpinnerStarts());
    let fetchData = yield fetchMember();
    yield put(fetchingMemberSuccess(fetchData.data));
    yield put(memberSpinnerStops());
  } catch (error) {
    yield put(fetchingMemberFailure(error));
  }
}

export function* startMemberFetch() {
  yield takeLatest(START_FETCHING_MEMBER, memberFetch);
}

export function* startMemberFetchWithSpinner() {
  yield takeLatest(START_FETCHING_MEMBER_WITH_SPINNER, memberFetchWithSpinner);
}

export function* partnerFetch() {
  try {
    let fetchData = yield fetchPartner();
    yield put(fetchingPartnerSuccess(fetchData));
  } catch (error) {
    yield put(fetchingPartnerFailure(error));
  }
}

export function* partnerFetchWithSpinner() {
  try {
    yield put(partnerSpinnerStarts());
    let fetchData = yield fetchPartner();
    yield put(fetchingPartnerSuccess(fetchData));
    yield put(partnerSpinnerStops());
  } catch (error) {
    yield put(fetchingPartnerFailure(error));
  }
}

export function* startPartnerFetch() {
  yield takeLatest(START_FETCHING_PARTNER, partnerFetch);
}

export function* startPartnerFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_PARTNER_WITH_SPINNER,
    partnerFetchWithSpinner
  );
}

export function* landingMode() {
  yield all([
    call(startLandingHeroFetch),
    call(startLandingHeroFetchWithSpinner),

    call(startLandingSliderFetch),
    call(startLandingSliderFetchWithSpinner),

    call(startLandingAboutFetch),
    call(startLandingAboutFetchWithSpinner),
    call(startLandingDonateFetch),
    call(startLandingDonateFetchWithSpinner),
    call(startMemberFetch),
    call(startMemberFetchWithSpinner),

    call(startPartnerFetch),
    call(startPartnerFetchWithSpinner),
  ]);
}
