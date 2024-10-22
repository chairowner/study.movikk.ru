import { Card } from "@/app/ui/Card/Card";
import s from "./WhereToFindUs.module.scss";

type TypeInfo = {
	text: string;
	icon: string;
	title: string;
	url: string;
};

const info: TypeInfo[] = [
	{
		icon: "whatsapp.svg",
		text: "+7 (993) 500 800 00",
		url: "799350080000",
		title: "What's App",
	},
	{
		icon: "vk.svg",
		text: "movikkuchcentr",
		url: "https://vk.com/movikkuchcentr",
		title: "ВКонтакте",
	},
	{
		icon: "email.svg",
		text: "movikk@internet.ru",
		url: "mailto:movikk@internet.ru",
		title: "What's App",
	},
];

export const WhereToFindUs = () => {
	return (
		<div className={s.wrapper}>
			<div className="container">
				<Card>
					<div className={s.container}>
						<div className={s.info}>
							<h2>Где нас найти?</h2>
							<ul className={s.list}>
								{info.map((item, index) => (
									<li className={s.item} key={index} title={item.title}>
										<a className={s.content} target="_blank" href={item.url}>
											<img
												src={`/icons/socials/${item.icon}`}
												alt={item.title}
											/>
											<span>{item.text}</span>
										</a>
									</li>
								))}
							</ul>
							<div className={s.address}>
								Россия, г. Екатеринбург, Белинского, д. 56, этаж 4, офис 401
							</div>
						</div>
						<div className={s.map}>
							<iframe
								src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac5b26530e21e33e7c358a3a27c7b4de3aac645b19fcdef313d8e219a1683ec3e&amp;source=constructor"
								height="100%"
								width="100%"
								frameBorder={0}
							></iframe>
						</div>
					</div>
				</Card>
			</div>
		</div>
	);
};
