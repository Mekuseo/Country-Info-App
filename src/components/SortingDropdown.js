import React from 'react';
import PropTypes from 'prop-types';

const SortingDropdown = ({ sorter, setSorter }) => (
  <div className="bar-item">
    <select
      className="sorting-box"
      value={sorter}
      onChange={(e) => setSorter(e.target.value)}
    >
      <option value="area-d">Sort by Area [D]</option>
      <option value="area-a">Sort by Area [A]</option>
      <option value="name-d">Sort by Name [A]</option>
      <option value="name-a">Sort by Name [D]</option>
    </select>
  </div>
);

SortingDropdown.propTypes = {
  sorter: PropTypes.string.isRequired,
  setSorter: PropTypes.func.isRequired,
};

export default SortingDropdown;
