import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";
import { RootState } from "../..";
import { requisicaoApi } from "../../../services/api";

import { atualizarUsuario, Recado, Usuario } from "../../../interfaces";

const userAdapter = createEntityAdapter<Usuario>({
  selectId: (user) => user.cpf,
});

export const {
  selectAll: selecionarUsuarios,
  selectById: selecionarUsuariosPorCpf,
} = userAdapter.getSelectors((state: RootState) => state.usuarios);

export const buscarUsuariosAPI = createAsyncThunk(
  "usuarios/buscarUsuarios",
  async () => {
    const respostaApi = await requisicaoApi.get("/usuarios");

    const dataPartial = JSON.parse(respostaApi.data);

    return dataPartial;
  }
);

export const adicionarUsuarioAPI = createAsyncThunk(
  "usuarios/adicionarUsuario",
  async (novoUsuario: Usuario) => {
    const respostaApi = await requisicaoApi.post("/usuarios", novoUsuario);

    const dataParsed = JSON.parse(respostaApi.data);

    return dataParsed;
  }
);

export const atualizarRecadosUsuarioAPI = createAsyncThunk(
  "usuarios/atualizarRecados",
  async (novosDados: atualizarUsuario) => {
    const respostaApi = await requisicaoApi.put(
      `/usuarios/${novosDados.cpf}`,
      JSON.stringify(novosDados.recados)
    );

    const dataPartial = JSON.parse(respostaApi.data);

    return dataPartial;
  }
);

const usuariosSlice = createSlice({
  name: "usuarios",
  initialState: userAdapter.getInitialState({
    success: false,
    message: "",
  }),
  reducers: {},
  extraReducers(builder) {
    builder.addCase(buscarUsuariosAPI.fulfilled, (state, action) => {
      state.success = action.payload.sucess;
      state.message = action.payload.message;
      userAdapter.setAll(state, action.payload.data);
    });

    builder.addCase(adicionarUsuarioAPI.fulfilled, (state, action) => {
      state.success = action.payload.sucess;
      state.message = action.payload.message;
      userAdapter.addOne(state, action.payload.data);
    });

    builder.addCase(atualizarRecadosUsuarioAPI.fulfilled, (state, action) => {
      state.success = action.payload.sucess;
      state.message = action.payload.message;
      userAdapter.updateOne(state, {
        id: action.payload.data.cpf,
        changes: action.payload.data,
      });
    });
  },
});

export default usuariosSlice.reducer;
