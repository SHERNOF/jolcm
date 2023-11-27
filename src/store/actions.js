import {
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_LOGOUT,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  USER_SIGNUP_FAIL,
  CREATE_EVENT_REQUEST,
  CREATE_EVENT_SUCCESS,
  CREATE_EVENT_FAIL,
  CREATE_EVENT_RESET,
  DETAILS_USER_REQUEST,
  DETAILS_USER_FAIL,
  DETAILS_USER_SUCCESS,
  SEND_MESSAGE_SUCCESS,
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_FAIL,
  SET_MODAL,
  FETCH_MESSAGES_REQUEST,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILED,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED,
  FETCH_WOW_REQUEST,
  FETCH_WOW_SUCCESS,
  FETCH_WOW_FAILED,
  WOW_POST_REQUEST,
  WOW_POST_SUCCESS,
  WOW_POST_FAILED,
  WOW_DELETE_REQUEST,
  WOW_DELETE_SUCCESS,
  WOW_DELETE_FAILED,
} from "./constants.js";
import { CHANGE_MOUSEUP } from "./constants.js";
import { CHANGE_MOUSEDOWN } from "./constants.js";
import { SET_LOGIN } from "./constants.js";
import { FETCH_DATA_REQUEST } from "./constants.js";
import { FETCH_DATA_SUCCESS } from "./constants.js";
import { FETCH_DATA_FAILED } from "./constants.js";
import { SET_BACKDROP } from "./constants.js";

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

export const createEventRequest = () => ({
  type: CREATE_EVENT_REQUEST,
});
export const createEventSuccess = () => ({
  type: CREATE_EVENT_SUCCESS,
});
export const createEventFail = () => ({
  type: CREATE_EVENT_FAIL,
});
export const createEventReset = () => ({
  type: CREATE_EVENT_RESET,
});

export const detailsUserSuccess = () => ({
  type: DETAILS_USER_SUCCESS,
});
export const detailsUserFail = () => ({
  type: DETAILS_USER_FAIL,
});
export const detailsUserRequest = () => ({
  type: DETAILS_USER_REQUEST,
});
export const setBackdrop = () => ({
  type: SET_BACKDROP,
});

export const sendMessageRequest = () => ({
  type: SEND_MESSAGE_REQUEST,
});
export const sendMessageSuccess = () => ({
  type: SEND_MESSAGE_SUCCESS,
});
export const sendMessageFail = () => ({
  type: SEND_MESSAGE_FAIL,
});

export const logOut = () => ({
  type: USER_LOGOUT,
});

export const setModal = () => ({
  type: SET_MODAL,
});

export const requestMessage = () => ({
  type: FETCH_MESSAGES_REQUEST,
});

export const successMessage = () => ({
  type: FETCH_MESSAGES_SUCCESS,
});

export const failedMessage = () => ({
  type: FETCH_MESSAGES_FAILED,
});

export const requestUsers = () => ({
  type: FETCH_USERS_REQUEST,
});

export const successUsers = () => ({
  type: FETCH_USERS_SUCCESS,
});

export const failedUsers = () => ({
  type: FETCH_USERS_FAILED,
});

export const requestWow = () => ({
  type: FETCH_WOW_REQUEST,
});

export const successWow = () => ({
  type: FETCH_WOW_SUCCESS,
});

export const failedWow = () => ({
  type: FETCH_WOW_FAILED,
});

export const requestWowDelete = () => ({
  type: WOW_DELETE_REQUEST,
});

export const successWowDelete = () => ({
  type: WOW_DELETE_SUCCESS,
});

export const failedWowDelete = () => ({
  type: WOW_DELETE_FAILED,
});
export const resetWowDelete = () => ({
  type: WOW_DELETE_RESET,
});