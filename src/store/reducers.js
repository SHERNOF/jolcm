import {
  CHANGE_HL,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
} from "./constants.js";
import { CHANGE_HD } from "./constants.js";
import { SET_LOGIN } from "./constants.js";
import { USER_SIGNIN } from "./constants.js";
import { USER_LOGOUT } from "./constants.js";
// export const FETCH_DATA_REQUEST = "./constants.js";
// export const FETCH_DATA_SUCCESS = "./constants.js";
// export const FETCH_DATA_FAILED = "./constants.js";

import { FETCH_DATA_REQUEST } from "./constants.js";
import { FETCH_DATA_SUCCESS } from "./constants.js";
import { FETCH_DATA_FAILED } from "./constants.js";

const initialState = {
  wheel: Boolean,
  displayLogin: false,
  churchEvents: [],
  team: [],
  error: "",
  loading: true,
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
};

export const rootReducer = (state = initialState, action) => {
  // console.log(action.type);
  switch (action.type) {
    case CHANGE_HL:
      // return Object.assign({}, state, { wheel: action.payload });
      // return { ...state, wheel: !action.payload };
      return { wheel: (state.wheel = false) };
    case CHANGE_HD:
      return { wheel: (state.wheel = true) };

    // SET LOGIN REDUCER
    case SET_LOGIN:
      return { displayLogin: !state.displayLogin };

    // FOR HOME PAGE (Team and Events)

    case FETCH_DATA_REQUEST:
      return { ...state, loading: true };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        churchEvents: action.payload,
        loading: false,
      };
    // case "FETCH_DATAT_SUCCESS":
    //   return { ...state, team: action.payload, loading: false };
    case FETCH_DATA_FAILED:
      return { ...state, loading: false, error: action.payload };

    case USER_SIGNIN_REQUEST:
      return { ...state, loading: true };
    case USER_SIGNIN_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case USER_SIGNIN_FAIL:
      return { ...state, loading: false, error: action.payload };
    case USER_LOGOUT:
      return { ...state, userInfo: null };

    default:
      return state;
  }
};
