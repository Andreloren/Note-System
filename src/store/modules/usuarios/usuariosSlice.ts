import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import { Usuario } from "../usuarioLogado/usuarioLogadoSlice";

const initialState: Usuario[] = [];

const usuariosSlice = createSlice({
  name: "usuarios",
  initialState: initialState,
  reducers: {
    adicionarUsuario: (state, action: PayloadAction<Usuario>) => {
      return [...state, action.payload];
    },
  },
});

export const { adicionarUsuario } = usuariosSlice.actions;

export default usuariosSlice.reducer;
