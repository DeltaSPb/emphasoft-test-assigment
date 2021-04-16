import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideModal } from '../slices/modalWindowSlice';
import { modalInfoSelector } from '../selectors/index';
import getModal from './modals/index';

const Modal = () => {
  const dispatch = useDispatch();
  const { type } = useSelector(modalInfoSelector);

  const onHide = () => dispatch(hideModal());

  if (!type) {
    return null;
  }

  const Component = getModal(type);
  return <Component onHide={onHide} />;
};

export default Modal;
