import {
  FETCHING_PROJECT_FAILURE,
  FETCHING_PROJECT_SUCCESS,
  PROJECT_SPINNER_STARTS,
  PROJECT_SPINNER_STOPS,
} from "./projectStore.actionTypes";

const INITIAL_STATE = {
  project: [],
  projectSpinner: false,
  projectError: null,
};

export const projectReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_PROJECT_SUCCESS:
      return {
        ...state,
        project: action.payload,
      };
    case FETCHING_PROJECT_FAILURE:
      return {
        ...state,
        projectError: action.payload,
      };
    case PROJECT_SPINNER_STARTS:
      return {
        ...state,
        projectSpinner: true,
      };
    case PROJECT_SPINNER_STOPS:
      return {
        ...state,
        projectSpinner: false,
      };

    default:
      return state;
  }
};
