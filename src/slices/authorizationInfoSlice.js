import { createSlice } from '@reduxjs/toolkit';

const authorizationInfoSlice = createSlice({
  name: 'authorization',
  initialState: {
    isAuth: false,
  },
  reducers: {
    init(state, { payload: { token } }) {
      state.isAuth = !!token;
    },
    login(state) {
      state.isAuth = true;
    },
    logout(state) {
      state.isAuth = false;
    },
  },
});

export const { init, login, logout } = authorizationInfoSlice.actions;
export default authorizationInfoSlice.reducer;
