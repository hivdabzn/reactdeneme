/*
 * Hem reducer'ı hem aksiyonları hem de aksiyon tiplerini tek noktada oluşturmamızı sağlar.

 * Nasıl slice oluşturulur ?
 * import createSlice
 * name: slice ismi > string
 * initialState: başlangıç state'i > object
 * reducers: aksiyonların görevini tanımladığımız fonksiyonları ifade eder
  
 ! NOT: Reducers içerisine yazdığımız fonksiyonlarda klasik redux'tan farklı olarak state'i doğrudan güncelleyebiliyoruz
 */

import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  // slice'ın ismi
  name: "counter",
  // tutucağımız verilerin ilk değeri
  initialState: { count: 1, name: "furkan" },
  // hem aksiyonları hemde görevlerini tanımla
  reducers: {
    increase: (state) => {
      // klasik redux (state doğrudan güncellenmiyo)
      // return { ...state, count: state.count + 1 };

      // toolkit (doğrudan güncellenebilir)
      state.count++;
    },

    decrease: (state) => {
      state.count--;
    },

    setCount: (state, action) => {
      state.count = action.payload;
    },
  },
});

// projede kullancağımız aksiyon fonksiyonları / tiplerini otomatik tanımlar
export const { increase, decrease, setCount } = counterSlice.actions;

// store'a tanıtılacak olan reducer'ı slice kendisi oluştur
export default counterSlice.reducer;
