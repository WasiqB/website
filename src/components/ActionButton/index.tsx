import React from 'react';
import clsx from 'clsx';

export interface ButtonType {
  id: number;
  href: string;
  type: string;
  target: string;
  text: string;
}

export const ActionButton = ({ href, type, target, text }: ButtonType): JSX.Element => {
  return (
    <a className={clsx('button', type)} href={href} target={target}>
      {text}
    </a>
  );
};
