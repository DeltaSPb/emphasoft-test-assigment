import React from 'react';
import { InputGroup, FormControl } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import searchIcon from '../../../public/search.svg';
import { updateFilter } from '../../slices/filterSlice';

const SearchUserForm = ({ disabled }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const handleChange = ({ target }) => {
    const username = target.value;
    dispatch(updateFilter({ username }));
  };

  return (
    <InputGroup className="my-4">
      <InputGroup.Prepend>
        <InputGroup.Text>
          <img src={searchIcon} alt={t('search')} />
        </InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl
        type="text"
        name="username"
        onChange={handleChange}
        disabled={disabled}
        autoComplete="off"
        placeholder={t('placeholders.search')}
      />
    </InputGroup>
  );
};

export default SearchUserForm;
