import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { LogoText } from ".";

type T = typeof LogoText;

export default {
	title: "LogoText",
	component: LogoText,
	args: {
		text: "Daichan 132",
		initialism: true,
	},
} as ComponentMeta<T>;

const Template: ComponentStory<typeof LogoText> = (args) => (
	<LogoText {...args} />
);

export const Initialism = Template.bind({});
Initialism.args = { id: "Initialism" };

export const FullText = Template.bind({});
FullText.args = { initialism: false, id: "FullText" };
