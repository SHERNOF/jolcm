import {
  CHANGE_HL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_LOGOUT,
} from "./constants.js";
import { CHANGE_HD } from "./constants.js";
import { SET_LOGIN } from "./constants.js";
import { FETCH_DATA_REQUEST } from "./constants.js";
import { FETCH_DATA_SUCCESS } from "./constants.js";
import { FETCH_DATA_FAILED } from "./constants.js";

export const wheel = () => ({
  type: CHANGE_HL,
});
export const wheel2 = () => ({
  type: CHANGE_HD,
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
// export const success = () => ({
//   type: FETCH_DATAT_SUCCESS,
// });
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
export const logOut = () => ({
  type: USER_LOGOUT,
});
