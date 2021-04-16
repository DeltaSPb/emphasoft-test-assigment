import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { logout } from '../slices/authorizationInfoSlice';
import { removeUserToken } from '../utils';

const NavBar = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const handleLogout = () => {
    removeUserToken();
    dispatch(logout());
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>AwesomeLogo</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link as={NavLink} to="/users">{t('users')}</Nav.Link>
      </Nav>
      <Button className="btn btn-warning" onClick={() => handleLogout()}>{t('buttons.logout')}</Button>
    </Navbar>
  );
};

export default NavBar;
