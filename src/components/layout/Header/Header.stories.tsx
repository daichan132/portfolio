import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Header } from '.';

type T = typeof Header;

export default {
  title: 'Header',
  component: Header,
  args: {},
  decorators: [
    (storyFn) => (
      <div
        style={{
          transform: 'scale(1)',
          height: '50vh',
        }}
      >
        {storyFn()}
        <div style={{ backgroundColor: 'white', height: '120px' }} />
      </div>
    ),
  ],
} as ComponentMeta<T>;

const Template: ComponentStory<typeof Header> = () => <Header />;

export const Default = Template.bind({});
Default.args = {};
