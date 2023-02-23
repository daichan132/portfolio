---
to: <%= path %>/<%= name%>.stories.tsx
---
import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { <%= name %> } from '.';

type T = typeof <%= name %>

export default {
  title: '<%= name %>',
  component: <%= name %>,
  <% if (have_props) { -%>
  args: {},
  <% } -%>
} as ComponentMeta<T>;

const Template: ComponentStory<typeof <%= name %>> = (args) => <<%= name %> {...args} />;

export const Default = Template.bind({});
Default.args = {};