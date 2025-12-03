import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://randomuser.me/api',
});

const initialState = {
  users: [],
  isFetching: false,
  error: null,
};

export const getUsersThunk = createAsyncThunk(
  'users/getUsers',
  async (payload, thunkAPI) => {
    try {
      const { data } = await axiosInstance.get('/?page=3&results=10');
      console.log('data', data);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

const usersSlice = createSlice({
  initialState,
  name: 'users',
  reducers: {},
  extraReducers: builder => {
    builder.addCase(getUsersThunk.pending, (state, action) => {
      state.isFetching = true;
      state.error = null;
    });
    builder.addCase(getUsersThunk.fulfilled, (state, { payload }) => {
      state.users = payload.results;
      state.isFetching = false;
    });
    builder.addCase(getUsersThunk.rejected, (state, { payload }) => {
      state.isFetching = false;
      state.error = payload;
    });
  },
});

const { reducer, actions } = usersSlice;

export default reducer;
