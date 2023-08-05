import React from 'react';
import styled from 'styled-components';
import {ButtonProps} from './index';

export const ElevatedButton: React.FC<ButtonProps> = ({
  text,
  onClick,
}) => (
  <Button onClick={onClick}>
    {text}
  </Button>
);

const Button = styled.button`
  border-radius: .8rem;
  border: 1px solid transparent;
  padding: .6rem 1.2rem;
  font-size: 1rem;
  font-weight: 500;
  font-family: inherit;
  transition: border-color 0.25s;
  background-color: #f9f9f9;

  &:hover {
    cursor: pointer;
    border-color: var(--color-primary);
  }
  
  &:focus,
  &:focus-visible {
    outline: 4px auto -webkit-focus-ring-color;
  }
`
