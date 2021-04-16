import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';
import reducers from './slices';
import App from './components/App';
import { init } from './slices/authorizationInfoSlice';
import { getUserToken } from './utils';
import { apiReducers, apiMiddlewares } from './api';
import 'react-toastify/dist/ReactToastify.css';
import './i18n';

export default () => {
  const store = configureStore({
    reducer: combineReducers({
      ...reducers,
      ...apiReducers,
    }),
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), ...apiMiddlewares],
  });

  toast.configure();

  const token = getUserToken();
  store.dispatch(init({ token }));

  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app'),
  );
};
