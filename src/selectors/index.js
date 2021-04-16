import { createSelector } from '@reduxjs/toolkit';
import { requiredData } from '../utils';

const getAuthorizationInfo = (state) => state.authorizationInfo.isAuth;
const getUsers = (state) => state.usersInfo.users;
const getUserData = (state) => state.usersInfo.userData;
const getFilters = (state) => state.filtersInfo;
const getModalInfo = (state) => state.modalWindowInfo;

const lowerCaseFilterSelector = createSelector(
  getFilters,
  ({ username }) => username.toLowerCase(),
);

export const authSelector = createSelector(
  getAuthorizationInfo,
  (isAuth) => isAuth,
);

export const sortedUsersSelector = createSelector(
  getUsers,
  (users) => users.slice().sort((a, b) => (a.id < b.id ? -1 : 1)),
);

export const filtredUsersSelector = createSelector(
  [sortedUsersSelector, lowerCaseFilterSelector],
  (users, substr) => users.filter(({ username }) => {
    const nameToLowerCase = username.toLowerCase();
    return nameToLowerCase.includes(substr);
  }),
);

export const userDataSelector = createSelector(
  getUserData,
  (userData) => userData,
);

export const requiredDataSelector = createSelector(
  userDataSelector,
  ({ id, ...data }) => Object.entries(data)
    .reduce((acc, [key, value]) => (requiredData.includes(key) ? { ...acc, [key]: value } : acc),
      { id }),
);

export const modalInfoSelector = createSelector(
  getModalInfo,
  (modalInfo) => modalInfo,
);
