import { createSlice } from '@reduxjs/toolkit';

export const adminSlice = createSlice({
  name: 'admin',
  initialState: {
    employees: [],
    admin: [],
    error: null
  },
  reducers: {
    setEmployees: (state, action) => {
      state.employees = action.payload;
    },
    setAdmin: (state, action) => {
      state.admin = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    }
  }
});

export const { setEmployees, setError, setAdmin } = adminSlice.actions;

export default adminSlice.reducer;
