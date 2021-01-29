import React from 'react';
import {NavLink, Redirect} from "react-router-dom";
import {Field, reduxForm} from 'redux-form'
import {Input} from "../common/FormControl/FormControl";
import {required} from "../../utils/validators/validators";
import {login} from "../../redux/auth-reducer";
import {connect} from "react-redux";

import loginPage from './loginPage.module.css';

import logo from '../../assets/logo.svg'

const LoginForm = (props) => {
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
            <form onSubmit={props.handleSubmit}>{
                <div className={loginPage.main}>
                    <p className={loginPage.title}>Данные для входа</p>
                    <div className={loginPage.inputsWrapper}>
                        <Field placeholder={"Логин*"} name={"email"} validate={[required]} component={Input}/>
                        <Field placeholder={"Пароль*"} name={"password"} validate={[required]} component={Input}/>
                        {props.error && <span className={loginPage.ServerError}>
                        {props.error}
                        </span>}
                    </div>
                    <div className={loginPage.buttons}>
                        <div className={loginPage.forgot}>
                            <NavLink to="/lostPass">Не помню пароль</NavLink>
                        </div>
                        <div className={loginPage.toLogin}>
                            <button type={"submit"}>Войти в систему<span className={loginPage.arrowIcon}></span>
                            </button>
                        </div>
                    </div>
                </div>
            }
            </form>
        </div>
    );
};

const LoginFormRedux = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password);
    }

    if (props.isAuth) {
        return <Redirect to={"/home"} />
    }

    return <div>
        <LoginFormRedux onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login} )(Login);
