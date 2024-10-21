import { FC, HTMLAttributes } from "react";
import classNames from "classnames";
import s from "./Card.module.scss";

type CardProps = {} & HTMLAttributes<HTMLDivElement>;

export const Card: FC<CardProps> = ({ className, ...props }) => {
	return <div className={classNames(s.container, className)} {...props} />;
};
