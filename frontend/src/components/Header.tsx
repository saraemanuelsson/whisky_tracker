import * as React from "react";
const logo = require("../assets/logo.png");

export const Header: React.FC = () => {
    return (
        <div className="header">
            <div className="header__logo-box">
                <img src={logo} alt="Logo" className="header__logo"></img>
            </div>
            <div className="header__text-box">
                <h1 className="heading-primary">
                    <span className="heading-primary--main">Whiskies</span>
                    <span className="heading-primary--sub">of scotland</span>
                </h1>
            </div>
        </div>
    )
}