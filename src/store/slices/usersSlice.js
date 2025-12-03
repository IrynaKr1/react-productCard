import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  isFetching: false,
  error: null,
};

export const getUsersThunk = createAsyncThunk(
  'users/getUsers',
  async (payload, thunkAPI) => {
    try {
      const response = await fetch(
        'https://randomuser.me/api/?page=3&results=10'
      );
      const { data } = await response.json();
      return data.results;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const usersSlice = createSlice({
  initialState,
  name: 'users',
  reducers: {},
});

const { reducer, actions } = usersSlice;

export default reducer;
