import { type FC } from 'react';

export type ButtonProps = { text: string };

export const Button: FC<ButtonProps> = ({ text }) => {
  return (
    <div>
      <h1>{text}</h1>
    </div>
  );
};
