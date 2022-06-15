import {
  START_FETCHING_FOOTER_ABOUT,
  START_FETCHING_FOOTER_ABOUT_WITH_SPINNER,
  FETCHING_FOOTER_ABOUT_SUCCESS,
  FETCHING_FOOTER_ABOUT_FAILURE,
  FOOTER_ABOUT_SPINNER_STARTS,
  FOOTER_ABOUT_SPINNER_STOPS,
  FOOTER_LINKS_SPINNER_STOPS,
  FOOTER_LINKS_SPINNER_STARTS,
  FETCHING_FOOTER_LINKS_FAILURE,
  FETCHING_FOOTER_LINKS_SUCCESS,
  START_FETCHING_FOOTER_LINKS_WITH_SPINNER,
  START_FETCHING_FOOTER_LINKS,
  FOOTER_CONTACT_SPINNER_STOPS,
  FOOTER_CONTACT_SPINNER_STARTS,
  FETCHING_FOOTER_CONTACT_FAILURE,
  FETCHING_FOOTER_CONTACT_SUCCESS,
  START_FETCHING_FOOTER_CONTACT_WITH_SPINNER,
  START_FETCHING_FOOTER_CONTACT,
} from "./footerStore.actionTypes";

export const fetchingFooterAboutStarts = () => {
  return {
    type: START_FETCHING_FOOTER_ABOUT,
  };
};
export const fetchingFooterAboutWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_FOOTER_ABOUT_WITH_SPINNER,
  };
};

export const fetchingFooterAboutSuccess = (data) => {
  return {
    type: FETCHING_FOOTER_ABOUT_SUCCESS,
    payload: data,
  };
};
export const fetchingFooterAboutFailure = (error) => {
  return {
    type: FETCHING_FOOTER_ABOUT_FAILURE,
    payload: error,
  };
};

export const footerAboutSpinnerStarts = () => {
  return {
    type: FOOTER_ABOUT_SPINNER_STARTS,
  };
};
export const footerAboutSpinnerStops = () => {
  return {
    type: FOOTER_ABOUT_SPINNER_STOPS,
  };
};

export const fetchingFooterLinksStarts = () => {
  return {
    type: START_FETCHING_FOOTER_LINKS,
  };
};
export const fetchingFooterLinksWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_FOOTER_LINKS_WITH_SPINNER,
  };
};

export const fetchingFooterLinksSuccess = (data) => {
  return {
    type: FETCHING_FOOTER_LINKS_SUCCESS,
    payload: data,
  };
};
export const fetchingFooterLinksFailure = (error) => {
  return {
    type: FETCHING_FOOTER_LINKS_FAILURE,
    payload: error,
  };
};

export const footerLinksSpinnerStarts = () => {
  return {
    type: FOOTER_LINKS_SPINNER_STARTS,
  };
};
export const footerLinksSpinnerStops = () => {
  return {
    type: FOOTER_LINKS_SPINNER_STOPS,
  };
};

export const fetchingFooterContactStarts = () => {
  return {
    type: START_FETCHING_FOOTER_CONTACT,
  };
};
export const fetchingFooterContactWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_FOOTER_CONTACT_WITH_SPINNER,
  };
};

export const fetchingFooterContactSuccess = (data) => {
  return {
    type: FETCHING_FOOTER_CONTACT_SUCCESS,
    payload: data,
  };
};
export const fetchingFooterContactFailure = (error) => {
  return {
    type: FETCHING_FOOTER_CONTACT_FAILURE,
    payload: error,
  };
};

export const footerContactSpinnerStarts = () => {
  return {
    type: FOOTER_CONTACT_SPINNER_STARTS,
  };
};
export const footerContactSpinnerStops = () => {
  return {
    type: FOOTER_CONTACT_SPINNER_STOPS,
  };
};
