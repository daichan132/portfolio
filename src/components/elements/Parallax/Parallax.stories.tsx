import { css } from "@emotion/react";
import type { Meta, StoryObj } from "@storybook/react";
import { Parallax } from ".";

interface ParallaxProps {
	offset: number;
	children: React.ReactNode;
}

const meta: Meta<ParallaxProps> = {
	title: "Parallax",
	component: Parallax,
	args: {
		offset: 0,
		children: <h1>Default Text</h1>,
	},
} satisfies Meta<typeof Parallax>;

export default meta;

type Story = StoryObj<ParallaxProps>;

const Container = ({ children }: { children: React.ReactNode }) => (
	<div
		css={css`
      height: 200vh;
      display: flex;
      justify-content: center;
      align-items: center;
    `}
	>
		{children}
	</div>
);

export const Default: Story = {
	render: (args) => (
		<>
			<Container>
				<Parallax {...args} offset={-50}>
					<h1>|-50|</h1>
				</Parallax>
			</Container>
			<Container>
				<Parallax {...args} offset={-25}>
					<h1>|-25|</h1>
				</Parallax>
			</Container>
			<Container>
				<Parallax {...args} offset={0}>
					<h1>|0|</h1>
				</Parallax>
			</Container>
			<Container>
				<Parallax {...args} offset={25}>
					<h1>|25|</h1>
				</Parallax>
			</Container>
			<Container>
				<Parallax {...args} offset={50}>
					<h1>|50|</h1>
				</Parallax>
			</Container>
		</>
	),
};
