/*
 ! store
 * bütün reducer'ların tek bir merkezde toplandığı state deposudur

 * 1) redux kütüphaneisinden createStore methodu import edilir
 * 2) store içerisinde tutulacak olan her bir veri için reducer'lar oluşturulur
 * 3) oluşturulan reducerlar `combineReducers` methodu ile import edilir
*/

import { combineReducers, createStore } from "redux";
import todoReducer from "./reducers/todoReducer";
import userReducer from "./reducers/userReducer";

// birden fazla reducer case onları birleştir
const rootReducer = combineReducers({
  todoReducer,
  userReducer,
});

// store'u oluştur
const store = createStore(rootReducer);

// projeye tanıtmak için export et
export default store;
