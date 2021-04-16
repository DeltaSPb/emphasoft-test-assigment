import React from 'react';
import { ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserStatusBadge from './UserStatusBadge';

const UserList = ({ users }) => (
  <ListGroup>
    {users.map(({ username, id, isActive }) => (
      <ListGroup.Item
        key={id}
        action
        as={Link}
        to={`/users/${id}`}
        className="d-flex align-items-baseline justify-content-between"
      >
        {username}
        <UserStatusBadge isActive={isActive} />
      </ListGroup.Item>
    ))}
  </ListGroup>
);

export default UserList;
