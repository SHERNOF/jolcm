import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_LOGOUT,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
} from "./constants.js";
import { CHANGE_MOUSEUP } from "./constants.js";
import { CHANGE_MOUSEDOWN } from "./constants.js";
import { SET_LOGIN } from "./constants.js";
import { FETCH_DATA_REQUEST } from "./constants.js";
import { FETCH_DATA_SUCCESS } from "./constants.js";
import { FETCH_DATA_FAILED } from "./constants.js";

export const wheel = () => ({
  type: CHANGE_MOUSEDOWN,
});
export const wheel2 = () => ({
  type: CHANGE_MOUSEUP,
});

export const logIn = () => ({
  type: SET_LOGIN,
});

export const request = () => ({
  type: FETCH_DATA_REQUEST,
});

export const success = () => ({
  type: FETCH_DATA_SUCCESS,
});

export const failed = () => ({
  type: FETCH_DATA_FAILED,
});

export const signInRequest = () => ({
  type: USER_SIGNIN_REQUEST,
});
export const signInSuccess = () => ({
  type: USER_SIGNIN_SUCCESS,
});
export const signInFail = () => ({
  type: USER_SIGNIN_FAIL,
});

export const signUpRequest = () => ({
  type: USER_SIGNUP_REQUEST,
});
export const signUpSuccess = () => ({
  type: USER_SIGNUP_SUCCESS,
});
export const signUpFail = () => ({
  type: USER_SIGNUP_FAIL,
});

export const logOut = () => ({
  type: USER_LOGOUT,
});
