import { createStore } from "redux";
import { rootReducer } from "./reducers";

// const initialState = 0;

const store = createStore(rootReducer);

export default store;
