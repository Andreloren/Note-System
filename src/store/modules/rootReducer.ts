import { combineReducers } from "redux";
import usuariosSlice from "./usuarios/usuariosSlice";

const rootReducer = combineReducers({
  usuariosSlice,
});

export default rootReducer;
