import {
  FETCHING_ABOUT_FAILURE,
  FETCHING_ABOUT_SUCCESS,
  ABOUT_SPINNER_STARTS,
  ABOUT_SPINNER_STOPS,

} from "./aboutStore.actionTypes";

const INITIAL_STATE = {
  about: null,
  aboutSpinner: false,
  aboutError: null,
};

export const aboutReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
   
    case FETCHING_ABOUT_SUCCESS:
      return {
        ...state,
        about: action.payload,
      };
    case FETCHING_ABOUT_FAILURE:
      return {
        ...state,
        aboutError: action.payload,
      };
    case ABOUT_SPINNER_STARTS:
      return {
        ...state,
        aboutSpinner: true,
      };
    case ABOUT_SPINNER_STOPS:
      return {
        ...state,
        aboutSpinner: false,
      };

    default:
      return state;
  }
};
