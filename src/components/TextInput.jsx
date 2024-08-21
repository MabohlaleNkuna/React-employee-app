import React from 'react';

const TextInput = ({ name, value, onChange, placeholder, required, pattern, title }) => (
  <input
    type="text"
    name={name}
    value={value}
    onChange={onChange}
    placeholder={placeholder}
    required={required}
    pattern={pattern}
    title={title}
  />
);

export default TextInput;
