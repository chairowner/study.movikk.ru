import type { Metadata } from "next";
import { YandexMetrika } from "./components/YandexMetrika/YandexMetrika";
import "./styles/globals.scss";

export const metadata: Metadata = {
	title: "Учебный центр «Мовикк»",
	description:
		"Аккредитация ваших курсов. Хотите выдавать документы государственного образца вашим ученикам?",
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
