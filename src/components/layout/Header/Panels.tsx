/* eslint-disable no-nested-ternary */
import { panelDuration } from "@/utils/Const";
import { css } from "@emotion/react";
import { useViewportSize } from "@mantine/hooks";
import { motion } from "framer-motion";
import React, { type Dispatch, type SetStateAction } from "react";

const transition = { ease: [0.6, -0.05, 0.01, 0.9] };

export const Panels = ({
	setPanelComplete,
	num = 2,
}: {
	setPanelComplete: Dispatch<SetStateAction<boolean>>;
	num?: number;
}) => {
	const { height } = useViewportSize();
	return (
		<>
			{Array.from({ length: num }, (a: number, i) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
				<React.Fragment key={`panel-${i}`}>
					<motion.div
						initial={{ height: 0 }}
						animate={{
							height: [0, height, 0],
							bottom: i % 2 === 0 ? [height, 0, 0] : [0, 0, height],
						}}
						exit={{
							height: [0, height, 0],
							top: i % 2 === 0 ? [height, 0, 0] : [0, 0, height],
						}}
						transition={{
							...transition,
							duration: panelDuration,
							times: [0, 0.5, 1],
						}}
						css={css`
              height: 100vh;
              width: ${100 / num}vw;
              position: absolute;
              z-index: 110;
              left: ${(100 / num) * i}%;
              box-shadow: 0px 0px 33.3px rgba(0, 0, 0, 0.053);
            `}
					/>
					<motion.div
						initial={{ height: 0 }}
						animate={{
							height: [0, height, 0],
							bottom: i % 2 === 0 ? [height, 0, 0] : [0, 0, height],
						}}
						exit={{
							height: [0, height, 0],
							top: i % 2 === 0 ? [height, 0, 0] : [0, 0, height],
						}}
						transition={{
							...transition,
							duration: panelDuration,
							times: [0, 0.5, 1],
						}}
						css={css`
              height: 100vh;
              width: ${100 / num}vw;
              position: absolute;
              z-index: 111;
              left: ${(100 / num) * i}%;
              background: white;
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
            `}
						onAnimationComplete={() => {
							// eslint-disable-next-line no-unused-expressions
							i === 0 && setPanelComplete(true);
						}}
					/>
				</React.Fragment>
			))}
		</>
	);
};
