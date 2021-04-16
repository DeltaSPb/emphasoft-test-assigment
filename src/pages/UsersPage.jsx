import React from 'react';
import { Spinner, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import UsersList from '../components/UsersList';
import SearchUserForm from '../components/forms/SearchUserForm';
import { useGetUsersQuery } from '../api/usersApi';
import { showModal } from '../slices/modalWindowSlice';
import { filtredUsersSelector } from '../selectors';

const UsersPage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const { isLoading } = useGetUsersQuery();
  const users = useSelector(filtredUsersSelector);

  const handleShow = (type) => dispatch(showModal({ type }));

  return (
    <>
      <div className="d-flex align-items-center m-3">
        <h1>{t('users')}</h1>
        <Spinner className="ml-2" animation="border" hidden={!isLoading} />
      </div>
      {!isLoading && (
        <>
          <SearchUserForm />
          <Button variant="success" size="lg" block onClick={() => handleShow('creating')}>
            {t('buttons.create')}
          </Button>
          <UsersList users={users} />
        </>
      )}
    </>
  );
};

export default UsersPage;
