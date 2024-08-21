import React from 'react';

const FileInput = ({ onChange, required }) => (
  <input
    type="file"
    accept="image/*"
    onChange={onChange}
    required={required}
  />
);

export default FileInput;
