import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export type Modal = {
  open: boolean;
};

const initialState: Modal = {
  open: false,
};

const contadorRecados = createSlice({
  name: "contador",
  initialState: initialState,
  reducers: {
    esconderModal: (state) => {
      return initialState;
    },
    mostrarModal: (state, action: PayloadAction<Modal>) => {
      return action.payload;
    },
  },
});

export const { esconderModal, mostrarModal } = contadorRecados.actions;

export default contadorRecados.reducer;
