import { createStore, combineReducers } from "redux";
import { rootReducers } from "./reducers";
export const store = createStore(rootReducers);
