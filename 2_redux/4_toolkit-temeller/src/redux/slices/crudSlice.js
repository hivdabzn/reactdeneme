import { createSlice } from "@reduxjs/toolkit";
import { v4 } from "uuid";
import { initialTasks } from "../../utils/constants";

const crudSlice = createSlice({
  name: "crud",
  initialState: { tasks: initialTasks },
  reducers: {
    addTask: (state, action) => {
      // gelen task içeriğine id ekle
      action.payload.id = v4();

      // task dizisine yeni taski ekle
      state.tasks.push(action.payload);
    },

    deleteTask: (state, action) => {
      // id'sini aldığımız elemanın sırasını bul
      const i = state.tasks.findIndex((i) => i.id === action.payload);

      // sırasını bulduğumuz elemanı sil
      state.tasks.splice(i, 1);
    },

    updateTask: (state, action) => {
      // güncellenicek elemanın sırasını bul
      const i = state.tasks.findIndex((i) => i.id === action.payload.id);

      // dizideki eski elamanın yerine action'un payloadı ile gelen elemanı koy
      state.tasks.splice(i, 1, action.payload);
    },
  },
});

export const { addTask, deleteTask, updateTask } = crudSlice.actions;

export default crudSlice.reducer;
