import React from 'react'
import { Link } from 'react-router-dom'

function setStorageData(nm, un, rl) {
    sessionStorage.setItem("userInfomation",JSON.stringify({
        "name" : nm,
        "username" : un,
        "role" : rl
    }));
}

export default function RestrictedPage() {
    if(sessionStorage.length === 0) {
        window.location.replace("/")
    }
    var userInfo = sessionStorage.getItem('userInfomation');
    var name = JSON.parse(userInfo).name;
    var username = JSON.parse(userInfo).username;
    var role = JSON.parse(userInfo).role;
    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">Manager's restricted page</h1>
            <Link to="/home">
                <button onClick={setStorageData(name,username,role)} className="primary-button">Back to home</button>
            </Link>
            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
        </div>
    )
}
