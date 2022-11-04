import { useField } from 'formik';
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { InputSearch, Search } from './styles/FormStyles';

const SearchField = ({ ...props }) => {
  const [field] = useField(props);
  return (
    <Search>
      <AiOutlineSearch style={{ fontSize: '16px', color: 'red' }} />
      <InputSearch type='search' {...props} {...field} />
    </Search>
  );
};
export default SearchField;
