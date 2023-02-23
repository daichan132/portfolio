import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Button } from '.';

type T = typeof Button;

export default {
  title: 'Button',
  component: Button,
  args: { text: 'aaa' },
} as ComponentMeta<T>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Primary = Template.bind({});
Primary.args = { text: 'bbb' };
