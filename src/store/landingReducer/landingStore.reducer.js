import {
  FETCHING_LANDING_ABOUT_FAILURE,
  FETCHING_LANDING_ABOUT_SUCCESS,
  FETCHING_LANDING_DONATE_FAILURE,
  FETCHING_LANDING_DONATE_SUCCESS,
  FETCHING_LANDING_HERO_FAILURE,
  FETCHING_LANDING_HERO_SUCCESS,
  LANDING_ABOUT_SPINNER_STARTS,
  LANDING_ABOUT_SPINNER_STOPS,
  LANDING_DONATE_SPINNER_STARTS,
  LANDING_DONATE_SPINNER_STOPS,
  LANDING_HERO_SPINNER_STARTS,
  LANDING_HERO_SPINNER_STOPS,
} from "./landingStore.actionTypes";

const INITIAL_STATE = {
  landingHero: null,
  landingHeroSpinner: false,
  landingHeroError: null,
  landingDonate: null,
  landingDonateSpinner: false,
  landingDonateError: null,
  landingAbout: null,
  landingAboutSpinner: false,
  landingAboutError: null,
};

export const landingReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_LANDING_HERO_SUCCESS:
      return {
        ...state,
        landingHero: action.payload,
      };
    case FETCHING_LANDING_HERO_FAILURE:
      return {
        ...state,
        landingHeroError: action.payload,
      };
    case LANDING_HERO_SPINNER_STARTS:
      return {
        ...state,
        landingHeroSpinner: true,
      };
    case LANDING_HERO_SPINNER_STOPS:
      return {
        ...state,
        landingHeroSpinner: false,
      };

    case FETCHING_LANDING_DONATE_SUCCESS:
      return {
        ...state,
        landingDonate: action.payload,
      };
    case FETCHING_LANDING_DONATE_FAILURE:
      return {
        ...state,
        landingDonateError: action.payload,
      };
    case LANDING_DONATE_SPINNER_STARTS:
      return {
        ...state,
        landingDonateSpinner: true,
      };
    case LANDING_DONATE_SPINNER_STOPS:
      return {
        ...state,
        landingDonateSpinner: false,
      };

    case FETCHING_LANDING_ABOUT_SUCCESS:
      return {
        ...state,
        landingAbout: action.payload,
      };
    case FETCHING_LANDING_ABOUT_FAILURE:
      return {
        ...state,
        landingAboutError: action.payload,
      };
    case LANDING_ABOUT_SPINNER_STARTS:
      return {
        ...state,
        landingAboutSpinner: true,
      };
    case LANDING_ABOUT_SPINNER_STOPS:
      return {
        ...state,
        landingAboutSpinner: false,
      };

    default:
      return state;
  }
};
