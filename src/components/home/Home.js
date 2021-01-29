import React from 'react';

import loginPage from '../login/loginPage.module.css';
import home from './home.module.css';

import logo from '../../assets/logo.svg'

const Home = (props) => {
    return (
        <div className={loginPage.wrapper}>
            <div className={home.Header}>
                <div className={loginPage.headerWrapper}>
                    <div className={loginPage.logo}>
                        <img src={logo}/>
                    </div>
                    <p>Корпоративная информационная система</p>
                    <p>Добрый день!</p>
                    <div className={home.loadWrapper}>
                        <div className={home.loadRing}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;