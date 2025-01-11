import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/counterSlice";

/*
 * createStore vs configureStore
 * reducer'ları otomatik olarak birleştirir.
 * thunk içerisinde kurulu olarak gelir
 * devtools (geliştirici araçları) kurulu gelir
 */

const store = configureStore({
  reducer: {
    counterReducer,
  },
});

export default store;
