import Link from "next/link";
import s from "./not-found.module.scss";

export default function NotFound() {
	return (
		<div className={s.wrapper}>
			<div className="wrapper">
				<div className="container">
					<div className={s.container}>
						<h1>404. Страница не найдена</h1>
						<Link className={s.button} href="/">
							Вернуться на главную
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}
