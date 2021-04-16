import { createSlice } from '@reduxjs/toolkit';

const modalWindowSlice = createSlice({
  name: 'modalWindow',
  initialState: {
    isShown: false,
    type: null,
  },
  reducers: {
    showModal(state, { payload: { type } }) {
      state.isShown = true;
      state.type = type;
    },
    hideModal(state) {
      state.isShown = false;
      state.type = null;
    },
  },
});

export const { showModal, hideModal } = modalWindowSlice.actions;
export default modalWindowSlice.reducer;
