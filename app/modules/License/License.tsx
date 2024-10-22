"use client";
import { useEffect, useState } from "react";
import classNames from "classnames";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Navigation, Pagination, Autoplay, Mousewheel } from "swiper/modules";
import { Card } from "@/app/ui/Card/Card";
import s from "./License.module.scss";
import { useModal } from "@/app/contexts/ModalContext";

const license: string = "0000000000";

type CardType = {
	img?: string;
	element: JSX.Element;
};

const cards: CardType[] = [
	{
		element: (
			<>
				<b>Название организации</b>
				<p>ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "УЧЕБНЫЙ ЦЕНТР "МОВИКК"</p>
				<b>Юридический адрес организации</b>
				<p>
					620036, РОССИЯ, СВЕРДЛОВСКАЯ ОБЛАСТЬ, Г.О. ГОРОД ЕКАТЕРИНБУРГ, Г
					ЕКАТЕРИНБУРГ, УЛ. ЕВГЕНИЯ САВКОВА, Д. 35, КВ. 229
				</p>
			</>
		),
	},
	{
		element: (
			<>
				<b>ИНН</b>
				<p>6658576147</p>
				<b>КПП</b>
				<p>665801001</p>
				<b>ОГРН/ОГРНИП</b>
				<p>1246600049178</p>
				<b>Расчетный счёт</b>
				<p>40702810910001697980</p>
			</>
		),
	},
	{
		element: (
			<>
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
			</>
		),
	},
	{
		img: "/images/docs/2423rfwefs.webp",
		element: (
			<>
				<div className={s.image_container}>
					<img
						src="/images/docs/2423rfwefs.webp"
						alt="license"
						width={300}
						height={420}
					/>
				</div>
			</>
		),
	},
	{
		img: "/images/docs/g4f3g35g2f.webp",
		element: (
			<>
				<div className={s.image_container}>
					<img
						src="/images/docs/g4f3g35g2f.webp"
						alt="license"
						width={300}
						height={420}
					/>
				</div>
			</>
		),
	},
];

export const License = () => {
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [isMobile2, setIsMobile2] = useState<boolean>(false);
	const { openModal } = useModal();

	const handleDocumentClick = (img: string) => {
		openModal(<img src={img} alt="Документ" />);
	};

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
									delay: 35000,
									disableOnInteraction: true,
								}}
								navigation={!isMobile2}
								modules={[Pagination, Navigation, Autoplay, Mousewheel]}
								className={classNames(s.slider, s.items)}
							>
								{cards.map((element, index) => (
									<SwiperSlide key={index} className={s.item_container}>
										<div className={s.slider_item}>
											<Card
												onClick={() =>
													element.img && handleDocumentClick(element.img)
												}
												className={classNames(s.item, element.img && s.image)}
											>
												{element.element}
											</Card>
										</div>
									</SwiperSlide>
								))}
							</Swiper>
						) : (
							<div className={s.items}>
								{cards.map((element, index) => (
									<div key={index} className={s.item_container}>
										<Card
											onClick={() =>
												element.img && handleDocumentClick(element.img)
											}
											className={classNames(s.item, element.img && s.image)}
										>
											{element.element}
										</Card>
									</div>
								))}
							</div>
						)}
					</div>
				</Card>
			</div>
		</div>
	);
};
