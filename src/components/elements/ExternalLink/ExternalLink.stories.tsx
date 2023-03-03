import { type ComponentMeta } from '@storybook/react';
import { ExternalLink } from '.';

type T = typeof ExternalLink;

export default {
  title: 'ExternalLink',
  component: ExternalLink,
  args: {},
} as ComponentMeta<T>;

export const Default = () => (
  <ExternalLink href="https://unsplash.com/ja/%E5%86%99%E7%9C%9F/VLpRa5tFdNY?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
    Unsplash
  </ExternalLink>
);
