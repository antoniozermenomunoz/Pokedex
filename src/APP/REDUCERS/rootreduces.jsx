import { combineReducers } from "redux";
import uiReducer from "../SLICES/uiSlice";
import dataReducer from "../SLICES/dataSlice";

const rootReducer = combineReducers({
  data: dataReducer,
  ui: uiReducer,
});

export { rootReducer };
