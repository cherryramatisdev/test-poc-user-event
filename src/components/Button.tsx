import React from 'react';

interface Props {
  children?: React.ReactNode;
}

export const Button: React.FC<Props> = ({ children, ...props }) => {
  return (
    <button
      type="button"
      {...props}
    >
      {children}
    </button>
  );
};
