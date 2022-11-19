import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface Recado {
  id: string;
  descricao: string;
  detalhamento: string;
  userEmail?: string;
}
export interface Usuario {
  nome: string;
  cpf: string;
  email: string;
  senha: string;
}
const initialState: Partial<Usuario> = {
  nome: "",
  email: "",
};

const usuarioLogadoSlice = createSlice({
  name: "usuarioLogado",
  initialState: initialState,
  reducers: {
    limparUsuarioLogado: (state) => {
      return initialState;
    },
    incluirUsuarioLogado: (state, action: PayloadAction<Partial<Usuario>>) => {
      return action.payload;
    },
  },
});

export const { limparUsuarioLogado, incluirUsuarioLogado } =
  usuarioLogadoSlice.actions;

export default usuarioLogadoSlice.reducer;
