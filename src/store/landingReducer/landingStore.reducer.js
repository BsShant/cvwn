import {
  FETCHING_LANDING_ABOUT_FAILURE,
  FETCHING_LANDING_ABOUT_SUCCESS,
  FETCHING_LANDING_DONATE_FAILURE,
  FETCHING_LANDING_DONATE_SUCCESS,
  FETCHING_LANDING_HERO_FAILURE,
  FETCHING_LANDING_HERO_SUCCESS,
  FETCHING_LANDING_SLIDER_FAILURE,
  FETCHING_LANDING_SLIDER_SUCCESS,
  FETCHING_MEMBER_FAILURE,
  FETCHING_MEMBER_SUCCESS,
  FETCHING_PARTNER_FAILURE,
  FETCHING_PARTNER_SUCCESS,
  LANDING_ABOUT_SPINNER_STARTS,
  LANDING_ABOUT_SPINNER_STOPS,
  LANDING_DONATE_SPINNER_STARTS,
  LANDING_DONATE_SPINNER_STOPS,
  LANDING_HERO_SPINNER_STARTS,
  LANDING_HERO_SPINNER_STOPS,
  LANDING_SLIDER_SPINNER_STARTS,
  LANDING_SLIDER_SPINNER_STOPS,
  MEMBER_SPINNER_STARTS,
  MEMBER_SPINNER_STOPS,
  PARTNER_SPINNER_STARTS,
  PARTNER_SPINNER_STOPS,
} from "./landingStore.actionTypes";

const INITIAL_STATE = {
  landingHero: null,
  landingHeroSpinner: false,
  landingHeroError: null,

  landingSlider: null,
  landingSliderSpinner: false,
  landingSliderError: null,

  landingDonate: null,
  landingDonateSpinner: false,
  landingDonateError: null,
  landingAbout: null,
  landingAboutSpinner: false,
  landingAboutError: null,

  member: [],
  memberSpinner: false,
  memberError: null,

  partner: [],
  publication: [],
  partnerBg: null,

  partnerSpinner: false,
  partnerError: null,
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

    case FETCHING_LANDING_SLIDER_SUCCESS:
      return {
        ...state,
        landingSlider: action.payload,
      };
    case FETCHING_LANDING_SLIDER_FAILURE:
      return {
        ...state,
        landingSliderError: action.payload,
      };
    case LANDING_SLIDER_SPINNER_STARTS:
      return {
        ...state,
        landingSliderSpinner: true,
      };
    case LANDING_SLIDER_SPINNER_STOPS:
      return {
        ...state,
        landingSliderSpinner: false,
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

    case FETCHING_PARTNER_SUCCESS:
      return {
        ...state,
        partnerBg: action.payload.partnerBg.data,
        partner: action.payload.partner.data,
        publication: action.payload.publication.data,
      };
    case FETCHING_PARTNER_FAILURE:
      return {
        ...state,
        partnerError: action.payload,
      };
    case PARTNER_SPINNER_STARTS:
      return {
        ...state,
        partnerSpinner: true,
      };
    case PARTNER_SPINNER_STOPS:
      return {
        ...state,
        partnerSpinner: false,
      };

    case FETCHING_MEMBER_SUCCESS:
      return {
        ...state,
        member: action.payload,
      };
    case FETCHING_MEMBER_FAILURE:
      return {
        ...state,
        memberError: action.payload,
      };
    case MEMBER_SPINNER_STARTS:
      return {
        ...state,
        memberSpinner: true,
      };
    case MEMBER_SPINNER_STOPS:
      return {
        ...state,
        memberSpinner: false,
      };

    default:
      return state;
  }
};
