import {

  FETCHING_CASE_FAILURE,
  FETCHING_CASE_SUCCESS,
  FETCHING_ARTICLE_FAILURE,
  FETCHING_ARTICLE_SUCCESS,
  FETCHING_REPORT_FAILURE,
  FETCHING_REPORT_SUCCESS,
  CASE_SPINNER_STARTS,
  CASE_SPINNER_STOPS,
  ARTICLE_SPINNER_STARTS,
  ARTICLE_SPINNER_STOPS,
  REPORT_SPINNER_STARTS,
  REPORT_SPINNER_STOPS,
  START_FETCHING_CASE,
  START_FETCHING_CASE_WITH_SPINNER,
  START_FETCHING_ARTICLE,
  START_FETCHING_ARTICLE_WITH_SPINNER,
  START_FETCHING_REPORT,
  START_FETCHING_REPORT_WITH_SPINNER,
} from "./resourceStore.actionTypes";

export const fetchingReportStarts = () => {
  return {
    type: START_FETCHING_REPORT,
  };
};
export const fetchingReportWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_REPORT_WITH_SPINNER,
  };
};

export const fetchingReportSuccess = (data) => {
  return {
    type: FETCHING_REPORT_SUCCESS,
    payload: data,
  };
};
export const fetchingReportFailure = (error) => {
  return {
    type: FETCHING_REPORT_FAILURE,
    payload: error,
  };
};

export const reportSpinnerStarts = () => {
  return {
    type: REPORT_SPINNER_STARTS,
  };
};
export const reportSpinnerStops = () => {
  return {
    type: REPORT_SPINNER_STOPS,
  };
};

export const fetchingCaseStarts = () => {
  return {
    type: START_FETCHING_CASE,
  };
};
export const fetchingCaseWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_CASE_WITH_SPINNER,
  };
};

export const fetchingCaseSuccess = (data) => {
  return {
    type: FETCHING_CASE_SUCCESS,
    payload: data,
  };
};
export const fetchingCaseFailure = (error) => {
  return {
    type: FETCHING_CASE_FAILURE,
    payload: error,
  };
};

export const caseSpinnerStarts = () => {
  return {
    type: CASE_SPINNER_STARTS,
  };
};
export const caseSpinnerStops = () => {
  return {
    type: CASE_SPINNER_STOPS,
  };
};


export const fetchingArticleStarts = () => {
  return {
    type: START_FETCHING_ARTICLE,
  };
};
export const fetchingArticleWithSpinnerStarts = () => {
  return {
    type: START_FETCHING_ARTICLE_WITH_SPINNER,
  };
};

export const fetchingArticleSuccess = (data) => {
  return {
    type: FETCHING_ARTICLE_SUCCESS,
    payload: data,
  };
};
export const fetchingArticleFailure = (error) => {
  return {
    type: FETCHING_ARTICLE_FAILURE,
    payload: error,
  };
};

export const articleSpinnerStarts = () => {
  return {
    type: ARTICLE_SPINNER_STARTS,
  };
};
export const articleSpinnerStops = () => {
  return {
    type: ARTICLE_SPINNER_STOPS,
  };
};
