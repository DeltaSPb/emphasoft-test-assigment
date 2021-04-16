import React from 'react';
import { Modal } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useUpdateUserMutation } from '../../api/usersApi';
import { requiredDataSelector, modalInfoSelector } from '../../selectors';
import EditForm from '../forms/EditForm';

const Edit = ({ onHide }) => {
  const { id, ...requiredData } = useSelector(requiredDataSelector);
  const { isShown, type } = useSelector(modalInfoSelector);
  const [updateUser, { isLoading }] = useUpdateUserMutation();
  const { t } = useTranslation();

  const handleSubmit = (data) => {
    updateUser({ id, ...data })
      .unwrap()
      .then(() => onHide());
  };

  return (
    <Modal centered show={isShown} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{t(`modals.${type}.title`)}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <EditForm onSubmit={handleSubmit} isLoading={isLoading} initialValues={requiredData} />
      </Modal.Body>
    </Modal>
  );
};

export default Edit;
