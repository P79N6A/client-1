import { combineReducers } from "redux";
import { global } from "../global";
import { applets } from "../../page/applets/model/applets";
export const rootReducer = combineReducers({
  applets,
  global
});
