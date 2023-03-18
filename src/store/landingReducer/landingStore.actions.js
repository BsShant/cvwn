import {
  FETCHING_LANDING_ABOUT_FAILURE,
  FETCHING_LANDING_ABOUT_SUCCESS,
  FETCHING_LANDING_SLIDER_FAILURE,
  FETCHING_LANDING_SLIDER_SUCCESS,
  FETCHING_MEMBER_FAILURE,
  FETCHING_MEMBER_SUCCESS,
  FETCHING_PARTNER_FAILURE,
  FETCHING_PARTNER_SUCCESS,
  FETCHING_TEAM_FAILURE,
  FETCHING_TEAM_SUCCESS,
  FETCHING_TESTIMONIAL_FAILURE,
  FETCHING_TESTIMONIAL_SUCCESS,
  LANDING_ABOUT_SPINNER_STARTS,
  LANDING_ABOUT_SPINNER_STOPS,
  LANDING_SLIDER_SPINNER_STARTS,
  LANDING_SLIDER_SPINNER_STOPS,
  MEMBER_SPINNER_STARTS,
  MEMBER_SPINNER_STOPS,
  PARTNER_SPINNER_STARTS,
  PARTNER_SPINNER_STOPS,
  START_FETCHING_LANDING_ABOUT,
  START_FETCHING_LANDING_ABOUT_WITH_SPINNER,
  START_FETCHING_LANDING_SLIDER,
  START_FETCHING_LANDING_SLIDER_WITH_SPINNER,
  START_FETCHING_MEMBER,
  START_FETCHING_MEMBER_WITH_SPINNER,
  START_FETCHING_PARTNER,
  START_FETCHING_PARTNER_WITH_SPINNER,
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

export const fetchingLandingSliderStarts = () => {
  return {
    type: START_FETCHING_LANDING_SLIDER,
  };
};
export const fetchingLandingSliderWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_LANDING_SLIDER_WITH_SPINNER,
  };
};

export const fetchingLandingSliderSuccess = (data) => {
  return {
    type: FETCHING_LANDING_SLIDER_SUCCESS,
    payload: data,
  };
};
export const fetchingLandingSliderFailure = (error) => {
  return {
    type: FETCHING_LANDING_SLIDER_FAILURE,
    payload: error,
  };
};

export const landingSliderSpinnerStarts = () => {
  return {
    type: LANDING_SLIDER_SPINNER_STARTS,
  };
};
export const landingSliderSpinnerStops = () => {
  return {
    type: LANDING_SLIDER_SPINNER_STOPS,
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

export const fetchingMemberStarts = () => {
  return {
    type: START_FETCHING_MEMBER,
  };
};
export const fetchingMemberWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_MEMBER_WITH_SPINNER,
  };
};

export const fetchingMemberSuccess = (data) => {
  return {
    type: FETCHING_MEMBER_SUCCESS,
    payload: data,
  };
};
export const fetchingMemberFailure = (error) => {
  return {
    type: FETCHING_MEMBER_FAILURE,
    payload: error,
  };
};

export const memberSpinnerStarts = () => {
  return {
    type: MEMBER_SPINNER_STARTS,
  };
};
export const memberSpinnerStops = () => {
  return {
    type: MEMBER_SPINNER_STOPS,
  };
};

export const fetchingPartnerStarts = () => {
  return {
    type: START_FETCHING_PARTNER,
  };
};
export const fetchingPartnerWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_PARTNER_WITH_SPINNER,
  };
};

export const fetchingPartnerSuccess = (data) => {
  return {
    type: FETCHING_PARTNER_SUCCESS,
    payload: data,
  };
};
export const fetchingPartnerFailure = (error) => {
  return {
    type: FETCHING_PARTNER_FAILURE,
    payload: error,
  };
};

export const partnerSpinnerStarts = () => {
  return {
    type: PARTNER_SPINNER_STARTS,
  };
};
export const partnerSpinnerStops = () => {
  return {
    type: PARTNER_SPINNER_STOPS,
  };
};
