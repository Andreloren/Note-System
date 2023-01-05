// @ts-nocheck
import {
  createEntityAdapter,
  createSlice,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { RootState } from "../..";
import { requisicaoApi } from "../../../services/api";
import {
  IatualizaRecado,
  IcriarRecado,
  IdeleteRecado,
  Recado,
} from "../../../interfaces";

const adapter = createEntityAdapter<Recado>({
  selectId: (recados) => recados.id,
});

export const { selectAll: buscarRecados, selectById: buscarRecadoPorId } =
  adapter.getSelectors((state: RootState) => state.recados);

export const buscarRecadosUsuarioAPI = createAsyncThunk(
  "recado/buscarTodos",
  async (cpf: string) => {
    const respostaApi = await requisicaoApi.get(`/usuarios/${cpf}/recados`);

    const dataPartial = JSON.parse(respostaApi.data);

    return dataPartial;
  }
);

export const adicionarRecadoAPI = createAsyncThunk(
  "recado/adicionarNovo",
  async (dados: IcriarRecado, { dispatch }) => {
    const respostaApi = await requisicaoApi.post(
      `/usuarios/${dados.cpf}/recados`,
      JSON.stringify(dados.recado)
    );

    const dataPartial = JSON.parse(respostaApi.data);

    return dataPartial;

    // const dataPartial = JSON.parse(respostaApi.data);
    // if (respostaApi.status === 200) {
    //   dispatch(buscarRecadosUsuarioAPI(dados.cpf));
    //   return dataPartial;
    // }
  }
);

export const atualizarRecadoAPI = createAsyncThunk(
  "recado/atualizarRecado",
  async (dados: IatualizaRecado) => {
    const respostaApi = await requisicaoApi.put(
      `/usuarios/${dados.cpf}/recados/${dados.recado.id}`,
      JSON.stringify(dados.recado)
    );

    const dataPartial = JSON.parse(respostaApi.data);

    return dataPartial;
  }
);

export const deletarRecadoAPI = createAsyncThunk(
  "recado/deletarRecado",
  async (dados: IdeleteRecado) => {
    const respostaApi = await requisicaoApi.delete(
      `/usuarios/${dados.cpf}/recados/${dados.id}`
    );

    const dataPartial = JSON.parse(respostaApi.data);

    return dataPartial;
  }
);

const recadoSlice = createSlice({
  name: "recados",
  initialState: adapter.getInitialState({
    // success: false,
    // message: "",
  }),
  reducers: {
    deletarTodos: adapter.removeAll,
    adicionarTodosRecados: adapter.setAll,
  },
  extraReducers: {
    [buscarRecadosUsuarioAPI.fulfilled]: (state, action) => {
      state = action.payload;
    },

    [adicionarRecadoAPI.fulfilled]: (state, action) => {
      adapter.addOne(state, action.payload.data);
    },

    [atualizarRecadoAPI.fulfilled]: (state, action) => {
      adapter.updateOne(state, {
        id: action.payload.data.recados.id,
        changes: action.payload.data,
      });
    },

    [deletarRecadoAPI.fulfilled]: (state, action) => {
      adapter.setOne(state, action.payload.dados);
    },
  },
});

export const { deletarTodos, adicionarTodosRecados } = recadoSlice.actions;

export default recadoSlice.reducer;
