import { CHANGE_HL } from "./constants.js";
import { CHANGE_HD } from "./constants.js";
import { SET_LOGIN } from "./constants.js";

const initialState = {
  wheel: Boolean,
  displayLogin: false,
};

export const rootReducer = (state = initialState, action) => {
  console.log(action.type);
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

    default:
      return state;
  }
};
