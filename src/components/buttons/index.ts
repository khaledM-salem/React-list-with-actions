import React from 'react';

export * from './elevated-button';
export * from './text-button';

export type ButtonProps = {
  text: string;

  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}
