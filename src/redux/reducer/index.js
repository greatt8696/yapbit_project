import { combineReducers } from "redux";
import { coinsPrice } from "../../util/ticker";
import coinReducer from "./coinReducer";
import loginReducer from "./loginReducer";
import msgReducer from "./msgReducer";
import postReducer from "./postReducer";
import signUpReducer from "./signUpReducer";
import uiReducer from "./uiReducer";

const rootReducer = combineReducers({
  coinReducer,
  loginReducer,
  msgReducer,
  postReducer,
  signUpReducer,
  uiReducer,
});

export default rootReducer;
