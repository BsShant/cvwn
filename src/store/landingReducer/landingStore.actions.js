import {
  FETCHING_LANDING_ABOUT_FAILURE,
  FETCHING_LANDING_ABOUT_SUCCESS,
  FETCHING_TEAM_FAILURE,
  FETCHING_TEAM_SUCCESS,
  FETCHING_TESTIMONIAL_FAILURE,
  FETCHING_TESTIMONIAL_SUCCESS,
  LANDING_ABOUT_SPINNER_STARTS,
  LANDING_ABOUT_SPINNER_STOPS,
  START_FETCHING_LANDING_ABOUT,
  START_FETCHING_LANDING_ABOUT_WITH_SPINNER,
  START_FETCHING_TEAM,
  START_FETCHING_TEAM_WITH_SPINNER,
  START_FETCHING_TESTIMONIAL,
  START_FETCHING_TESTIMONIAL_WITH_SPINNER,
  TEAM_SPINNER_STARTS,
  TEAM_SPINNER_STOPS,
  TESTIMONIAL_SPINNER_STARTS,
  TESTIMONIAL_SPINNER_STOPS,
} from "./landingStore.actionTypes";
import {
  FETCHING_LANDING_DONATE_FAILURE,
  FETCHING_LANDING_DONATE_SUCCESS,
  FETCHING_LANDING_HERO_FAILURE,
  FETCHING_LANDING_HERO_SUCCESS,
  LANDING_DONATE_SPINNER_STARTS,
  LANDING_DONATE_SPINNER_STOPS,
  LANDING_HERO_SPINNER_STARTS,
  LANDING_HERO_SPINNER_STOPS,
  START_FETCHING_LANDING_DONATE,
  START_FETCHING_LANDING_DONATE_WITH_SPINNER,
  START_FETCHING_LANDING_HERO,
  START_FETCHING_LANDING_HERO_WITH_SPINNER,
} from "./landingStore.actionTypes";

export const fetchingLandingHeroStarts = () => {
  return {
    type: START_FETCHING_LANDING_HERO,
  };
};
export const fetchingLandingHeroWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_LANDING_HERO_WITH_SPINNER,
  };
};

export const fetchingLandingHeroSuccess = (data) => {
  return {
    type: FETCHING_LANDING_HERO_SUCCESS,
    payload: data,
  };
};
export const fetchingLandingHeroFailure = (error) => {
  return {
    type: FETCHING_LANDING_HERO_FAILURE,
    payload: error,
  };
};

export const landingHeroSpinnerStarts = () => {
  return {
    type: LANDING_HERO_SPINNER_STARTS,
  };
};
export const landingHeroSpinnerStops = () => {
  return {
    type: LANDING_HERO_SPINNER_STOPS,
  };
};

export const fetchingLandingDonateStarts = () => {
  return {
    type: START_FETCHING_LANDING_DONATE,
  };
};
export const fetchingLandingDonateWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_LANDING_DONATE_WITH_SPINNER,
  };
};

export const fetchingLandingDonateSuccess = (data) => {
  return {
    type: FETCHING_LANDING_DONATE_SUCCESS,
    payload: data,
  };
};
export const fetchingLandingDonateFailure = (error) => {
  return {
    type: FETCHING_LANDING_DONATE_FAILURE,
    payload: error,
  };
};

export const landingDonateSpinnerStarts = () => {
  return {
    type: LANDING_DONATE_SPINNER_STARTS,
  };
};
export const landingDonateSpinnerStops = () => {
  return {
    type: LANDING_DONATE_SPINNER_STOPS,
  };
};

export const fetchingLandingAboutStarts = () => {
  return {
    type: START_FETCHING_LANDING_ABOUT,
  };
};
export const fetchingLandingAboutWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_LANDING_ABOUT_WITH_SPINNER,
  };
};

export const fetchingLandingAboutSuccess = (data) => {
  return {
    type: FETCHING_LANDING_ABOUT_SUCCESS,
    payload: data,
  };
};
export const fetchingLandingAboutFailure = (error) => {
  return {
    type: FETCHING_LANDING_ABOUT_FAILURE,
    payload: error,
  };
};

export const landingAboutSpinnerStarts = () => {
  return {
    type: LANDING_ABOUT_SPINNER_STARTS,
  };
};
export const landingAboutSpinnerStops = () => {
  return {
    type: LANDING_ABOUT_SPINNER_STOPS,
  };
};

export const fetchingTeamStarts = () => {
  return {
    type: START_FETCHING_TEAM,
  };
};
export const fetchingTeamWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_TEAM_WITH_SPINNER,
  };
};

export const fetchingTeamSuccess = (data) => {
  return {
    type: FETCHING_TEAM_SUCCESS,
    payload: data,
  };
};
export const fetchingTeamFailure = (error) => {
  return {
    type: FETCHING_TEAM_FAILURE,
    payload: error,
  };
};

export const teamSpinnerStarts = () => {
  return {
    type: TEAM_SPINNER_STARTS,
  };
};
export const teamSpinnerStops = () => {
  return {
    type: TEAM_SPINNER_STOPS,
  };
};

export const fetchingTestimonialStarts = () => {
  return {
    type: START_FETCHING_TESTIMONIAL,
  };
};
export const fetchingTestimonialWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_TESTIMONIAL_WITH_SPINNER,
  };
};

export const fetchingTestimonialSuccess = (data) => {
  return {
    type: FETCHING_TESTIMONIAL_SUCCESS,
    payload: data,
  };
};
export const fetchingTestimonialFailure = (error) => {
  return {
    type: FETCHING_TESTIMONIAL_FAILURE,
    payload: error,
  };
};

export const testimonialSpinnerStarts = () => {
  return {
    type: TESTIMONIAL_SPINNER_STARTS,
  };
};
export const testimonialSpinnerStops = () => {
  return {
    type: TESTIMONIAL_SPINNER_STOPS,
  };
};
