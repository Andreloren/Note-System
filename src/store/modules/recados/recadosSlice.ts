import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { Recado } from "../usuarioLogado/usuarioLogadoSlice";

const adapter = createEntityAdapter<Recado>({
  selectId: (recado) => recado.id,
});

export const { selectAll, selectById } = adapter.getSelectors(
  (state: any) => state.recados
);

const slice = createSlice({
  name: "recados",
  initialState: adapter.getInitialState(),
  reducers: {
    adicionarItem: adapter.addOne,
    atualizarItem: adapter.updateOne,
    removerItem: adapter.removeOne,
  },
});

export const { adicionarItem, atualizarItem, removerItem } = slice.actions;

export default slice.reducer;
