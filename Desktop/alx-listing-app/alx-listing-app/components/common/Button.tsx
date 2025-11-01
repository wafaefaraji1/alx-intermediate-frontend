import React from 'react';
import { ButtonProps } from '../../interfaces';

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
    >
      {text}
    </button>
  );
};

export default Button;
