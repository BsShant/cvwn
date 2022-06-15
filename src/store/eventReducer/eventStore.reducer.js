import {
  FETCHING_EVENT_FAILURE,
  FETCHING_EVENT_SUCCESS,
  EVENT_SPINNER_STARTS,
  EVENT_SPINNER_STOPS,
  REQUEST_SPINNER_STOPS,
  REQUEST_SPINNER_STARTS,
  FETCHING_REQUEST_FAILURE,
  FETCHING_REQUEST_SUCCESS,
} from "./eventStore.actionTypes";

const INITIAL_STATE = {
  event: [],
  eventSpinner: false,
  eventError: null,
  request: [],
  requestSpinner: false,
  requestError: null,
};

export const eventReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_EVENT_SUCCESS:
      return {
        ...state,
        event: action.payload,
      };
    case FETCHING_EVENT_FAILURE:
      return {
        ...state,
        eventError: action.payload,
      };
    case EVENT_SPINNER_STARTS:
      return {
        ...state,
        eventSpinner: true,
      };
    case EVENT_SPINNER_STOPS:
      return {
        ...state,
        eventSpinner: false,
      };
    case FETCHING_REQUEST_SUCCESS:
      return {
        ...state,
        request: action.payload,
      };
    case FETCHING_REQUEST_FAILURE:
      return {
        ...state,
        requestError: action.payload,
      };
    case REQUEST_SPINNER_STARTS:
      return {
        ...state,
        requestSpinner: true,
      };
    case REQUEST_SPINNER_STOPS:
      return {
        ...state,
        requestSpinner: false,
      };

    default:
      return state;
  }
};
