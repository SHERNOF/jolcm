import {
  CHANGE_MOUSEUP,
  DETAILS_USER_FAIL,
  DETAILS_USER_REQUEST,
  DETAILS_USER_SUCCESS,
  SET_BACKDROP,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNUP_FAIL,
  USER_SIGNUP_REQUEST,
  USER_SIGNUP_SUCCESS,
  SEND_MESSAGE_FAIL,
  SEND_MESSAGE_REQUEST,
  SEND_MESSAGE_SUCCESS,
  SET_MODAL,
  FETCH_MESSAGES_REQUEST,
  FETCH_MESSAGES_SUCCESS,
  FETCH_MESSAGES_FAILED,
  FETCH_USERS_REQUEST,
  FETCH_USERS_SUCCESS,
  FETCH_USERS_FAILED,
} from "./constants.js";
import { CHANGE_MOUSEDOWN } from "./constants.js";
import { SET_LOGIN } from "./constants.js";
import { USER_LOGOUT } from "./constants.js";
import { FETCH_DATA_REQUEST } from "./constants.js";
import { FETCH_DATA_SUCCESS } from "./constants.js";
import { FETCH_DATA_FAILED } from "./constants.js";

const initialState = {
  openModal: true,
  setBackdrop: false,
  wheel: Boolean,
  displayLogin: false,
  churchEvents: [],
  team: [],
  error: "",
  loading: true,
  userInfo: localStorage.getItem("userInfo")
    ? JSON.parse(localStorage.getItem("userInfo"))
    : null,
  churchEvent: {},
  detailsUser: {},
  isAuth: true,
  messages:{},
  usersList:{},
};

export const rootReducer = (state = initialState, action) => {
  // console.log(action.type);
  switch (action.type) {
    case CHANGE_MOUSEUP:
      // return Object.assign({}, state, { wheel: action.payload });
      // return { ...state, wheel: !action.payload };
      return { wheel: (state.wheel = false) };
    case CHANGE_MOUSEDOWN:
      return { wheel: (state.wheel = true) };

    // SET LOGIN REDUCER
    case SET_LOGIN:
      return { displayLogin: !state.displayLogin };
      // return { setBackdrop: !state.setBackdrop };

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

    case USER_SIGNUP_REQUEST:
      return { ...state, loading: true };
    case USER_SIGNUP_SUCCESS:
      return { ...state, loading: false, userInfo: action.payload };
    case USER_SIGNUP_FAIL:
      return { ...state, loading: false, error: action.payload };

    case DETAILS_USER_REQUEST:
      return { ...state, loading: true };
    case DETAILS_USER_SUCCESS:
      return { ...state, loading: false, detailsUser: action.payload };
    case DETAILS_USER_FAIL:
      return { ...state, loading: false, error: action.payload };

    case USER_LOGOUT:
      return { ...state, userInfo: null };

    case SET_BACKDROP:
      return { setBackdrop: !state.setBackdrop };

      case SEND_MESSAGE_REQUEST:
        return { ...state, loading: true };
      case SEND_MESSAGE_SUCCESS:
        return { ...state, loading: false, message: action.payload };
      case SEND_MESSAGE_FAIL:
        return { ...state, loading: false, error: action.payload };

        case SET_MODAL:
      return { displayLogin: !state.openModal };


      case FETCH_MESSAGES_REQUEST:
      return { ...state, loading: true };
      case FETCH_MESSAGES_SUCCESS:
        return {
          ...state,
          messages: action.payload,
          loading: false,
        };
      case FETCH_MESSAGES_FAILED:
        return { ...state, loading: false, error: action.payload };

        case FETCH_USERS_REQUEST:
          return { ...state, loading: true };
          case FETCH_USERS_SUCCESS:
            return {
              ...state,
              usersList: action.payload,
              loading: false,
            };
          case FETCH_USERS_FAILED:
            return { ...state, loading: false, error: action.payload };

    default:
      return state;
  }
};
