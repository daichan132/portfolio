import { CustomCursor } from "@/components/elements";
import { cursorAtom } from "@/stores/cursorAtom";
import { createStyles, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { Analytics } from "@vercel/analytics/react";
import { AnimatePresence, motion } from "framer-motion";
import { useSetAtom } from "jotai";
import { useRouter } from "next/router";
import { Footer } from "../Footer";
import { Header } from "../Header";

const useStyles = createStyles(() => ({
	main: {
		display: "flex",
		flexDirection: "column",
		minHeight: "100vh",
		overflow: "hidden",
		backgroundImage: "url('/6.png')",
		backgroundRepeat: "repeat",
		backgroundSize: "500px",
		backgroundColor: "rgba(244, 244, 244, 0.8)",
		backgroundBlendMode: "lighten",
	},
	background: {},
}));

const variants = {
	hidden: { opacity: 0, y: 20 },
	enter: { opacity: 1, y: 0 },
	exit: { opacity: 0, y: -20 },
};

export const Layout = ({ children }: { children: React.ReactNode }) => {
	const theme = useMantineTheme();
	const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
	const { classes } = useStyles();

	const router = useRouter();
	const path = router.pathname;
	const setCursorData = useSetAtom(cursorAtom);
	return (
		<>
			<Analytics />
			{!sm && <CustomCursor />}

			<Header />

			<div className={classes.main}>
				<AnimatePresence mode="wait" initial={false}>
					<motion.main
						className={classes.background}
						variants={variants}
						initial="hidden"
						animate="enter"
						exit="exit"
						transition={{
							duration: 0.4,
						}}
						key={path}
						onMouseEnter={() => {
							setCursorData({ cursorVariant: "default" });
						}}
					>
						{children}
						{path !== "/" && <Footer />}
					</motion.main>
				</AnimatePresence>
			</div>
		</>
	);
};
