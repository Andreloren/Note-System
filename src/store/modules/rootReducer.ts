import { combineReducers } from "redux";
import usuarios from "./usuarios/usuariosSlice";
import usuarioLogado from "./usuarioLogado/usuarioLogadoSlice";
import recados from "./recados/recadosSlice";
import modal from "./modal/modalSlice";

const rootReducer = combineReducers({
  usuarios,
  usuarioLogado,
  recados,
  modal,
});

export default rootReducer;
