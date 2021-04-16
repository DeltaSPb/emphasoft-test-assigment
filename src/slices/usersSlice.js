import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    userData: null,
  },
  reducers: {
    setUsers(state, { payload: { users } }) {
      state.users = users;
    },
    setUser(state, { payload: { userData } }) {
      state.userData = userData;
    },
    deleteUser(state, { payload: { id } }) {
      state.users = state.users.filter((user) => user.id !== id);
      state.userData = null;
    },
    updateUser(state, { payload: { userData } }) {
      const { id } = userData;
      const index = state.users.findIndex((user) => user.id === id);
      state.users[index] = userData;
      state.userData = userData;
    },
    createUser(state, { payload: { userData } }) {
      state.users.push(userData);
    },
  },
});

export const {
  setUsers,
  setUser,
  deleteUser,
  updateUser,
  createUser,
} = usersSlice.actions;

export default usersSlice.reducer;
