declare module 'yd-modal' {
    import { FC } from 'react';

    interface ModalStyle {
        blockerBackgroundColor: string;
        modalWidth: string;
        textColor: string;
        textAlign: string;
        fontFamily: string;
        msgFontWeight: string;
        borderColorAnimation: string;
        lineColorAnimation: string;
        buttonFontWeight: string;
        buttonBgColor: string;
        buttonBgColorHovered: string;
    }

    interface ModalProps {
        isOpen: boolean;
        setIsModalOpen: (isOpen: boolean) => void;
        modalMsg: string;
        modalStyle: ModalStyle;
    }

    const Modal: FC<ModalProps>;

    export default Modal;
}
