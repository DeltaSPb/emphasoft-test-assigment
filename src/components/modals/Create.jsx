import React from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { modalInfoSelector } from '../../selectors';
import RegistrationForm from '../forms/RegistrationForm';
import { useCreateUserMutation } from '../../api/usersApi';

const Create = ({ onHide }) => {
  const { isShown, type } = useSelector(modalInfoSelector);
  const [createUser, { isLoading }] = useCreateUserMutation();
  const { t } = useTranslation();

  const handleSubmit = (data) => {
    createUser(data)
      .unwrap()
      .then(() => onHide());
  };

  return (
    <Modal centered show={isShown} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{t(`modals.${type}.title`)}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <RegistrationForm onSubmit={handleSubmit} isLoading={isLoading} />
      </Modal.Body>
    </Modal>
  );
};

export default Create;
