import React from 'react';
import { Modal, FormGroup, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDeleteUserMutation } from '../../api/usersApi';
import { userDataSelector, modalInfoSelector } from '../../selectors';

const Delete = ({ onHide }) => {
  const userData = useSelector(userDataSelector);
  const history = useHistory();
  const { isShown, type } = useSelector(modalInfoSelector);
  const [deleteUser, { isLoading }] = useDeleteUserMutation();
  const { t } = useTranslation();

  const handleSubmit = (e) => {
    e.preventDefault();

    deleteUser(userData.id)
      .unwrap()
      .then(() => {
        onHide();
        history.replace('/users');
      });
  };

  return (
    <Modal centered show={isShown} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>{t(`modals.${type}.title`)}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>{t(`modals.${type}.body`)}</p>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <Button variant="danger" type="submit" disabled={isLoading}>{t('buttons.confirmDelete')}</Button>
          </FormGroup>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default Delete;
