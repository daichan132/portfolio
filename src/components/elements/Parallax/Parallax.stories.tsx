import { css } from '@emotion/react';
import { type ComponentMeta } from '@storybook/react';
import { Parallax } from '.';

type T = typeof Parallax;

export default {
  title: 'Parallax',
  component: Parallax,
  args: {},
} as ComponentMeta<T>;

export const Default = () => {
  return (
    <div
      css={css`
        height: 200vh;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <Parallax offset={-50}>
        <h1>|-50|</h1>
      </Parallax>
      <Parallax offset={-25}>
        <h1>|-25|</h1>
      </Parallax>
      <Parallax offset={0}>
        <h1>|0|</h1>
      </Parallax>
      <Parallax offset={25}>
        <h1>|25|</h1>
      </Parallax>
      <Parallax offset={50}>
        <h1>|50|</h1>
      </Parallax>
    </div>
  );
};
