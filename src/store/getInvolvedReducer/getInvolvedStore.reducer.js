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
  DONATION_SPINNER_STOPS,
  ANNOUNCEMENT_SPINNER_STARTS,
  ANNOUNCEMENT_SPINNER_STOPS,
  FETCHING_DONATION_HERO_SUCCESS,
  FETCHING_DONATION_HERO_FAILURE,
  DONATION_HERO_SPINNER_STARTS,
  DONATION_HERO_SPINNER_STOPS,
  VOLUNTEER_HERO_SPINNER_STOPS,
  VOLUNTEER_HERO_SPINNER_STARTS,
  FETCHING_VOLUNTEER_HERO_FAILURE,
  FETCHING_VOLUNTEER_HERO_SUCCESS,
  VOLUNTEER_TYPE_SPINNER_STOPS,
  VOLUNTEER_TYPE_SPINNER_STARTS,
  FETCHING_VOLUNTEER_TYPE_FAILURE,
  FETCHING_VOLUNTEER_TYPE_SUCCESS,
} from "./getInvolvedStore.actionTypes";

const INITIAL_STATE = {
  announcement: [],
  announcementSpinner: false,
  announcementError: null,
  volunteer: [],
  volunteerSpinner: false,
  volunteerError: null,
  volunteerType: [],
  volunteerTypeSpinner: false,
  volunteerTypeError: null,
  volunteerHero: [],
  volunteerHeroSpinner: false,
  volunteerHeroError: null,
  donation: [],
  donationSpinner: false,
  donationError: null,
  donationHero: [],
  donationHeroSpinner: false,
  donationHeroError: null,
  donationInfo: [],
};

export const getInvolvedReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_ANNOUNCEMENT_SUCCESS:
      return {
        ...state,
        announcement: action.payload,
      };
    case FETCHING_ANNOUNCEMENT_FAILURE:
      return {
        ...state,
        announcementError: action.payload,
      };
    case ANNOUNCEMENT_SPINNER_STARTS:
      return {
        ...state,
        announcementSpinner: true,
      };
    case ANNOUNCEMENT_SPINNER_STOPS:
      return {
        ...state,
        announcementSpinner: false,
      };

    case FETCHING_VOLUNTEER_SUCCESS:
      return {
        ...state,
        volunteer: action.payload,
      };
    case FETCHING_VOLUNTEER_FAILURE:
      return {
        ...state,
        volunteerError: action.payload,
      };
    case VOLUNTEER_SPINNER_STARTS:
      return {
        ...state,
        volunteerSpinner: true,
      };
    case VOLUNTEER_SPINNER_STOPS:
      return {
        ...state,
        volunteerSpinner: false,
      };

    case FETCHING_VOLUNTEER_HERO_SUCCESS:
      return {
        ...state,
        volunteerHero: action.payload,
      };
    case FETCHING_VOLUNTEER_HERO_FAILURE:
      return {
        ...state,
        volunteerHeroError: action.payload,
      };
    case VOLUNTEER_HERO_SPINNER_STARTS:
      return {
        ...state,
        volunteerHeroSpinner: true,
      };
    case VOLUNTEER_HERO_SPINNER_STOPS:
      return {
        ...state,
        volunteerHeroSpinner: false,
      };

    case FETCHING_VOLUNTEER_TYPE_SUCCESS:
      return {
        ...state,
        volunteerType: action.payload,
      };
    case FETCHING_VOLUNTEER_TYPE_FAILURE:
      return {
        ...state,
        volunteerTypeError: action.payload,
      };
    case VOLUNTEER_TYPE_SPINNER_STARTS:
      return {
        ...state,
        volunteerTypeSpinner: true,
      };
    case VOLUNTEER_TYPE_SPINNER_STOPS:
      return {
        ...state,
        volunteerTypeSpinner: false,
      };

    case FETCHING_DONATION_SUCCESS:
      return {
        ...state,
        donation: action.payload.donate.data,
        donationInfo: action.payload.donateInfo.data,
      };
    case FETCHING_DONATION_FAILURE:
      return {
        ...state,
        donationError: action.payload,
      };
    case DONATION_SPINNER_STARTS:
      return {
        ...state,
        donationSpinner: true,
      };
    case DONATION_SPINNER_STOPS:
      return {
        ...state,
        donationSpinner: false,
      };

    case FETCHING_DONATION_HERO_SUCCESS:
      return {
        ...state,
        donationHero: action.payload,
      };
    case FETCHING_DONATION_HERO_FAILURE:
      return {
        ...state,
        donationHeroError: action.payload,
      };
    case DONATION_HERO_SPINNER_STARTS:
      return {
        ...state,
        donationHeroSpinner: true,
      };
    case DONATION_HERO_SPINNER_STOPS:
      return {
        ...state,
        donationHeroSpinner: false,
      };
    default:
      return state;
  }
};
