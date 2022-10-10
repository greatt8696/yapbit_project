import { combineReducers } from "redux";
import coinReducer from "./coinReducer";
import loginReducer from "./loginReducer";
import msgReducer from "./msgReducer";
import postReducer from "./postReducer";
import signUpReducer from "./signUpReducer";
import uiReducer from "./uiReducer";
import myAssetReducer from "./myAssetReducer";

const rootReducer = combineReducers({
  coinReducer,
  loginReducer,
  msgReducer,
  postReducer,
  signUpReducer,
  uiReducer,
  myAssetReducer,
});

export default rootReducer;
