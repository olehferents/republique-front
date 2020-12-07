import React from 'react';
import './index.scss';
import logo from "../../assets/logo_republiqe.png";

const Header = () => {
    return (
        <div className="header">
            <img src={logo} className="header__logo" alt=""/>
        </div>
    );
};

export default Header;
