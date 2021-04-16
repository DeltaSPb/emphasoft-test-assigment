import { createApi, fetchBaseQuery } from '@rtk-incubator/rtk-query';
import { login } from '../slices/authorizationInfoSlice';
import { setUserToken, showToast } from '../utils';
import i18 from '../i18n';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://emphasoft-test-assignment.herokuapp.com',
  }),
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: '/api-token-auth/',
        method: 'POST',
        body: credentials,
      }),
      onSuccess: (_, { dispatch }, response) => {
        const { token } = response;
        setUserToken(token);
        dispatch(login());
      },
      onError: (_, __, error) => {
        const errorMessage = error.status === 400 ? 'authError' : 'defaultError';
        showToast(i18.t(`warnings.${errorMessage}`));
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
