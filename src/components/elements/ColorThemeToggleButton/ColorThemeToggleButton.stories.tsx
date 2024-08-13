import type { Meta, StoryObj } from "@storybook/react";
import { ColorThemeToggleButton } from ".";

const meta = {
	title: "ColorThemeToggleButton",
	component: ColorThemeToggleButton,
} satisfies Meta<typeof ColorThemeToggleButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
