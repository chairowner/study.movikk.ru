"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {
	Navigation,
	Pagination,
	Autoplay,
	Mousewheel,
	Scrollbar,
} from "swiper/modules";
import { Card } from "@/app/ui/Card/Card";
import s from "./License.module.scss";

const license: string = "0000000000";

const cards: JSX.Element[] = [
	<Card className={s.item}>
		<b>Название организации</b>
		<p>ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "УЧЕБНЫЙ ЦЕНТР "МОВИКК"</p>
		<b>Юридический адрес организации</b>
		<p>
			620036, РОССИЯ, СВЕРДЛОВСКАЯ ОБЛАСТЬ, Г.О. ГОРОД ЕКАТЕРИНБУРГ, Г
			ЕКАТЕРИНБУРГ, УЛ. ЕВГЕНИЯ САВКОВА, Д. 35, КВ. 229
		</p>
	</Card>,
	<Card className={s.item}>
		<b>ИНН</b>
		<p>6658576147</p>
		<b>КПП</b>
		<p>665801001</p>
		<b>ОГРН/ОГРНИП</b>
		<p>1246600049178</p>
		<b>Расчетный счёт</b>
		<p>40702810910001697980</p>
	</Card>,
	<Card className={s.item}>
		<b>Банк</b>
		<p>АО «ТБанк»</p>
		<b>ИНН банка</b>
		<p>7710140679</p>
		<b>БИК банка</b>
		<p>044525974</p>
		<b>Корреспондентский счет банка</b>
		<p>30101810145250000974</p>
		<b>Юридический адрес банка</b>
		<p>127287, г. Москва, ул. Хуторская 2-я, д. 38А, стр. 26</p>
	</Card>,
	<Card className={classNames(s.item, s.image)}>
		<div className={s.image_container}>
			<img
				src="/images/docs/2423rfwefs.png"
				alt="license"
				width={300}
				height={420}
				/* priority={true} */
			/>
		</div>
	</Card>,
	<Card className={classNames(s.item, s.image)}>
		<div className={s.image_container}>
			<img
				src="/images/docs/g4f3g35g2f.png"
				alt="license"
				width={300}
				height={420}
				/* priority={true} */
			/>
		</div>
	</Card>,
];

export const License = () => {
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [isMobile2, setIsMobile2] = useState<boolean>(false);

	useEffect(() => {
		const isMobileQuery: MediaQueryList = window.matchMedia(
			"(max-width: 1160px)"
		);
		const isMobile2Query: MediaQueryList =
			window.matchMedia("(max-width: 425px)");

		const handleMediaChange = (e: MediaQueryListEvent) => {
			setIsMobile(e.matches);
		};
		const handleMedia2Change = (e: MediaQueryListEvent) => {
			setIsMobile2(e.matches);
		};

		setIsMobile(isMobileQuery.matches);
		setIsMobile2(isMobile2Query.matches);

		isMobileQuery.addEventListener("change", handleMediaChange);
		isMobile2Query.addEventListener("change", handleMedia2Change);
		return () => {
			isMobileQuery.removeEventListener("change", handleMediaChange);
			isMobile2Query.removeEventListener("change", handleMedia2Change);
		};
	}, []);

	return (
		<div className="wrapper">
			<div className="container">
				<Card>
					<div className={s.container}>
						<div className={classNames("bg-light", s.light)} />
						<div className={classNames("bg-light", s.light)} />
						<div className={s.title}>
							<h2>У нас есть лицензия</h2>
							<em>№{license}</em>
						</div>
						{isMobile ? (
							<Swiper
								slidesPerView={1}
								spaceBetween={30}
								loop={true}
								mousewheel={true}
								pagination={{
									clickable: true,
								}}
								autoplay={{
									delay: 3500,
									disableOnInteraction: false,
								}}
								navigation={!isMobile2}
								modules={[Pagination, Navigation, Autoplay, Mousewheel]}
								className={classNames(s.slider, s.items)}
							>
								{cards.map((element, index) => (
									<SwiperSlide key={index}>
										<div className={s.slider_item}>{element}</div>
									</SwiperSlide>
								))}
							</Swiper>
						) : (
							<div className={s.items}>
								{cards.map((element, index) => (
									<div key={index}>{element}</div>
								))}
							</div>
						)}
					</div>
				</Card>
			</div>
		</div>
	);
};
