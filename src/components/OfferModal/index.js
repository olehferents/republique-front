import React from "react";
import './index.scss';
import close from './../../assets/close.png';
import Button from "../Button";

const OfferModal = ({ closeAction, image, text, price, action }) => {
    return (
        <div className="offer">
            <div className="offer__modal">
                <img src={close} className="offer__modal__close" onClick={closeAction} alt=""/>
                <img src={image} className="offer__modal__image" alt="" />
                <h1 className="offer__modal__text">{text}</h1>
                <div className="offer__modal__button">
                    <Button
                        text={`buy for $${price}`}
                        action={action}
                    />
                </div>
            </div>
        </div>
    );
};

export default OfferModal;
