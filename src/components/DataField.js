import React from 'react';
import PropTypes from 'prop-types';

const DataField = ({ title, data, unit }) => (
  <div className="data-field">
    <h3 className="data-title">{title}</h3>
    <div className="data-value">
      <p>{data}</p>
      <p>{unit}</p>
    </div>
  </div>
);

DataField.propTypes = {
  title: PropTypes.string,
  data: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  unit: PropTypes.string,
};

DataField.defaultProps = {
  title: '',
  data: 0,
  unit: '',
};

export default DataField;
