import {

  FETCHING_PROJECT_FAILURE,
  FETCHING_PROJECT_SUCCESS,
  PROJECT_SPINNER_STARTS,
  PROJECT_SPINNER_STOPS,
  START_FETCHING_PROJECT,
  START_FETCHING_PROJECT_WITH_SPINNER,

} from "./projectStore.actionTypes";


export const fetchingProjectStarts = () => {
  return {
    type: START_FETCHING_PROJECT,
  };
};
export const fetchingProjectWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_PROJECT_WITH_SPINNER,
  };
};

export const fetchingProjectSuccess = (data) => {
  return {
    type: FETCHING_PROJECT_SUCCESS,
    payload: data,
  };
};
export const fetchingProjectFailure = (error) => {
  return {
    type: FETCHING_PROJECT_FAILURE,
    payload: error,
  };
};

export const projectSpinnerStarts = () => {
  return {
    type: PROJECT_SPINNER_STARTS,
  };
};
export const projectSpinnerStops = () => {
  return {
    type: PROJECT_SPINNER_STOPS,
  };
};
