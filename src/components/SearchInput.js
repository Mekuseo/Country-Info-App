import React from 'react';
import { FiSearch } from 'react-icons/fi';
import PropTypes from 'prop-types';

const SearchInput = ({ query, setQuery }) => (
  <form className="search-box" onSubmit={(e) => e.preventDefault()}>
    <FiSearch />
    <input
      type="text"
      className="search-input"
      value={query}
      onChange={(e) => setQuery(e.target.value.toLowerCase())}
      placeholder="Search country by name"
      maxLength={50}
    />
  </form>
);

SearchInput.propTypes = {
  query: PropTypes.string.isRequired,
  setQuery: PropTypes.func.isRequired,
};

export default SearchInput;
