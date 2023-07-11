import { CHANGE_HL } from "./constants.js";
import { CHANGE_HD } from "./constants.js";
import { SET_LOGIN } from "./constants.js";
export const FETCH_DATA_REQUEST = "./constants.js";
export const FETCH_DATA_SUCCESS = "./constants.js";
export const FETCH_DATA_FAILED = "./constants.js";

const initialState = {
  wheel: Boolean,
  displayLogin: false,
  churchEvents: [],
  team: [],
  error: "",
  loading: true,
  userInfo: {},
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

    case "FETCH_DATA_REQUEST":
      return { ...state, loading: true };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        churchEvents: action.payload,
        loading: false,
      };
    // case "FETCH_DATAT_SUCCESS":
    //   return { ...state, team: action.payload, loading: false };
    case "FETCH_DATA_FAIL":
      return { ...state, loading: false, error: action.payload };

    case "USERS_SIGNIN":
      return { ...state, userInfo: action.payload };

    default:
      return state;
  }
};
