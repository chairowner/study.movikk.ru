"use client";
import CookieConsent from "react-cookie-consent";
import { Heading3 } from "./components/Heading3/Heading3";
import { DocumentExamples } from "./modules/DocumentExamples/DocumentExamples";
import { License } from "./modules/License/License";
import { Welcome } from "./modules/Welcome/Welcome";
import { WhereToFindUs } from "./modules/WhereToFindUs/WhereToFindUs";
import { WhyYouNeed } from "./modules/WhyYouNeed/WhyYouNeed";
import { ModalProvider } from "./contexts/ModalContext";
import s from "./page.module.scss";

export default function Home() {
	return (
		<ModalProvider>
			<div className={s.container}>
				<Welcome />
				<DocumentExamples />
				<Heading3 text="Берём на себя оформление всех документов" />
				<License />
				<WhyYouNeed />
				<WhereToFindUs />
				<CookieConsent
					location="bottom"
					buttonText="ОК"
					cookieName="cookieAccepted"
					style={{ background: "#573993d9" }}
					buttonStyle={{
						background: "#ffffff",
						color: "#222222",
						fontSize: "18px",
						borderRadius: "10px",
					}}
					expires={150}
				>
					Этот веб-сайт использует файлы cookie для улучшения пользовательского
					опыта.
				</CookieConsent>
			</div>
		</ModalProvider>
	);
}
