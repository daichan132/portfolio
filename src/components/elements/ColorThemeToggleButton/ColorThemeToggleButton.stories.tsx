import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { ColorThemeToggleButton } from ".";

type T = typeof ColorThemeToggleButton;

export default {
	title: "ColorThemeToggleButton",
	component: ColorThemeToggleButton,
} as ComponentMeta<T>;

const Template: ComponentStory<typeof ColorThemeToggleButton> = (args) => (
	<ColorThemeToggleButton {...args} />
);

export const Default = Template.bind({});
Default.args = {};
