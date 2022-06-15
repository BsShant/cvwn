import {
  FOOTER_ABOUT_SPINNER_STOPS,
  FOOTER_ABOUT_SPINNER_STARTS,
  FETCHING_FOOTER_ABOUT_FAILURE,
  FETCHING_FOOTER_ABOUT_SUCCESS,
  FOOTER_LINKS_SPINNER_STOPS,
  FOOTER_LINKS_SPINNER_STARTS,
  FETCHING_FOOTER_LINKS_FAILURE,
  FETCHING_FOOTER_LINKS_SUCCESS,
  FETCHING_FOOTER_CONTACT_SUCCESS,
  FETCHING_FOOTER_CONTACT_FAILURE,
  FOOTER_CONTACT_SPINNER_STOPS,
} from "./footerStore.actionTypes";

const INITIAL_STATE = {
  footerAbout: null,
  footerAboutSpinner: false,
  footerAboutError: null,
  footerLinks: null,
  footerLinksSpinner: false,
  footerLinksError: null,
  footerContact: null,
  footerContactSpinner: false,
  footerContactError: null,
};

export const footerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_FOOTER_ABOUT_SUCCESS:
      return {
        ...state,
        footerAbout: action.payload,
      };
    case FETCHING_FOOTER_ABOUT_FAILURE:
      return {
        ...state,
        footerAboutError: action.payload,
      };
    case FOOTER_ABOUT_SPINNER_STARTS:
      return {
        ...state,
        footerAboutSpinner: true,
      };
    case FOOTER_ABOUT_SPINNER_STOPS:
      return {
        ...state,
        footerAboutSpinner: false,
      };

    case FETCHING_FOOTER_LINKS_SUCCESS:
      return {
        ...state,
        footerLinks: action.payload,
      };
    case FETCHING_FOOTER_LINKS_FAILURE:
      return {
        ...state,
        footerLinksError: action.payload,
      };
    case FOOTER_LINKS_SPINNER_STARTS:
      return {
        ...state,
        footerLinksSpinner: true,
      };
    case FOOTER_LINKS_SPINNER_STOPS:
      return {
        ...state,
        footerLinksSpinner: false,
      };

    case FETCHING_FOOTER_CONTACT_SUCCESS:
      return {
        ...state,
        footerContact: action.payload,
      };
    case FETCHING_FOOTER_CONTACT_FAILURE:
      return {
        ...state,
        footerContactError: action.payload,
      };
    case FETCHING_FOOTER_CONTACT_FAILURE:
      return {
        ...state,
        footerContactSpinner: true,
      };
    case FOOTER_CONTACT_SPINNER_STOPS:
      return {
        ...state,
        footerContactSpinner: false,
      };

    default:
      return state;
  }
};
