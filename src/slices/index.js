import authorizationReducer from './authorizationInfoSlice';
import usersReducer from './usersSlice';
import filtersReducer from './filterSlice';
import modalWindowReducer from './modalWindowSlice';

export default {
  authorizationInfo: authorizationReducer,
  usersInfo: usersReducer,
  filtersInfo: filtersReducer,
  modalWindowInfo: modalWindowReducer,
};
