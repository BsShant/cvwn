import {
  START_USER_AUTHENTICATION,
  USER_LOGOUT_SUCCESS,
  USER_LOGOUT_FAILURE,
  USER_AUTH_SUCCESS,
  USER_AUTH_FAILURE,
  START_USER_LOGOUT,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
  GET_USER,
  UPDATE_TOKEN,
  UPDATE_USER,
  
} from "./authActionTypes";

export const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    payload: user,
  };
};



export const authProcessStarts = (emailandpassword) => {
  return {
    type: START_USER_AUTHENTICATION,
    payload: emailandpassword,
  };
};



export const userAuthSuccess = () => {
  return {
    type: USER_AUTH_SUCCESS,
  };
};
export const userAuthFailure = (error) => {
  return {
    type: USER_AUTH_FAILURE,
    payload: error,
  };
};


export const logoutProcessStarts = () => {
  return {
    type: START_USER_LOGOUT,
  };
};

export const userLogoutSuccess = (user) => {
  return {
    type: USER_LOGOUT_SUCCESS,
    payload: user
  };
};
export const userLogoutFailure = (error) => {
  return {
    type: USER_LOGOUT_FAILURE,
    payload: error,
  };
};


export const getUser = () => {
  return {
    type: GET_USER
  };
};

export const getUserSuccess = (user) => {
  return {
    type: GET_USER_SUCCESS,
    payload: user
  };
};
export const getUserFailure = (error) => {
  return {
    type: GET_USER_FAILURE,
    payload: error,
  };
};

export const updateToken = (token)=>{
  return{
    type: UPDATE_TOKEN,
    payload: token
  }
}

