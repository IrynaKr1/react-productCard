import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slices/productSlice';
import userReducer from './slices/usersSlice';

const store = configureStore({
  reducer: {
    productList: productReducer,
    usersList: userReducer,
  },
});

export default store;
