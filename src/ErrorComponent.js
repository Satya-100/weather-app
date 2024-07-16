import React from 'react';
import './ErrorComponent.css';

const ErrorComponent = ({ message }) => {
  return (
    <div className="error-message">
      <span>{message}</span>
      <button onClick={() => document.querySelector('.error-message').style.display = 'none'}>&times;</button>
    </div>
  );
};

export default ErrorComponent;
