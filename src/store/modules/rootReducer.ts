import { combineReducers } from "redux";
import usuarios from "./usuarios/usuariosSlice";
import usuarioLogado from "./usuarioLogado/usuarioLogadoSlice";
import recados from "./recados/recadosSlice";
import contador from "./contador/contador";

const rootReducer = combineReducers({
  usuarios,
  usuarioLogado,
  recados,
  contador,
});

export default rootReducer;
