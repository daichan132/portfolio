import { type ComponentStory, type ComponentMeta } from '@storybook/react';
import { Work } from '.';

type T = typeof Work;

export default {
  title: 'Work',
  component: Work,
  args: {},
} as ComponentMeta<T>;

const Template: ComponentStory<typeof Work> = (args) => <Work {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: '/vroom.png',
  title: 'VRooM',
  description:
    'VRooMは誰かと一緒に作業をしている感覚を提供し、作業を楽しく効率的に行うことを支援します。',
  skills: ['Nextjs', 'Typescript', 'zustand', 'Threejs'],
  link: 'https://jphacks-2022-4839e.web.app/',
  githubLink: 'https://github.com/jphacks/A_2207',
};
