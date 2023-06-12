import { CHANGE_HL } from "./constants.js";
import { CHANGE_HD } from "./constants.js";
import { SET_LOGIN } from "./constants.js";
import { OUR_TEAM } from "./constants.js";

export const wheel = () => ({
  type: CHANGE_HL,
});
export const wheel2 = () => ({
  type: CHANGE_HD,
});
export const logIn = () => ({
  type: SET_LOGIN,
});
