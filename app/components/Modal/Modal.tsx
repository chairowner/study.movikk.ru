import React, { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import classNames from "classnames";
import s from "./Modal.module.scss";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	children: ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
	const handleKeyDown = (event: KeyboardEvent) => {
		if (event.key === "Escape") {
			onClose();
		}
	};

	useEffect(() => {
		document.body.style.overflow = isOpen ? "hidden" : "unset";

		if (isOpen) {
			window.addEventListener("keydown", handleKeyDown);
		}

		return () => {
			document.body.style.overflow = "unset";
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [isOpen, onClose]);

	if (!isOpen) return null;

	return createPortal(
		<div className={s.modalOverlay} onClick={onClose}>
			<div className={classNames("wrapper", s.wrapper)}>
				<div className={s.modalContent} onClick={(e) => e.stopPropagation()}>
					<button className={s.closeButton} onClick={onClose}>
						<img src="/icons/close.svg" alt="close" width={40} height={40} />
					</button>
					{children}
				</div>
			</div>
		</div>,
		document.getElementById("modal-root") as HTMLElement
	);
};
