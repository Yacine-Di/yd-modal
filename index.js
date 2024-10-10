/**
 * yd-modal is a simple modal with some configurable style features.
 * 
 * @author Yacine
 * @version 1.0.0
 */

import { useState } from 'react'
import closeIcon from './assets/cross-icon.png'
import './index.css'

/**
 * 
 * @param {bool} isOpen the variable that opens or close the modal 
 * @param {function} setIsModalOpen the function that defines isOpen
 * @param {string} modalMsg the message you want to display in the modal
 * @param {object} modalStyle the object that defines some styles for the modal
 * @returns 
 */
function Modal({ isOpen, setIsModalOpen, modalMsg, modalStyle }) {
    const [isButHovered, setButHovered] = useState(false)

    function handleCloseClick() {
        setButHovered(false)
        setIsModalOpen(false)
    }

    return isOpen ? (
        <div
            className="blocker"
            onClick={handleCloseClick}
            style={{ backgroundColor: modalStyle.blockerBackgroundColor }}
        >
            <div className="modal" style={{ width: modalStyle.modalWidth }}>
                <img
                    className="close-modal"
                    src={closeIcon}
                    alt="close-modal"
                    onClick={handleCloseClick}
                />
                <div
                    className="message"
                    style={{
                        color: modalStyle.textColor,
                        textAlign: modalStyle.textAlign,
                        fontFamily: modalStyle.fontFamily,
                        fontWeight: modalStyle.msgFontWeight,
                    }}
                >
                    {modalMsg}
                </div>
                <div className="success-checkmark">
                    <div
                        className="check-icon"
                        style={{ borderColor: modalStyle.borderColorAnimation }}
                    >
                        <span
                            className="icon-line line-tip"
                            style={{
                                backgroundColor: modalStyle.lineColorAnimation,
                            }}
                        ></span>
                        <span
                            className="icon-line line-long"
                            style={{
                                backgroundColor: modalStyle.lineColorAnimation,
                            }}
                        ></span>
                        <div
                            className="icon-circle"
                            style={{
                                borderColor: modalStyle.borderColorAnimation,
                            }}
                        ></div>
                        <div className="icon-fix"></div>
                    </div>
                </div>
                <button
                    className="modal-button"
                    onClick={handleCloseClick}
                    onMouseEnter={() => setButHovered(true)}
                    onMouseLeave={() => setButHovered(false)}
                    style={{
                        fontFamily: modalStyle.fontFamily,
                        fontWeight: modalStyle.buttonFontWeight,
                        backgroundColor: isButHovered
                            ? modalStyle.buttonBgColorHovered
                            : modalStyle.buttonBgColor,
                    }}
                >
                    Close
                </button>
            </div>
        </div>
    ) : null
}

export default Modal
