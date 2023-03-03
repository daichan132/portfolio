import { css } from '@emotion/react';
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Marquee } from '.';

type T = typeof Marquee;

export default {
  title: 'Marquee',
  component: Marquee,
  args: { text: 'daichan132', baseVelocity: 20 },
} as ComponentMeta<T>;

const Template: ComponentStory<typeof Marquee> = (args) => {
  return (
    <div
      css={css`
        width: 100vw;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      `}
    >
      <Marquee {...args} />
    </div>
  );
};

export const Default = Template.bind({});
Default.args = {};
