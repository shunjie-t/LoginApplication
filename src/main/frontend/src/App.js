import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import i18n from "i18next"
import { useTranslation, initReactI18next } from "react-i18next"
import LanguageDetector from 'i18next-browser-languagedetector'
import i18next from 'i18next'

import LoginView from './components/views/LoginView'
import RegisterView from './components/views/RegisterView'
import HomeView from './components/views/HomeView'
import RestrictedView from './components/views/RestrictedView'

import './App.css'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
        en: {
            translation: {
                "signinTitle": "Sign in",
                "usernameOrEmailLbl": "Username or email address",
                "usernameLbl": "Username",
                "nameLbl": "Name",
                "roleLbl": "Role",
                "emailLbl": "Email address",
                "passwordLbl": "Password",
                "loginBtn": "Login",
                "loginFailedLbl": "Invalid userid or password",
                "registerBtn": "Register",
                "toLoginLink": "Back to login",
                "registerLink": "Create account",
                "registerTitle": "Create your account",
                "homeTitle": "Welcome!",
                "restrictedBtn": "Restricted page",
                "logoutBtn": "Logout",
                "restrictedTitle": "Manager's restricted page",
                "toHomeBtn": "homepage",
                "editProfileTitle": "Edit your profile details"
            }
        },
        zh: {
            translation: {
                "signinTitle": "登入",
                "usernameOrEmailLbl": "用户名或电邮地址",
                "usernameLbl": "用户名",
                "nameLbl": "名字",
                "roleLbl": "角色",
                "emailLbl": "电邮地址",
                "passwordLbl": "密码",
                "loginBtn": "登入",
                "loginFailedLbl": "無效的用戶名或密碼",
                "registerBtn": "登记",
                "toLoginLink": "回到登入",
                "registerLink": "创建账户 ",
                "registerTitle": "创建您的帐户",
                "homeTitle": "欢迎！",
                "restrictedBtn": "受限页面",
                "logoutBtn": "登出",
                "restrictedTitle": "经理的受限页面",
                "toHomeBtn": "主页",
                "editProfileTitle": "编辑您的帐户详细信息"
            }
        }
    },
    fallbackLng: "en",
    detection: {
        order: ['cookie', 'htmlTag', 'localStorage', 'path', 'subdomain'],
        cache: ['cookie']
    }
  });

const languages = [
    {
        code: 'en',
        name: 'English'
    },
    {
        code: 'zh',
        name: '简体中文'
    }
]

export default function App() {
    return (
        <Router>
            <div>
                <Header />
                <Switch>
                    <Route exact path="/" component={ LoginView } />
                    <Route path="/register" component={ RegisterView } />
                    <Route path="/home" component={ HomeView } />
                    <Route path="/restricted" component={ RestrictedView } />
                </Switch>
            </div>
        </Router>
    )
}

const Header = () => {
    return (
        <div style={HeaderStyle}>
            <div style={floatRight}>
                <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M13 2.04932C13 2.04932 16 5.99994 16 11.9999C16 17.9999 13 21.9506 13 21.9506" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M11 21.9506C11 21.9506 8 17.9999 8 11.9999C8 5.99994 11 2.04932 11 2.04932" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.62964 15.5H21.3704" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M2.62964 8.5H21.3704" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <select style={dropdown}>
                    {languages.map(({code, name}) => (
                        <option value={code} onClick={() => {i18next.changeLanguage(code)}}>{name}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

const HeaderStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    top: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
}

const dropdown = {
    marginLeft: 6,
    marginRight:20,
    height: 25
}

const floatRight = {
    float: "right"
}