import type { Metadata } from "next";
import "./styles/globals.scss";

export const metadata: Metadata = {
	title: 'Учебный центр "Мовикк"',
	description: "Аккредитация ваших курсов",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body>{children}</body>
		</html>
	);
}
