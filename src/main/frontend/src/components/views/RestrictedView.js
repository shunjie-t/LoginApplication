import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"

export default function RestrictedPage() {
    const { t } = useTranslation()
    if(sessionStorage.length === 0) {
        window.location.replace("/")
    }
    var userInfo = sessionStorage.getItem('userInfomation');
    var name = JSON.parse(userInfo).name;
    var username = JSON.parse(userInfo).username;
    var role = JSON.parse(userInfo).role;
    var email = JSON.parse(userInfo).email;

    function setStorageData() {
        sessionStorage.setItem("userInfomation",JSON.stringify({
            "name" : name,
            "username" : username,
            "role" : role,
            "email": email
        }));
    }

    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">{t('restrictedTitle')}</h1>
            <Link to="/home">
                <button onClick={setStorageData()} className="primary-button">{t('toHomeBtn')}</button>
            </Link>
            <Link to="/">
                <button className="primary-button">{t('logoutBtn')}</button>
            </Link>
        </div>
    )
}
