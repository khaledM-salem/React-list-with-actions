import React from 'react';
import styled from 'styled-components';
import {ButtonProps} from './index';

export const TextButton: React.FC<ButtonProps> = ({
  text,
  onClick,
}) => (
  <Button onClick={onClick}>
    {text}
  </Button>
);

const Button = styled.button`
  border-radius: .8rem;
  padding: .6rem 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  font-family: inherit;
  border: none;
  color: var(--color-primary);
  background: none;
  
  &:hover {
    cursor: pointer;
  }
`
