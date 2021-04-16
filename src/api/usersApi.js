import { createApi, fetchBaseQuery } from '@rtk-incubator/rtk-query';
import { getUserToken, toSomeCase, showToast } from '../utils';
import {
  setUsers,
  setUser,
  deleteUser,
  updateUser,
  createUser,
} from '../slices/usersSlice';
import i18 from '../i18n';

export const usersApi = createApi({
  reducerPath: 'usersApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://emphasoft-test-assignment.herokuapp.com/api/v1',
    prepareHeaders: (headers) => {
      const token = getUserToken();
      if (token) {
        headers.set('Authorization', `Token ${token}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => '/users/',
      onSuccess: (_, { dispatch }, users) => {
        const usersToCamelCase = users.map((user) => toSomeCase(user));
        dispatch(setUsers({ users: usersToCamelCase }));
      },
      onError: () => showToast(i18.t('warnings.defaultError')),
    }),
    getUser: builder.query({
      query: (id) => `/users/${id}/`,
      onSuccess: (_, { dispatch }, userData) => {
        const userToCamelCase = toSomeCase(userData);
        dispatch(setUser({ userData: userToCamelCase }));
      },
      onError: () => showToast(i18.t('warnings.defaultError')),
    }),
    deleteUser: builder.mutation({
      query: (id) => ({
        url: `/users/${id}/`,
        method: 'DELETE',
      }),
      onSuccess: (id, { dispatch }) => dispatch(deleteUser({ id })),
      onError: () => showToast(i18.t('warnings.defaultError')),
    }),
    updateUser: builder.mutation({
      query: ({ id, ...data }) => ({
        url: `/users/${id}/`,
        method: 'PATCH',
        body: toSomeCase(data, 'snakeCase'),
      }),
      onSuccess: (userData, { dispatch }) => {
        const userToCamelCase = toSomeCase(userData);
        dispatch(updateUser({ userData: userToCamelCase }));
      },
      onError: (_, __, error) => {
        const errorMessage = error.status === 400 ? 'collisionError' : 'defaultError';
        showToast(i18.t(`warnings.${errorMessage}`));
      },
    }),
    createUser: builder.mutation({
      query: (data) => ({
        url: '/users/',
        method: 'POST',
        body: data,
      }),
      onSuccess: (_, { dispatch }, userData) => {
        const userToCamelCase = toSomeCase(userData);
        dispatch(createUser({ userData: userToCamelCase }));
      },
      onError: (_, __, error) => {
        const errorMessage = error.status === 400 ? 'collisionError' : 'defaultError';
        showToast(i18.t(`warnings.${errorMessage}`));
      },
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetUserQuery,
  useDeleteUserMutation,
  useUpdateUserMutation,
  useCreateUserMutation,
} = usersApi;
