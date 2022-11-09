import { combineReducers } from "redux";
import usuarios from "./usuarios/usuariosSlice";
import usuarioLogado from "./usuarioLogado/usuarioLogadoSlice";

const rootReducer = combineReducers({
  usuarios,
  usuarioLogado,
});

export default rootReducer;
