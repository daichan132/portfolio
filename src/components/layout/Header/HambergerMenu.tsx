import { cursorAtom } from "@/stores/cursorAtom";
import { css } from "@emotion/react";
import { Center } from "@mantine/core";
import { motion, useAnimation } from "framer-motion";
import { useSetAtom } from "jotai";
import { type Dispatch, type SetStateAction, useEffect } from "react";

const path01Variants = {
	open: { d: "M3.06061 2.99999L21.0606 21" },
	closed: { d: "M0 9.5L24 9.5" },
};

const path02Variants = {
	open: { d: "M3.00006 21.0607L21 3.06064" },
	moving: { d: "M0 14.5L24 14.5" },
	closed: { d: "M0 14.5L15 14.5" },
};
const style = css`
  background-color: transparent;
  width: 45px;
  height: 45px;
  .button {
    transform: translate(0, 3px);
  }
`;

export const HambergerMenu = ({
	opened,
	setOpened,
	setPanelComplete,
}: {
	opened: boolean;
	setOpened: Dispatch<SetStateAction<boolean>>;
	setPanelComplete: Dispatch<SetStateAction<boolean>>;
}) => {
	const path01Controls = useAnimation();
	const path02Controls = useAnimation();

	const onClick = () => {
		setOpened(!opened);
		setPanelComplete(false);
	};
	useEffect(() => {
		const func = async () => {
			if (opened) {
				await path02Controls.start(path02Variants.moving);
				path01Controls.start(path01Variants.open);
				path02Controls.start(path02Variants.open);
			} else {
				path01Controls.start(path01Variants.closed);
				await path02Controls.start(path02Variants.moving);
				path02Controls.start(path02Variants.closed);
			}
		};
		func();
	}, [opened, path01Controls, path02Controls]);
	const setCursorData = useSetAtom(cursorAtom);

	const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
		if (event.key === "Enter" || event.key === " ") {
			event.preventDefault();
			onClick();
		}
	};

	return (
		<Center css={style}>
			<div
				onClick={onClick}
				onKeyDown={handleKeyDown}
				tabIndex={0} // Makes the div focusable with keyboard
				role="button" // ARIA role to identify the element as a button
				onMouseEnter={() => {
					setCursorData({ cursorVariant: "hover" });
				}}
				onMouseLeave={() => {
					setCursorData({ cursorVariant: "default" });
				}}
				className="button"
			>
				<svg
					width="32"
					height="32"
					viewBox="0 0 24 24"
					role="img"
					aria-label="Hamburger Menu"
				>
					<motion.path
						{...path01Variants.closed}
						animate={path01Controls}
						transition={{ duration: 0.2 }}
						stroke="black"
						strokeWidth={1}
					/>
					<motion.path
						{...path02Variants.closed}
						animate={path02Controls}
						transition={{ duration: 0.2 }}
						stroke="black"
						strokeWidth={1}
					/>
				</svg>
			</div>
		</Center>
	);
};
