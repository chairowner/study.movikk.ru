import { createContext, useState, ReactNode, useContext } from "react";
import { Modal } from "@/app/components/Modal/Modal";

interface ModalContextProps {
	openModal: (content: ReactNode) => void;
	closeModal: () => void;
}

// Указываем, что по умолчанию ModalContext может быть undefined
const ModalContext = createContext<ModalContextProps | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({
	children,
}) => {
	const [isOpen, setIsOpen] = useState(false);
	const [modalContent, setModalContent] = useState<ReactNode | null>(null);

	const openModal = (content: ReactNode) => {
		setModalContent(content);
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
		setModalContent(null);
	};

	return (
		<ModalContext.Provider value={{ openModal, closeModal }}>
			{children}
			<Modal isOpen={isOpen} onClose={closeModal}>
				{modalContent}
			</Modal>
		</ModalContext.Provider>
	);
};

export const useModal = (): ModalContextProps => {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error("useModal must be used within a ModalProvider");
	}
	return context;
};
