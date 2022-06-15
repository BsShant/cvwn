import {
  START_USER_AUTHENTICATION,
  USER_LOGOUT_FAILURE,
  USER_LOGOUT_SUCCESS,
  START_USER_LOGOUT,
  USER_AUTH_FAILURE,
  USER_AUTH_SUCCESS,
  UPDATE_TOKEN,
  UPDATE_USER,
  UPDATE_SUBSCRIBER,
  UPDATE_SUBSCRIBER_TOKEN,
  SUBSCRIBER_AUTH_SUCCESS,
  SUBSCRIBER_AUTH_FAILURE,
  START_SUBSCRIBER_LOGOUT,
  SUBSCRIBER_LOGOUT_SUCCESS,
  SUBSCRIBER_LOGOUT_FAILURE,
} from "./authActionTypes";
const data = localStorage.getItem("cvwnUser");
const newToken = localStorage.getItem("cvwnToken");
const subscriberData = localStorage.getItem("subscriber");
const INITIAL_STATE = {
  userToken: newToken ? JSON.parse(newToken) : null,
  authUser: data ? JSON.parse(data) : null,
  subscriber: subscriberData ? JSON.parse(subscriberData) : null,
  error: null,
};

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case START_USER_AUTHENTICATION:
      return {
        ...state,
      };
    case UPDATE_USER:
      return {
        ...state,
        authUser: action.payload,
      };
    case UPDATE_SUBSCRIBER:
      return {
        ...state,
        subscriber: action.payload,
      };

    case USER_AUTH_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case USER_AUTH_FAILURE:
      return {
        ...state,
        error: action.payload,
        userToken: null,
      };
    case START_USER_LOGOUT:
      return {
        ...state,
      };
    case USER_LOGOUT_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case USER_LOGOUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    case UPDATE_TOKEN:
      return {
        ...state,
        userToken: action.payload,
      };
    case UPDATE_SUBSCRIBER_TOKEN:
      return {
        ...state,
        subscriberToken: action.payload,
      };
    case START_USER_AUTHENTICATION:
      return {
        ...state,
      };
    case UPDATE_USER:
      return {
        ...state,
        authUser: action.payload,
      };
    case UPDATE_SUBSCRIBER:
      return {
        ...state,
        subscriber: action.payload,
      };

    case SUBSCRIBER_AUTH_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case SUBSCRIBER_AUTH_FAILURE:
      return {
        ...state,
        error: action.payload,
        subscriberToken: null,
      };
    case START_SUBSCRIBER_LOGOUT:
      return {
        ...state,
      };
    case SUBSCRIBER_LOGOUT_SUCCESS:
      return {
        ...state,
        error: null,
      };
    case SUBSCRIBER_LOGOUT_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
