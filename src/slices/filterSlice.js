import { createSlice } from '@reduxjs/toolkit';
import { setUser } from './usersSlice';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    username: '',
  },
  reducers: {
    updateFilter(state, { payload: { username } }) {
      state.username = username;
    },
  },
  extraReducers: {
    [setUser](state) {
      state.username = '';
    },
  },
});

export const { updateFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
