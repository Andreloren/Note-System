import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface Recado {
  id: string;
  descricao: string;
  detalhamento: string;
}

export interface Usuario {
  nome: string;
  email: string;
  senha: string;
  recados: Recado[];
}
const initialState: Usuario = {
  nome: "",
  email: "",
  senha: "",
  recados: [],
};

const usuarioLogadoSlice = createSlice({
  name: "usuarioLogado",
  initialState: initialState,
  reducers: {
    limparUsuarioLogado: (state, action: PayloadAction<Usuario>) => {
      return initialState;
    },
    incluirUsuarioLogado: (state, action: PayloadAction<Usuario>) => {
      return action.payload;
    },
    adicionarRecados: (state, action: PayloadAction<Recado>) => {
      state.recados = [...state.recados, action.payload];
    },
  },
});
