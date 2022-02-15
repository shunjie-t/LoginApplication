import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"

export default function HomePage() {
    const { t } = useTranslation()
    if(sessionStorage.length === 0) {
        window.location.replace("/")
    }
    var userInfo = sessionStorage.getItem('userInfomation')
    var name = JSON.parse(userInfo).name
    var username = JSON.parse(userInfo).username
    var role = JSON.parse(userInfo).role
    var email = JSON.parse(userInfo).email

    function setStorageData() {
        sessionStorage.setItem("userInfomation",JSON.stringify({
            "name" : name,
            "username" : username,
            "role" : role,
            "email": email
        }))
    }
    
    function checkManager() {
        return role === "manager" ? <div>
            <Link to="/restricted">
                <button onClick={setStorageData()} className="primary-button">{t('restrictedBtn')}</button>
            </Link>
            <Link to="/">
                <button className="primary-button">{t('logoutBtn')}</button>
            </Link></div> : 
            <Link to="/">
                <button className="primary-button">{t('logoutBtn')}</button>
            </Link>
    }

    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">{t('homeTitle')}</h1>
            <h5>{t('nameLbl')}: {name}</h5>
            <h5>{t('usernameLbl')}: {username}</h5>
            <h5>{t('roleLbl')}: {role}</h5>
            <h5>{t('emailLbl')}: {email}</h5>
            {checkManager()}
        </div>
    )
}
