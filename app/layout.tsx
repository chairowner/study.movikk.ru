import type { Metadata } from "next";
import { YandexMetrika } from "./components/YandexMetrika/YandexMetrika";
import "./styles/globals.scss";

const url: string = process.env.PUBLIC_SITE_URL || "https://study.movikk.ru";
const title: string = "Учебный центр «Мовикк»";
const description: string =
	"Аккредитация ваших курсов. Хотите выдавать документы государственного образца вашим ученикам? Наши специалисты проконсультируют вас по всем вопросам!";

export const metadata: Metadata = {
	title,
	description,
	keywords: [
		"аккредитация",
		"сайт аккредитации",
		"аккредитация курсов",
		"аккредитация сертификатов",
		"аккредитация документов",
		"выдавать документы",
		"учебный центр",
		"мовикк",
		"movikk",
	],
	openGraph: {
		title,
		description,
		url,
		type: "website",
		locale: "ru_RU",
		siteName: title,
		images: [
			{
				url: url + "/images/36e63456-61f3-46b7-b7f0-51b2c3c3924a.webp",
				width: 1893,
				height: 903,
				alt: title,
			},
		],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body>
				{children}
				<div id="modal-root"></div>
			</body>
			{process.env.YANDEX_METRIKA && <YandexMetrika />}
		</html>
	);
}
