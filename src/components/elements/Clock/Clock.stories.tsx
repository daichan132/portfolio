import type { Meta, StoryObj } from "@storybook/react";
import { Clock } from ".";

const meta = {
	title: "Clock",
	component: Clock,
} satisfies Meta<typeof Clock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
