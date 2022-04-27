import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  storage,
};

const themeReducer = createSlice({
  name: "theme",
  initialState: {
    theme: "light",
  },
  reducers: {
    setTheme: (state, action) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

const persistedReducer = persistReducer(persistConfig, themeReducer.reducer);

export const { setTheme } = themeReducer.actions;
export default persistedReducer;
