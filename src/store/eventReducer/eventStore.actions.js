import {

  FETCHING_EVENT_FAILURE,
  FETCHING_EVENT_SUCCESS,
  EVENT_SPINNER_STARTS,
  EVENT_SPINNER_STOPS,
  START_FETCHING_EVENT,
  START_FETCHING_EVENT_WITH_SPINNER,
  REQUEST_SPINNER_STOPS,
  REQUEST_SPINNER_STARTS,
  FETCHING_REQUEST_FAILURE,
  FETCHING_REQUEST_SUCCESS,
  START_FETCHING_REQUEST,
  START_FETCHING_REQUEST_WITH_SPINNER,

} from "./eventStore.actionTypes";


export const fetchingEventStarts = () => {
  return {
    type: START_FETCHING_EVENT,
  };
};
export const fetchingEventWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_EVENT_WITH_SPINNER,
  };
};

export const fetchingEventSuccess = (data) => {
  return {
    type: FETCHING_EVENT_SUCCESS,
    payload: data,
  };
};
export const fetchingEventFailure = (error) => {
  return {
    type: FETCHING_EVENT_FAILURE,
    payload: error,
  };
};

export const eventSpinnerStarts = () => {
  return {
    type: EVENT_SPINNER_STARTS,
  };
};
export const eventSpinnerStops = () => {
  return {
    type: EVENT_SPINNER_STOPS,
  };
};






export const fetchingRequestStarts = () => {
  return {
    type: START_FETCHING_REQUEST,
  };
};
export const fetchingRequestWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_REQUEST_WITH_SPINNER,
  };
};

export const fetchingRequestSuccess = (data) => {
  return {
    type: FETCHING_REQUEST_SUCCESS,
    payload: data,
  };
};
export const fetchingRequestFailure = (error) => {
  return {
    type: FETCHING_REQUEST_FAILURE,
    payload: error,
  };
};

export const requestSpinnerStarts = () => {
  return {
    type: REQUEST_SPINNER_STARTS,
  };
};
export const requestSpinnerStops = () => {
  return {
    type: REQUEST_SPINNER_STOPS,
  };
};

