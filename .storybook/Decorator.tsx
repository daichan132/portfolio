import {
	type ColorScheme,
	ColorSchemeProvider,
	MantineProvider,
} from "@mantine/core";
import { Provider } from "jotai";
import React, { type ReactElement, useState } from "react";

export const Decorator = ({ children }: { children: ReactElement }) => {
	const [colorScheme, setColorScheme] = useState<ColorScheme>("light");
	const toggleColorScheme = (value?: ColorScheme) =>
		setColorScheme(value || (colorScheme === "dark" ? "light" : "dark"));
	return (
		<Provider>
			<ColorSchemeProvider
				colorScheme={colorScheme}
				toggleColorScheme={toggleColorScheme}
			>
				<MantineProvider theme={{ colorScheme: "light" }}>
					{children}
				</MantineProvider>
			</ColorSchemeProvider>
		</Provider>
	);
};
