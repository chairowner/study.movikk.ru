import { Card } from "@/app/ui/Card/Card";
import Image from "next/image";
import classNames from "classnames";
import s from "./License.module.scss";

export const License = () => {
	return (
		<Card className="container">
			<div className={s.container}>
				<div className={classNames("bg-light", s.light)} />
				<div className={classNames("bg-light", s.light)} />
				<div className={s.title}>
					<h2>У нас есть лицензия</h2>
					<em>№0000000000</em>
				</div>
				<div className={s.items}>
					<Card className={s.item}>
						<b>Название организации</b>
						<p>
							ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ "УЧЕБНЫЙ ЦЕНТР "МОВИКК"
						</p>
						<b>Юридический адрес организации</b>
						<p>
							620036, РОССИЯ, СВЕРДЛОВСКАЯ ОБЛАСТЬ, Г.О. ГОРОД ЕКАТЕРИНБУРГ, Г
							ЕКАТЕРИНБУРГ, УЛ ЕВГЕНИЯ САВКОВА, Д. 35, КВ. 229
						</p>
					</Card>
					<Card className={s.item}>
						<b>ИНН</b>
						<p>6658576147</p>
						<b>КПП</b>
						<p>665801001</p>
						<b>ОГРН/ОГРНИП</b>
						<p>1246600049178</p>
						<b>Расчетный счёт</b>
						<p>40702810910001697980</p>
					</Card>
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
					</Card>
					<Card className={classNames(s.item, s.image)}>
						<div className={s.image_container}>
							<Image
								src="/docs/2423rfwefs.png"
								alt="license"
								width={300}
								height={420}
								priority={true}
							/>
						</div>
					</Card>
					<Card className={classNames(s.item, s.image)}>
						<div className={s.image_container}>
							<Image
								src="/docs/g4f3g35g2f.png"
								alt="license"
								width={300}
								height={420}
								priority={true}
							/>
						</div>
					</Card>
				</div>
			</div>
		</Card>
	);
};
