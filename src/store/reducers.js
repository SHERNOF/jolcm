import { CHANGE_WHEEL_VALUE } from "./constants.js";

const initialState = {
  setWheel: false,
};

export const setHeaderColor = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_WHEEL_VALUE:
      //   return Object.assign({}, state, { setWheel: action.payload });
      return { ...state, setWheel: action.payload };
    default:
      return state;
  }
};
