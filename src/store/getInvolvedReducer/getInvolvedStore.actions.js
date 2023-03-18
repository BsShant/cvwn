import {
  FETCHING_VOLUNTEER_FAILURE,
  FETCHING_VOLUNTEER_SUCCESS,
  FETCHING_DONATION_FAILURE,
  FETCHING_DONATION_SUCCESS,
  FETCHING_ANNOUNCEMENT_FAILURE,
  FETCHING_ANNOUNCEMENT_SUCCESS,
  VOLUNTEER_SPINNER_STARTS,
  VOLUNTEER_SPINNER_STOPS,
  DONATION_SPINNER_STARTS,
  ANNOUNCEMENT_SPINNER_STARTS,
  ANNOUNCEMENT_SPINNER_STOPS,
  START_FETCHING_VOLUNTEER,
  START_FETCHING_VOLUNTEER_WITH_SPINNER,
  START_FETCHING_DONATION,
  START_FETCHING_DONATION_WITH_SPINNER,
  START_FETCHING_ANNOUNCEMENT,
  START_FETCHING_ANNOUNCEMENT_WITH_SPINNER,
  DONATION_SPINNER_STOPS,
  START_FETCHING_DONATION_HERO,
  START_FETCHING_DONATION_HERO_WITH_SPINNER,
  FETCHING_DONATION_HERO_SUCCESS,
  FETCHING_DONATION_HERO_FAILURE,
  DONATION_HERO_SPINNER_STARTS,
  DONATION_HERO_SPINNER_STOPS,
  VOLUNTEER_HERO_SPINNER_STOPS,
  VOLUNTEER_HERO_SPINNER_STARTS,
  FETCHING_VOLUNTEER_HERO_FAILURE,
  FETCHING_VOLUNTEER_HERO_SUCCESS,
  START_FETCHING_VOLUNTEER_HERO_WITH_SPINNER,
  START_FETCHING_VOLUNTEER_HERO,
  START_FETCHING_VOLUNTEER_TYPE,
  START_FETCHING_VOLUNTEER_TYPE_WITH_SPINNER,
  FETCHING_VOLUNTEER_TYPE_SUCCESS,
  FETCHING_VOLUNTEER_TYPE_FAILURE,
  VOLUNTEER_TYPE_SPINNER_STARTS,
  VOLUNTEER_TYPE_SPINNER_STOPS,
} from "./getInvolvedStore.actionTypes";

export const fetchingAnnouncementStarts = () => {
  return {
    type: START_FETCHING_ANNOUNCEMENT,
  };
};
export const fetchingAnnouncementWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_ANNOUNCEMENT_WITH_SPINNER,
  };
};

export const fetchingAnnouncementSuccess = (data) => {
  return {
    type: FETCHING_ANNOUNCEMENT_SUCCESS,
    payload: data,
  };
};
export const fetchingAnnouncementFailure = (error) => {
  return {
    type: FETCHING_ANNOUNCEMENT_FAILURE,
    payload: error,
  };
};

export const announcementSpinnerStarts = () => {
  return {
    type: ANNOUNCEMENT_SPINNER_STARTS,
  };
};
export const announcementSpinnerStops = () => {
  return {
    type: ANNOUNCEMENT_SPINNER_STOPS,
  };
};

export const fetchingVolunteerStarts = () => {
  return {
    type: START_FETCHING_VOLUNTEER,
  };
};
export const fetchingVolunteerWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_VOLUNTEER_WITH_SPINNER,
  };
};

export const fetchingVolunteerSuccess = (data) => {
  return {
    type: FETCHING_VOLUNTEER_SUCCESS,
    payload: data,
  };
};
export const fetchingVolunteerFailure = (error) => {
  return {
    type: FETCHING_VOLUNTEER_FAILURE,
    payload: error,
  };
};

export const volunteerSpinnerStarts = () => {
  return {
    type: VOLUNTEER_SPINNER_STARTS,
  };
};
export const volunteerSpinnerStops = () => {
  return {
    type: VOLUNTEER_SPINNER_STOPS,
  };
};

export const fetchingVolunteerHeroStarts = () => {
  return {
    type: START_FETCHING_VOLUNTEER_HERO,
  };
};

export const fetchingVolunteerHeroWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_VOLUNTEER_HERO_WITH_SPINNER,
  };
};

export const fetchingVolunteerHeroSuccess = (data) => {
  return {
    type: FETCHING_VOLUNTEER_HERO_SUCCESS,
    payload: data,
  };
};
export const fetchingVolunteerHeroFailure = (error) => {
  return {
    type: FETCHING_VOLUNTEER_HERO_FAILURE,
    payload: error,
  };
};

export const volunteerHeroSpinnerStarts = () => {
  return {
    type: VOLUNTEER_HERO_SPINNER_STARTS,
  };
};
export const volunteerHeroSpinnerStops = () => {
  return {
    type: VOLUNTEER_HERO_SPINNER_STOPS,
  };
};





export const fetchingVolunteerTypeStarts = () => {
  return {
    type: START_FETCHING_VOLUNTEER_TYPE,
  };
};

export const fetchingVolunteerTypeWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_VOLUNTEER_TYPE_WITH_SPINNER,
  };
};

export const fetchingVolunteerTypeSuccess = (data) => {
  return {
    type: FETCHING_VOLUNTEER_TYPE_SUCCESS,
    payload: data,
  };
};
export const fetchingVolunteerTypeFailure = (error) => {
  return {
    type: FETCHING_VOLUNTEER_TYPE_FAILURE,
    payload: error,
  };
};

export const volunteerTypeSpinnerStarts = () => {
  return {
    type: VOLUNTEER_TYPE_SPINNER_STARTS,
  };
};
export const volunteerTypeSpinnerStops = () => {
  return {
    type: VOLUNTEER_TYPE_SPINNER_STOPS,
  };
};








export const fetchingDonationStarts = () => {
  return {
    type: START_FETCHING_DONATION,
  };
};
export const fetchingDonationWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_DONATION_WITH_SPINNER,
  };
};

export const fetchingDonationSuccess = (data) => {
  return {
    type: FETCHING_DONATION_SUCCESS,
    payload: data,
  };
};
export const fetchingDonationFailure = (error) => {
  return {
    type: FETCHING_DONATION_FAILURE,
    payload: error,
  };
};

export const donationSpinnerStarts = () => {
  return {
    type: DONATION_SPINNER_STARTS,
  };
};
export const donationSpinnerStops = () => {
  return {
    type: DONATION_SPINNER_STOPS,
  };
};

export const fetchingDonationHeroStarts = () => {
  return {
    type: START_FETCHING_DONATION_HERO,
  };
};
export const fetchingDonationHeroWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_DONATION_HERO_WITH_SPINNER,
  };
};

export const fetchingDonationHeroSuccess = (data) => {
  return {
    type: FETCHING_DONATION_HERO_SUCCESS,
    payload: data,
  };
};
export const fetchingDonationHeroFailure = (error) => {
  return {
    type: FETCHING_DONATION_HERO_FAILURE,
    payload: error,
  };
};

export const donationHeroSpinnerStarts = () => {
  return {
    type: DONATION_HERO_SPINNER_STARTS,
  };
};
export const donationHeroSpinnerStops = () => {
  return {
    type: DONATION_HERO_SPINNER_STOPS,
  };
};
