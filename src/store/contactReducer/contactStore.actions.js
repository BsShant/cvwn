import {
  FETCHING_CONTACT_FAILURE,
  FETCHING_CONTACT_SUCCESS,
  CONTACT_SPINNER_STARTS,
  CONTACT_SPINNER_STOPS,
  START_FETCHING_CONTACT,
  START_FETCHING_CONTACT_WITH_SPINNER,
} from "./contactStore.actionTypes";


export const fetchingContactStarts = () => {
  return {
    type: START_FETCHING_CONTACT,
  };
};
export const fetchingContactWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_CONTACT_WITH_SPINNER,
  };
};

export const fetchingContactSuccess = (data) => {
  return {
    type: FETCHING_CONTACT_SUCCESS,
    payload: data,
  };
};
export const fetchingContactFailure = (error) => {
  return {
    type: FETCHING_CONTACT_FAILURE,
    payload: error,
  };
};

export const contactSpinnerStarts = () => {
  return {
    type: CONTACT_SPINNER_STARTS,
  };
};
export const contactSpinnerStops = () => {
  return {
    type: CONTACT_SPINNER_STOPS,
  };
};
