import { CHANGE_HL, USERS_SIGNIN } from "./constants.js";
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

export const signIn = () => ({
  type: USERS_SIGNIN,
});
