import { Heading3 } from "./components/Heading3/Heading3";
import { DocumentExamples } from "./modules/DocumentExamples/DocumentExamples";
import { License } from "./modules/License/License";
import { Welcome } from "./modules/Welcome/Welcome";
import { WhereToFindUs } from "./modules/WhereToFindUs/WhereToFindUs";
import { WhyYouNeed } from "./modules/WhyYouNeed/WhyYouNeed";
import s from "./page.module.scss";

export default function Home() {
	return (
		<div className={s.container}>
			<Welcome />
			<DocumentExamples />
			<Heading3 text="Берём на себя оформление всех документов" />
			<License />
			<WhyYouNeed />
			<WhereToFindUs />
		</div>
	);
}
