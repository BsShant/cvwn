import { takeLatest, call, put, all } from "redux-saga/effects";
import {
  fetchingAnnouncementSuccess,
  fetchingAnnouncementFailure,
  announcementSpinnerStarts,
  announcementSpinnerStops,
  fetchingVolunteerSuccess,
  fetchingVolunteerFailure,
  volunteerSpinnerStarts,
  volunteerSpinnerStops,
  fetchingDonationStarts,
  fetchingDonationFailure,
  donationSpinnerStarts,
  donationSpinnerStops,
  fetchingDonationSuccess,
  fetchingVolunteerHeroSuccess,
  fetchingVolunteerHeroFailure,
  volunteerHeroSpinnerStops,
  volunteerHeroSpinnerStarts,
  fetchingDonationHeroFailure,
  fetchingDonationHeroSuccess,
  donationHeroSpinnerStops,
  donationHeroSpinnerStarts,
} from "./getInvolvedStore.actions";
import {
  fetchAnnouncement,
  fetchVolunteer,
  fetchDonate,
  fetchVolunteerHero,
  fetchDonateHero,
} from "../../utils/api-calls/getInvolvedCalls";
import {
  START_FETCHING_ANNOUNCEMENT,
  START_FETCHING_ANNOUNCEMENT_WITH_SPINNER,
  START_FETCHING_VOLUNTEER,
  START_FETCHING_VOLUNTEER_WITH_SPINNER,
  START_FETCHING_DONATION,
  START_FETCHING_DONATION_WITH_SPINNER,
  START_FETCHING_VOLUNTEER_HERO,
  START_FETCHING_VOLUNTEER_HERO_WITH_SPINNER,
  START_FETCHING_DONATION_HERO_WITH_SPINNER,
  START_FETCHING_DONATION_HERO,
} from "./getInvolvedStore.actionTypes";

export function* announcementFetch() {
  try {
    let fetchData = yield fetchAnnouncement();
    yield put(fetchingAnnouncementSuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingAnnouncementFailure(error));
  }
}

export function* announcementFetchWithSpinner() {
  try {
    yield put(announcementSpinnerStarts());
    let fetchData = yield fetchAnnouncement();
    yield put(fetchingAnnouncementSuccess(fetchData.data));
    yield put(announcementSpinnerStops());
  } catch (error) {
    yield put(fetchingAnnouncementFailure(error));
  }
}

export function* startAnnouncementFetch() {
  yield takeLatest(START_FETCHING_ANNOUNCEMENT, announcementFetch);
}

export function* startAnnouncementFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_ANNOUNCEMENT_WITH_SPINNER,
    announcementFetchWithSpinner
  );
}

export function* volunteerFetch() {
  try {
    let fetchData = yield fetchVolunteer();
    yield put(fetchingVolunteerSuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingVolunteerFailure(error));
  }
}

export function* volunteerFetchWithSpinner() {
  try {
    yield put(volunteerSpinnerStarts());
    let fetchData = yield fetchVolunteer();
    yield put(fetchingVolunteerSuccess(fetchData.data));
    yield put(volunteerSpinnerStops());
  } catch (error) {
    yield put(fetchingVolunteerFailure(error));
  }
}

export function* startVolunteerFetch() {
  yield takeLatest(START_FETCHING_VOLUNTEER, volunteerFetch);
}

export function* startVolunteerFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_VOLUNTEER_WITH_SPINNER,
    volunteerFetchWithSpinner
  );
}

export function* volunteerHeroFetch() {
  try {
    let fetchData = yield fetchVolunteerHero();
    yield put(fetchingVolunteerHeroSuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingVolunteerHeroFailure(error));
  }
}

export function* volunteerHeroFetchWithSpinner() {
  try {
    yield put(volunteerHeroSpinnerStarts());
    let fetchData = yield fetchVolunteerHero();
    yield put(fetchingVolunteerHeroSuccess(fetchData.data));
    yield put(volunteerHeroSpinnerStops());
  } catch (error) {
    yield put(fetchingVolunteerHeroFailure(error));
  }
}

export function* startVolunteerHeroFetch() {
  yield takeLatest(START_FETCHING_VOLUNTEER_HERO, volunteerHeroFetch);
}

export function* startVolunteerHeroFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_VOLUNTEER_HERO_WITH_SPINNER,
    volunteerHeroFetchWithSpinner
  );
}

export function* donationFetch() {
  try {
    let fetchData = yield fetchDonate();
    yield put(fetchingDonationSuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingDonationFailure(error));
  }
}

export function* donationFetchWithSpinner() {
  try {
    yield put(donationSpinnerStarts());
    let fetchData = yield fetchDonate();
    yield put(fetchingDonationSuccess(fetchData.data));
    yield put(donationSpinnerStops());
  } catch (error) {
    yield put(fetchingDonationFailure(error));
  }
}

export function* startDonationFetch() {
  yield takeLatest(START_FETCHING_DONATION, donationFetch);
}

export function* startDonationFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_DONATION_WITH_SPINNER,
    donationFetchWithSpinner
  );
}


export function* donationHeroFetch() {
  try {
    let fetchData = yield fetchDonateHero();
    yield put(fetchingDonationHeroSuccess(fetchData.data));
  } catch (error) {
    yield put(fetchingDonationHeroFailure(error));
  }
}

export function* donationHeroFetchWithSpinner() {
  try {
    yield put(donationHeroSpinnerStarts());
    let fetchData = yield fetchDonateHero();
    yield put(fetchingDonationHeroSuccess(fetchData.data));
    yield put(donationHeroSpinnerStops());
  } catch (error) {
    yield put(fetchingDonationHeroFailure(error));
  }
}

export function* startDonationHeroFetch() {
  yield takeLatest(START_FETCHING_DONATION_HERO, donationHeroFetch);
}

export function* startDonationHeroFetchWithSpinner() {
  yield takeLatest(
    START_FETCHING_DONATION_HERO_WITH_SPINNER,
    donationHeroFetchWithSpinner
  );
}



export function* getInvolvedMode() {
  yield all([
    call(startAnnouncementFetch),
    call(startAnnouncementFetchWithSpinner),
    call(startVolunteerFetch),
    call(startVolunteerFetchWithSpinner),
    call(startVolunteerHeroFetch),
    call(startVolunteerHeroFetchWithSpinner),
    call(startDonationFetch),
    call(startDonationFetchWithSpinner),
    call(startDonationHeroFetch),
    call(startDonationHeroFetchWithSpinner),
  ]);
}
