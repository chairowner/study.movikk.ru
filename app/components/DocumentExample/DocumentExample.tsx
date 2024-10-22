import { FC, MouseEventHandler } from "react";
import s from "./DocumentExample.module.scss";
import { Card } from "@/app/ui/Card/Card";
import classNames from "classnames";

export type DocumentExampleProps = {
	title: string;
	text: string;
	img: string;
	className?: string;
	onClick?: MouseEventHandler<HTMLDivElement>;
};

export const DocumentExample: FC<DocumentExampleProps> = ({
	onClick,
	title,
	text,
	img,
	className,
}) => {
	return (
		<Card className={classNames(s.container, className)} onClick={onClick}>
			<div className={s.title}>{title}</div>
			<span>{text}</span>
			<div className={s.image}>
				<img src={img} alt={title} width={406} height={330} />
			</div>
		</Card>
	);
};
