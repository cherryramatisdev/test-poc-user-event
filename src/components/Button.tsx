import React from 'react';
import styled from 'styled-components'

const ButtonStyled = styled.button`
  border: 1px solid #000;
  border-radius: 30px;
`

interface Props {
  onClick?: () => void;
  children?: React.ReactNode;
}

export const Button: React.FC<Props> = ({ children, ...props }) => {
  return (
    <ButtonStyled
      type="button"
      {...props}
    >
      {children}
    </ButtonStyled>
  );
};
