import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from "react-i18next"

import '../../App.css'

export default function SignUpPage() {
    const { t } = useTranslation()

    return (
        <div className="text-center m-5-auto">
            <h5>{t('registerTitle')}</h5>
            <form action="/home">
                <p>
                    <label>{t('nameLbl')}</label><br/>
                    <input type="text" name="name" required />
                </p>
                <p>
                    <label>{t('usernameLbl')}</label><br/>
                    <input type="text" name="username" required />
                </p>
                <p>
                    <label>{t('emailLbl')}</label><br/>
                    <input type="email" name="email" required />
                </p>
                <p>
                    <label>{t('passwordLbl')}</label><br/>
                    <input type="password" name="password" requiredc />
                </p>
                <p>
                    <button id="sub_btn" type="submit">{t('registerBtn')}</button>
                </p>
            </form>
            <footer>
                <p><Link to="/">{t('toLoginLink')}</Link></p>
            </footer>
        </div>
    )
}
