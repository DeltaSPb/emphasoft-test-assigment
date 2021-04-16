import React from 'react';
import {
  Card, Image, Button, ButtonGroup,
} from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import userIcon from '../../public/userIcon.png';
import { showModal } from '../slices/modalWindowSlice';

const UserCard = ({ userData }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleShow = (type) => dispatch(showModal({ type }));

  if (!userData) {
    return null;
  }

  const {
    username,
    firstName,
    lastName,
    isSuperuser,
  } = userData;

  return (
    <Card className="shadow bg-light m-2">
      <Card.Body className="d-flex flex-column align-items-center">
        <Image className="img-fluid" src={userIcon} />
        <Card.Title>{username}</Card.Title>
        {firstName && <Card.Text>{`${t('firstName')}: ${firstName}`}</Card.Text>}
        {lastName && <Card.Text>{`${t('lastName')}: ${lastName}`}</Card.Text>}
        {!isSuperuser && (
          <ButtonGroup className="display">
            <Button className="px-4" variant="primary" onClick={() => handleShow('editing')}>{t('buttons.edit')}</Button>
            <Button className="px-4" variant="danger" onClick={() => handleShow('deleting')}>{t('buttons.delete')}</Button>
          </ButtonGroup>
        )}
      </Card.Body>
      {isSuperuser && <Card.Footer className="text-muted">{t('superuser')}</Card.Footer>}
    </Card>
  );
};

export default UserCard;
