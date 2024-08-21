import React from 'react';

function Button({ onClick, children, type = 'button', className = '' }) {
  return (
    <button type={type} onClick={onClick} className={className}>
      {children}
    </button>
  );
}

export default Button;
