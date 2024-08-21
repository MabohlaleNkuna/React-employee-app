import React from 'react';

const SelectInput = ({ name, value, onChange, options, required }) => (
  <select
    name={name}
    value={value}
    onChange={onChange}
    required={required}
  >
    <option value="" disabled>Select Department</option>
    {options.map((option) => (
      <option key={option.value} value={option.value}>
        {option.label}
      </option>
    ))}
  </select>
);

export default SelectInput;
