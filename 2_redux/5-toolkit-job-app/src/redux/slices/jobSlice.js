import { createSlice } from "@reduxjs/toolkit";

const initialState = { jobs: [], isLoading: true, error: null };

const jobSlice = createSlice({
  name: "job",
  initialState,
  reducers: {
    setLoading: (state) => {
      state.isLoading = true;
    },

    setError: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload.message;
    },

    setJobs: (state, { payload }) => {
      state.isLoading = false;
      state.error = null;
      state.jobs = payload;
    },
  },
});

export const { setLoading, setError, setJobs } = jobSlice.actions;

export default jobSlice.reducer;
