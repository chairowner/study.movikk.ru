import classNames from "classnames";
import s from "./DocumentIcon.module.scss";

export const DocumentIcon = () => {
	return (
		<div className={s.icon_wrapper}>
			<div className={s.icon}>
				<img src="/icons/document.svg" alt="document" />
				{Array.from({ length: 5 }).map((_, index) => (
					<div key={index} className={classNames(s.bubble, s.primary)} />
				))}
				{Array.from({ length: 3 }).map((_, index) => (
					<div key={index} className={classNames(s.bubble, s.secondary)} />
				))}
			</div>
		</div>
	);
};
