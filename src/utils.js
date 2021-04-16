import * as Yup from 'yup';
import cookie from 'js-cookie';
import mapKeys from 'lodash/mapKeys';
import camelCase from 'lodash/camelCase';
import lowerCase from 'lodash/lowerCase';
import snakeCase from 'lodash/snakeCase';
import { toast } from 'react-toastify';
import i18 from './i18n';

export const requiredData = ['username', 'firstName', 'lastName', 'isActive'];

export const userNameValidation = Yup.object().shape({
  username: Yup.string()
    .min(2, i18.t('warnings.min', { count: 2 }))
    .max(50, i18.t('warnings.max', { count: 50 }))
    .matches(/^[\w.@+-]+$/, i18.t('warnings.usernameValidity'))
    .required(i18.t('warnings.required')),
});

export const authValidation = userNameValidation.shape({
  password: Yup.string()
    .min(8, i18.t('warnings.min', { count: 8 }))
    .max(50, i18.t('warnings.max', { count: 50 }))
    .matches(/^(?=.*[A-Z])(?=.*\d).{8,}$/, i18.t('warnings.passValidity'))
    .required(i18.t('warnings.required')),
});

export const passConfirmValidation = authValidation.shape({
  confirmPassword: Yup.string().when('password', {
    is: (val) => (!!(val && val.length > 0)),
    then: Yup.string().oneOf(
      [Yup.ref('password')],
      i18.t('warnings.confirmPass'),
    ),
  }).required(i18.t('warnings.required')),
});

export const setUserToken = (token) => cookie.set('token', token, { expires: 7 });
export const getUserToken = () => cookie.get('token');
export const removeUserToken = () => cookie.remove('token');

export const toSomeCase = (item, caseType = 'camelCase') => {
  const cases = {
    camelCase,
    snakeCase,
    lowerCase,
  };
  return mapKeys(item, (_, key) => cases[caseType](key));
};

export const showToast = (message) => toast.error(message, { position: 'top-right', autoClose: 5000 });
