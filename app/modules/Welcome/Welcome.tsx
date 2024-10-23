import React, { useState, useEffect, CSSProperties, useRef } from "react";
import classNames from "classnames";
import s from "./Welcome.module.scss";
import { InView } from "@/app/ui/InView/InView";

export const Welcome = () => {
	return (
		<header className={s.container}>
			<div className={classNames("container", s.image_container)}>
				<InView className={s.image}>
					<div className={classNames(s.shadow, s.first)}></div>
					<div className={classNames(s.shadow, s.second)}></div>
					<img
						src="/images/welcome_photo.webp"
						alt="welcome photo"
						width={950}
						height={633}
					/>
				</InView>
			</div>
			<div className={classNames("wrapper", s.content)}>
				<InView className="container">
					<div className={s.left}>
						<h1 className={s.title}>ООО “Учебный центр «Мовикк»”</h1>
						<div className={s.description}>
							Хотите выдавать документы государственного образца вашим ученикам?
						</div>
						<div className={s.circle_wrapper}>
							<div className={s.circle}></div>
							<div className={s.text}>Аккредитация ваших курсов</div>
						</div>
					</div>
				</InView>
			</div>
		</header>
	);
};
