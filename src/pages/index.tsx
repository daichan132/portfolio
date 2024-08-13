import { css } from "@emotion/react";
import { Center, Container, rem, useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import Head from "next/head";
import Image from "next/image";

const Home = () => {
	const theme = useMantineTheme();
	const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

	return (
		<>
			<Head>
				<meta
					name="description"
					content="daichan132's portfolio-若山大智のポートフォリオ"
				/>
			</Head>
			<Container size="xl">
				<Center
					css={css`
            pointer-events: none;
          `}
					h="100vh"
				>
					<Image
						src="/main-image/IMG_1182.PNG"
						width={500}
						height={500}
						alt="若山大智"
					/>
				</Center>
			</Container>
		</>
	);
};

export default Home;
