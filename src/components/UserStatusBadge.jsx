import React from 'react';
import { Badge } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';

const UserStatusBadge = (props) => {
  const { t } = useTranslation();
  const { isActive } = props;

  const { variant, badgeContent } = isActive
    ? { variant: 'success', badgeContent: 'active' }
    : { variant: 'secondary', badgeContent: 'inactive' };

  return (
    <Badge pill variant={variant}>{t(badgeContent)}</Badge>
  );
};

export default UserStatusBadge;
