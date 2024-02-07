import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../reducers/userSlice';
import adminReducer from '../reducers/adminSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    admin: adminReducer
  }
});

export default store;
