import { Card } from "@/app/ui/Card/Card";
import s from "./WhyYouNeed.module.scss";
import { DocumentIcon } from "@/app/ui/DocumentIcon/DocumentIcon";
import classNames from "classnames";

export const WhyYouNeed = () => {
	return (
		<div className="wrapper">
			<div className="container">
				<div className={s.container}>
					<div className={s.item}>
						<h2>Зачем вам это?</h2>
						<DocumentIcon
							wrapperClass={classNames("wrapper", s.icon_wrapper)}
							iconClass={s.icon}
							bubbleClass={s.bubble}
						/>
					</div>
					<Card className={s.item}>
						<span>
							Вы сможете выдавать документы государственного образца вашим
							ученикам и не думать о бумажной рутине.
						</span>
						<strong>
							Наши специалисты проконсультируют вас по всем вопросам!
						</strong>
					</Card>
				</div>
			</div>
		</div>
	);
};
