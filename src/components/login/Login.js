import React from 'react';
import {NavLink} from "react-router-dom";

import loginPage from './loginPage.module.css';

import logo from '../../assets/logo.svg'

const LoginPage = (props) => {
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
                <p className={loginPage.title}>Данные для входа</p>
                <div className={loginPage.inputsWrapper}>
                    <input type="login" placeholder="Логин*"/>
                    <input type="password" placeholder="Пароль*"/>
                </div>
                <div className={loginPage.buttons}>
                    <div className={loginPage.forgot}>
                         <NavLink to="/lostPass">Не помню пароль</NavLink>
                    </div>
                    <div className={loginPage.toLogin}>Войти в систему<span className={loginPage.arrowIcon}></span></div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
