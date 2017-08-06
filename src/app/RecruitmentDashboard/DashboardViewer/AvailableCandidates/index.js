import React from 'react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import 'react-select/dist/react-select.css';

const getOptions = availableCandidates =>
  availableCandidates.map(item => ({ value: item.id, label: item.name }));

const AvailableCandidates = props =>
  <div>
    <span>Available candidates:</span>
    <br />
    <Select
      name="available-candidates"
      value=""
      options={getOptions(props.availableCandidates)}
      onChange={selectedOption => props.onChange(selectedOption.value)}
    />
  </div>;

AvailableCandidates.propTypes = {
  availableCandidates: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  onChange: PropTypes.func.isRequired
};

export default AvailableCandidates;
