import React from 'react';
import './index.scss';

const Button = ({ text, action }) => {
    return (
        <div className="button" onClick={action}>
            <p>{text}</p>
        </div>
    );
};

export default Button;
