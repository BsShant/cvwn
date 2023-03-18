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
} from "./resourceStore.actionTypes";

const INITIAL_STATE = {
  report: [],
  reportSpinner: false,
  reportError: null,
  case: [],
  caseStory: [],
  caseSpinner: false,
  caseError: null,
  article: [],
  articleSpinner: false,
  articleError: null,
};

export const resourceReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCHING_REPORT_SUCCESS:
      return {
        ...state,
        report: action.payload,
      };
    case FETCHING_REPORT_FAILURE:
      return {
        ...state,
        reportError: action.payload,
      };
    case REPORT_SPINNER_STARTS:
      return {
        ...state,
        reportSpinner: true,
      };
    case REPORT_SPINNER_STOPS:
      return {
        ...state,
        reportSpinner: false,
      };

    case FETCHING_CASE_SUCCESS:
      return {
        ...state,
        case: action.payload.study.data,
        caseStory: action.payload.story.data,
      };
    case FETCHING_CASE_FAILURE:
      return {
        ...state,
        caseError: action.payload,
      };
    case CASE_SPINNER_STARTS:
      return {
        ...state,
        caseSpinner: true,
      };
    case CASE_SPINNER_STOPS:
      return {
        ...state,
        caseSpinner: false,
      };
    case FETCHING_ARTICLE_SUCCESS:
      return {
        ...state,
        article: action.payload,
      };
    case FETCHING_ARTICLE_FAILURE:
      return {
        ...state,
        articleError: action.payload,
      };
    case ARTICLE_SPINNER_STARTS:
      return {
        ...state,
        articleSpinner: true,
      };
    case ARTICLE_SPINNER_STOPS:
      return {
        ...state,
        articleSpinner: false,
      };
    default:
      return state;
  }
};
