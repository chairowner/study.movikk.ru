import { FC } from "react";

type Heading3Props = {
	text: string;
};
export const Heading3: FC<Heading3Props> = ({ text }) => {
	return (
		<div className="container">
			<h3>{text}</h3>
		</div>
	);
};
