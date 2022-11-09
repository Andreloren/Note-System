import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import rootReducer from "./modules/rootReducer";

const config = {
  key: "note-system",
  storage,
};

const persist = persistReducer(config, rootReducer);

const minhaStore = configureStore({
  reducer: persist,
});

const meuPersistor = persistStore(minhaStore);

export { minhaStore, meuPersistor };

export type RootState = ReturnType<typeof minhaStore.getState>;
export type AppDispatch = typeof minhaStore.dispatch;