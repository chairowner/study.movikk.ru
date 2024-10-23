import React, {
	useRef,
	useState,
	useEffect,
	ReactNode,
	HTMLAttributes,
} from "react";
import classNames from "classnames";
import s from "./InView.module.scss"; // Создаем отдельный модуль стилей

interface InViewProps extends HTMLAttributes<HTMLDivElement> {
	children?: ReactNode;
	className?: string;
	threshold?: number;
}

export const InView: React.FC<InViewProps> = ({
	children,
	className,
	threshold = 0.1,
	...props
}) => {
	const [isVisible, setVisible] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		if (!ref.current) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setVisible(true);
					observer.unobserve(entry.target);
				}
			},
			{ threshold }
		);

		observer.observe(ref.current);

		return () => observer.disconnect();
	}, [threshold]);

	return (
		<div
			ref={ref}
			className={classNames(s.fadeIn, className, {
				[s.visible]: isVisible,
			})}
			{...props}
		>
			{children}
		</div>
	);
};
