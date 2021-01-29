import React from 'react';

import loginPage from './loginPage.module.css';

import logo from '../../assets/logo.svg'
import info from '../../assets/info.svg'
import {NavLink} from "react-router-dom";

const LostPass = (props) => {
    return (
        <div className={loginPage.wrapper}>
            <div className={loginPage.Header}>
                <div className={loginPage.headerWrapper}>
                    <div className={loginPage.logo}>
                        <img src={logo}/>
                    </div>
                    <p>Корпоративная информационная система</p>
                </div>
            </div>
            <div className={loginPage.main}>
                <p className={loginPage.title}>Востановление пароля</p>
                <div className={loginPage.inputsWrapper}>
                    <input type="login" placeholder={"Логин или e-mail*"} disabled={true}/>
                    <div className={loginPage.info}>
                        <img src={info}/>
                        <p>Пароль будет отправлено на электронную почту, к которой привязана учетная запись.</p>
                    </div>
                </div>
                <div className={loginPage.buttons}>
                    <div className={loginPage.forgot}>
                        <NavLink to="/login" className={loginPage.active} >Назад</NavLink>
                    </div>
                    <div className={loginPage.toLogin}><button type={"submit"} disabled={true}>Восстановить</button></div>
                </div>
            </div>
        </div>
    );
};

export default LostPass;
