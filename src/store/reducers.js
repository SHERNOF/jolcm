import { CHANGE_WHEEL_VALUE } from "./constants.js";

const initialState = {
  wheel: false,
};

export const setHeaderColor = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case CHANGE_WHEEL_VALUE:
      // return Object.assign({}, state, { wheel: action.payload });
      // return { ...state, wheel: !action.payload };
      return { wheel: !state.wheel };
    default:
      return state;
  }
};
