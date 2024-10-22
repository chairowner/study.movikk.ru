import classNames from "classnames";
import {
	DocumentExample,
	DocumentExampleProps,
} from "@/app/components/DocumentExample/DocumentExample";
import { useModal } from "@/app/contexts/ModalContext";
import s from "./DocumentExamples.module.scss";

const documentExamples: DocumentExampleProps[] = [
	{
		title: "Свидетельство",
		text: "о профессии рабочего, должности военнослужащего",
		img: "/images/docs/1p7fxl1pwlknuzztl9mf9zbwfonpyfpo.webp",
	},
	{
		title: "Свидетельство",
		text: "о профессии рабочего, должности военнослужащего",
		img: "/images/docs/1p7fxl1pwlknuzztl9mf9zbwfonpyfpo.webp",
	},
	{
		title: "Удостоверение",
		text: "о повышении квалификации",
		img: "/images/docs/hw4qpvutmxpxekzcwpvrshd200psrs2m.webp",
	},
];

export const DocumentExamples = () => {
	const { openModal } = useModal();

	const handleDocumentClick = (img: string) => {
		openModal(<img src={img} alt="Документ" />);
	};

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
						{documentExamples.map((item, index) => (
							<DocumentExample
								key={index}
								onClick={() => handleDocumentClick(item.img)}
								className={s.item}
								{...item}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
