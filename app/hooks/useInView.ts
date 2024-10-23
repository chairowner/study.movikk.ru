import { useState, useEffect, useRef } from "react";

const useInView = (options = {}) => {
	const [isIntersecting, setIntersecting] = useState(false);
	const ref = useRef<HTMLDivElement | null>(null); // Указываем конкретный тип

	useEffect(() => {
		if (!ref.current) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setIntersecting(true);
					observer.unobserve(entry.target); // Отсоединяем, чтобы наблюдать только первое появление
				}
			},
			{ threshold: 0.1, ...options }
		);

		observer.observe(ref.current);

		return () => observer.disconnect();
	}, [ref, options]);

	return { ref, isIntersecting };
};

export default useInView;
