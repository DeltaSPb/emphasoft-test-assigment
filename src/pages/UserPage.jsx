import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useGetUserQuery } from '../api/usersApi';
import UserCard from '../components/UserCard';
import { userDataSelector } from '../selectors';

const UserPage = () => {
  const { id } = useParams();
  const { isLoading } = useGetUserQuery(id);
  const userData = useSelector(userDataSelector);
  const { t } = useTranslation();

  return (
    <>
      <div className="d-flex align-items-center m-3">
        <h1>{`${t('identifier')}: ${id}`}</h1>
        <Spinner className="ml-2" animation="border" hidden={!isLoading} />
      </div>
      {!isLoading && <UserCard userData={userData} />}
    </>
  );
};

export default UserPage;
