import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useTranslation } from "react-i18next"

import '../../App.css'

export default function SignInPage() {
    const { t } = useTranslation();
    var usernameInput;
    var passwordInput;
    sessionStorage.removeItem('userInfomation')

    function usernameChangeHandler(e) {
        usernameInput = e.target.value
        document.getElementById("login-unsuccessful").style.display = "none";
    }

    function passwordChangeHandler(e) {
        passwordInput = e.target.value
        document.getElementById("login-unsuccessful").style.display = "none";
    }
    
    function submitHandler(e) {
        e.preventDefault()
        axios.post('http://localhost:8081/api/login',{
            username: usernameInput,
            password: passwordInput
        })
        .then(response => {
            if(Object.keys(response.data).length !== 0) {
                sessionStorage.setItem("userInfomation",JSON.stringify(response.data));
                window.location.replace("/home")
            }
            else {
                document.getElementById("login-unsuccessful").style.display = "block";
            }
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="text-center m-5-auto">
            <h2>{t('signinTitle')}</h2>
            <form onSubmit={submitHandler} action="/home">
                <p>
                    <label>{t('usernameOrEmailLbl')}</label><br/>
                    <input type="text" name="username" onChange={usernameChangeHandler} required />
                </p>
                <p>
                    <label>{t('passwordLbl')}</label>
                    <br/>
                    <input type="password" name="password" onChange={passwordChangeHandler} required />
                </p>
                <div style={{height: 40}}><p id="login-unsuccessful">{t('loginFailedLbl')}</p></div>
                <p>
                    <button id="sub_btn" type="submit">{t('loginBtn')}</button>
                </p>
            </form>
            <footer>
                <Link to="/register">{t('registerLink')}</Link>
            </footer>
        </div>
    )
}
