import classNames from "classnames";
import s from "./DocumentIcon.module.scss";
import { FC } from "react";

type DocumentIconProps = {
	wrapperClass?: string;
	iconClass?: string;
	imageClass?: string;
	bubbleClass?: string;
};

export const DocumentIcon: FC<DocumentIconProps> = ({
	wrapperClass,
	iconClass,
	bubbleClass,
}) => {
	return (
		<div className={classNames(s.icon_wrapper, wrapperClass)}>
			<div className={classNames(s.icon, iconClass)}>
				<img src="/icons/document.svg" alt="document" />
				{Array.from({ length: 5 }).map((_, index) => (
					<div
						key={index}
						className={classNames(s.bubble, s.primary, bubbleClass)}
					/>
				))}
				{Array.from({ length: 3 }).map((_, index) => (
					<div
						key={index}
						className={classNames(s.bubble, s.secondary, bubbleClass)}
					/>
				))}
			</div>
		</div>
	);
};
