import {
  FETCHING_CONTACT_FAILURE,
  FETCHING_CONTACT_SUCCESS,
  CONTACT_SPINNER_STARTS,
  CONTACT_SPINNER_STOPS,
} from "./contactStore.actionTypes";

const INITIAL_STATE = {
  contact: [],
  contactSpinner: false,
  contactError: null,
};

export const contactReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_CONTACT_SUCCESS:
      return {
        ...state,
        contact: action.payload,
      };
    case FETCHING_CONTACT_FAILURE:
      return {
        ...state,
        contactError: action.payload,
      };
    case CONTACT_SPINNER_STARTS:
      return {
        ...state,
        contactSpinner: true,
      };
    case CONTACT_SPINNER_STOPS:
      return {
        ...state,
        contactSpinner: false,
      };
    default:
      return state;
  }
};
