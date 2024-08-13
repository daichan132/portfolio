import type { ComponentMeta } from "@storybook/react";
import { Clock } from ".";

type T = typeof Clock;

export default {
	title: "Clock",
	component: Clock,
} as ComponentMeta<T>;

export const Default = <Clock />;
