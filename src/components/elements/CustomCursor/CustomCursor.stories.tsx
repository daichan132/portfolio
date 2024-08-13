import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { CustomCursor } from ".";

type T = typeof CustomCursor;

export default {
	title: "CustomCursor",
	component: CustomCursor,
	args: {},
} as ComponentMeta<T>;

const Template: ComponentStory<typeof CustomCursor> = () => <CustomCursor />;

export const Default = Template.bind({});
Default.args = {};
