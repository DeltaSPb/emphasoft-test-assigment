import { usersApi } from './usersApi';
import { authApi } from './authApi';

export const apiReducers = {
  [authApi.reducerPath]: authApi.reducer,
  [usersApi.reducerPath]: usersApi.reducer,
};

export const apiMiddlewares = [
  authApi.middleware,
  usersApi.middleware,
];
