import { cursorAtom } from "@/stores/cursorAtom";
import { panelDuration } from "@/utils/Const";
import { css } from "@emotion/react";
import { Box, Container, createStyles, rem } from "@mantine/core";
import { AnimatePresence, motion } from "framer-motion";
import { useSetAtom } from "jotai";
import Link from "next/link";
import { useEffect, useState } from "react";

const useStyles = createStyles(() => ({
	container: {
		display: "flex",
		flexDirection: "column",
		gap: rem(30),
		width: "100%",
		alignItems: "center",
	},
	linkItem: {
		display: "block",
		overflow: "hidden",
		color: "#333333",
		textDecoration: "none",
		fontSize: rem(24),
		position: "relative",
		paddingBottom: "2px",
		"&::after": {
			content: "''",
			background: "#000000",
			width: "100%",
			height: "2px",
			position: "absolute",
			left: "0",
			bottom: "0",
			margin: "auto",
			transition: "transform .3s",
			transformOrigin: "right top",
			transform: "scale(0, 1)",
		},
		"&:hover::after": {
			transformOrigin: "left top",
			transform: "scale(1, 1)",
		},
	},
}));

export const FullscreenMenu = ({ open }: { open: boolean }) => {
	const { classes } = useStyles();

	const setCursorData = useSetAtom(cursorAtom);
	const [isActive, setActive] = useState(false);

	useEffect(() => {
		setActive(false);
		const timer = setTimeout(() => {
			setActive(true);
		}, 1000);
		return () => {
			clearTimeout(timer);
		};
	}, []);

	return (
		<AnimatePresence>
			{open && isActive && (
				<Box
					onMouseEnter={() => {
						setCursorData({ cursorVariant: "default" });
					}}
					sx={() => ({
						top: 0,
						bottom: 0,
						right: 0,
						left: 0,
						zIndex: 100,
						position: "fixed",
					})}
				>
					<motion.div
						initial={{ visibility: "hidden" }}
						exit={{
							visibility: "hidden",
							transition: { delay: panelDuration / 2 },
						}}
						animate={{
							visibility: "visible",
							transition: { delay: panelDuration / 2 },
						}}
						css={css`
              background-image: url('/6.png');
              background-repeat: repeat;
              background-size: 500px;
              background-color: rgba(255, 255, 255, 0.8);
              background-blend-mode: lighten;
              width: 100%;
              height: 100%;
            `}
					>
						<Container
							py={70}
							css={css`
                width: 100%;
                height: 100%;
              `}
						>
							<div
								className={classes.container}
								css={css`
                  background-image: linear-gradient(
                      to right,
                      transparent,
                      transparent 10%,
                      #f0f0f0 11%,
                      #f0f0f0 12%,
                      transparent 13%,
                      transparent 87%,
                      #f0f0f0 88%,
                      #f0f0f0 89%,
                      transparent 90%,
                      transparent
                    ),
                    linear-gradient(to bottom, transparent, transparent 97%, #f0f0f0 98%, #f0f0f0);
                  background-size: 40px 40px;
                  background-repeat: repeat;
                  background-position: left top;
                  padding: 100px;
                  background-color: white;
                `}
							>
								<Link
									href="/"
									className={classes.linkItem}
									onMouseEnter={() => {
										setCursorData({ cursorVariant: "hover" });
									}}
									onMouseLeave={() => {
										setCursorData({ cursorVariant: "default" });
									}}
								>
									Home
								</Link>
								<Link
									href="/about"
									className={classes.linkItem}
									onMouseEnter={() => {
										setCursorData({ cursorVariant: "hover" });
									}}
									onMouseLeave={() => {
										setCursorData({ cursorVariant: "default" });
									}}
								>
									About me
								</Link>
								<Link
									href="/works"
									className={classes.linkItem}
									onMouseEnter={() => {
										setCursorData({ cursorVariant: "hover" });
									}}
									onMouseLeave={() => {
										setCursorData({ cursorVariant: "default" });
									}}
								>
									All works
								</Link>
							</div>
						</Container>
					</motion.div>
				</Box>
			)}
		</AnimatePresence>
	);
};
