import React, { useState } from 'react';

import { NavLink } from "react-router-dom";
import logo from '../assets/logo.png'

import { useTranslation } from 'react-i18next';

import 'boxicons';

function NavBar() {


    const { t, i18n } = useTranslation();
    const [lang, setLang] = useState('fr')

    const [isActive, setisActive] = React.useState(false);
    const [isDropdown, setisDropdown] = React.useState(false);

    const routes = [t('home'), t('experiences'), t('projects'), t('contact')];
    const names = ["Presentation", "Experiences", "Projects", "Contact"];

    let routesList = [];

    function changeLanguage(event) {
        setLang(event.target.value);
        i18n.changeLanguage(lang);
    };


    routes.forEach((route, index) => {
        routesList.push(
            <div className="m-2 ml-6 navbar-item is-size-5" key={index}>
                <NavLink
                    to={names[index] === "Presentation" ? "/" : ("/" + names[index])}
                    className={`${isDropdown ? "has-text-black" : "has-text-black"}`}
                >
                    {route}
                </NavLink>
            </div>
        );
    });

    return (
        <>
            <nav className="navbar is-transparent is-fixed-top has-background-white">
                <div className="navbar-brand">
                    <button className={`navbar-burger burger ${isActive ? "is-active" : ""}`} aria-label="menu" aria-expanded="false" data-target="navbarBasicExample" onClick={() => {
                        setisActive(!isActive);
                        setisDropdown(!isDropdown);
                    }}>
                        <span className="has-text-black"></span>
                        <span className="has-text-black"></span>
                        <span className="has-text-black"></span>
                    </button>
                </div>

                <div id="navbarBasicExample" className={`navbar-menu ${isActive ? "is-active" : ""}`}>
                    <div key="navlist" className="navbar-start">
                        {routesList}
                    </div>
                    <div className="navbar-end navbar-item">
                        <div className="control">
                            <div className="select is-medium">
                                <select value={lang} onChange={changeLanguage}>
                                    <option value="fr" defaultValue>{t('english')}</option>
                                    <option value="en">{t('french')}</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </nav >
            <hr className="is-relative white-background m-0" />
        </>
    )
};

export default NavBar;