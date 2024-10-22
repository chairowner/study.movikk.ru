import { DocumentExample } from "@/app/components/DocumentExample/DocumentExample";
import s from "./DocumentExamples.module.scss";
import classNames from "classnames";

export const DocumentExamples = () => {
	return (
		<div className="wrapper">
			<div className="container">
				<div className={s.container}>
					<div className={classNames("bg-light", s.light)} />
					<div className={classNames("bg-light", s.light)} />
					<div className={classNames("bg-light", s.light)} />
					<div className={s.title_container}>
						<h2 className={s.title}>Примеры документов</h2>
					</div>
					<div className={s.documents}>
						<DocumentExample
							className={s.item}
							title="Свидетельство"
							text="о профессии рабочего, должности военнослужащего"
							img="/images/docs/1p7fxl1pwlknuzztl9mf9zbwfonpyfpo.png"
						/>
						<DocumentExample
							className={s.item}
							title="Диплом"
							text="о профессиональной подготовке"
							img="/images/docs/fu683lif7jhss1icsgeyz0n6tmy5cbo1.png"
						/>
						<DocumentExample
							className={s.item}
							title="Удостоверение"
							text="о повышении квалификации"
							img="/images/docs/hw4qpvutmxpxekzcwpvrshd200psrs2m.png"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
