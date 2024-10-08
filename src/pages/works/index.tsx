import { ExternalLinkCursor } from "@/components/elements";
import { Work, type WorkProps } from "@/components/pages/works/Work";
import { BlueColor, YellowColor } from "@/utils/Colors";
/* eslint-disable react/no-array-index-key */
import {
	Container,
	List,
	Mark,
	Stack,
	Text,
	Title,
	rem,
	useMantineTheme,
} from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import { motion } from "framer-motion";
import { Fragment } from "react";

const containerVariants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
		},
	},
};
const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
		},
	},
};

const Home = () => {
	const theme = useMantineTheme();
	const sm = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
	const worksData: WorkProps[] = [
		{
			src: "/portfolio.png",
			color: BlueColor,
			title: "Portfolio",
			skills: ["Nextjs", "Typescript", "framer motion", "Design"],
			githubLink: "https://github.com/daichan132/portfolio",
			children: (
				<Text>
					こちらの作品は<Mark>楽しく自分のことを紹介する</Mark>
					ために作成したPortfolioです。Webデザインから実装までを自分で作成しました。
				</Text>
			),
		},
		{
			src: "/vroom.png",
			color: YellowColor,
			title: "VRooM",
			skills: ["Nextjs", "Typescript", "zustand", "Threejs"],
			link: "https://jphacks-2022-4839e.web.app/",
			githubLink: "https://github.com/jphacks/A_2207",
			children: (
				<>
					<Text>
						この作品は
						<Mark>誰かと一緒に作業をしている感覚</Mark>
						を体験しながら、作業を楽しく効率的に行うことを支援するWebアプリケーションです。
						<ExternalLinkCursor href="https://jphacks.com/">
							JPJACKS2022
						</ExternalLinkCursor>
						に参加した際に作成しました。
					</Text>
					<Title order={5} pt={rem(16)}>
						受賞一覧
					</Title>
					<List>
						<List.Item>JPHACKS Innovator 認定</List.Item>
						<List.Item>合同会社MIRAISE賞</List.Item>
					</List>
				</>
			),
		},
	];
	return (
		<Container
			size="xl"
			pt={sm ? rem(120) : rem(300)}
			pb={sm ? rem(60) : rem(220)}
		>
			<motion.div variants={containerVariants} initial="hidden" animate="show">
				<Stack spacing={sm ? rem(80) : rem(200)}>
					{worksData.map((props: WorkProps) => (
						<Fragment key={props.title}>
							<motion.div variants={itemVariants}>
								<Work {...props} />
							</motion.div>
						</Fragment>
					))}
				</Stack>
			</motion.div>
		</Container>
	);
};
export default Home;
