import { css } from "@emotion/react";
import { useCallback, useEffect, useState } from "react";

export const Clock = () => {
	const [date, setDate] = useState(
		new Date(
			Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000,
		),
	);

	const refreshClock = useCallback(() => {
		setDate(
			new Date(
				Date.now() + (new Date().getTimezoneOffset() + 9 * 60) * 60 * 1000,
			),
		);
	}, []);

	useEffect(() => {
		const timerId = setInterval(refreshClock, 1000);
		return function cleanup() {
			clearInterval(timerId);
		};
	}, [refreshClock]);

	return (
		<span
			suppressHydrationWarning
			css={css`
        font-variant-numeric: proportional-nums;
      `}
		>
			Japan {date.toLocaleString()}
		</span>
	);
};
