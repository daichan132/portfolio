import { useIsomorphicEffect } from "@mantine/hooks";
import {
	motion,
	useReducedMotion,
	useScroll,
	useSpring,
	useTransform,
} from "framer-motion";
import { type ReactNode, useRef, useState } from "react";

export type ParallaxProps = {
	children: ReactNode;
	offset?: number;
	enabled?: boolean;
};

export const Parallax = ({
	children,
	offset = 0,
	enabled = true,
}: ParallaxProps): JSX.Element => {
	const prefersReducedMotion = useReducedMotion();
	const [elementTop, setElementTop] = useState(0);
	const [clientHeight, setClientHeight] = useState(0);
	const ref = useRef<HTMLInputElement>(null);

	const { scrollY } = useScroll();

	// start animating our element when we've scrolled it into view
	const initial = elementTop - clientHeight;
	// end our animation when we've scrolled the offset specified
	const final = elementTop + offset;

	const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
	// apply a spring to ease the result
	const y = useSpring(yRange, { stiffness: 800, damping: 100 });

	useIsomorphicEffect(() => {
		const element = ref?.current;
		// save our layout measurements in a function in order to trigger
		// it both on mount and on resize
		const onResize = () => {
			// use getBoundingClientRect instead of offsetTop in order to
			// get the offset relative to the viewport
			setElementTop(
				element?.getBoundingClientRect()?.top ||
					0 + window.scrollY ||
					window.pageYOffset,
			);
			setClientHeight(window.innerHeight);
		};
		onResize();
		window.addEventListener("resize", onResize);
		return () => window.removeEventListener("resize", onResize);
	}, [ref]);

	if (prefersReducedMotion || !enabled) {
		return <div className="Parallax">{children}</div>;
	}

	return (
		<motion.div ref={ref} style={{ y }} className="Parallax">
			{children}
		</motion.div>
	);
};
