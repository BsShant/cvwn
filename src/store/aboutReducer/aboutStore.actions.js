import {
  ABOUT_SPINNER_STARTS,
  ABOUT_SPINNER_STOPS,
  FETCHING_ABOUT_FAILURE,
  FETCHING_ABOUT_SUCCESS,
  START_FETCHING_ABOUT,
  START_FETCHING_ABOUT_WITH_SPINNER,
} from "./aboutStore.actionTypes";

export const fetchingAboutStarts = () => {
  return {
    type: START_FETCHING_ABOUT,
  };
};
export const fetchingAboutWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_ABOUT_WITH_SPINNER,
  };
};

export const fetchingAboutSuccess = (data) => {
  return {
    type: FETCHING_ABOUT_SUCCESS,
    payload: data,
  };
};
export const fetchingAboutFailure = (error) => {
  return {
    type: FETCHING_ABOUT_FAILURE,
    payload: error,
  };
};

export const aboutSpinnerStarts = () => {
  return {
    type: ABOUT_SPINNER_STARTS,
  };
};
export const aboutSpinnerStops = () => {
  return {
    type: ABOUT_SPINNER_STOPS,
  };
};
