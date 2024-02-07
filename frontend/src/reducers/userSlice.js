import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    tasks: [],
    user: [],
    error: null,
  },
  reducers: {
    setTasks: (state, action) => {
      state.tasks = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setTasks, setError, setUser } = userSlice.actions;

export default userSlice.reducer;
