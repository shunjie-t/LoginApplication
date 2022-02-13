import React from 'react'
import { Link } from 'react-router-dom'

function setStorageData(nm, un, rl) {
    sessionStorage.setItem("userInfomation",JSON.stringify({
        "name" : nm,
        "username" : un,
        "role" : rl
    }));
}

function checkManager(nm,un,rl) {
    return rl === "manager" ? <div>
        <Link to="/restricted">
            <button onClick={setStorageData(nm,un,rl)} className="primary-button">Restricted</button>
        </Link>
        <Link to="/">
            <button className="primary-button">Log out</button>
        </Link></div> : 
        <Link to="/">
            <button className="primary-button">Log out</button>
        </Link>
}

export default function HomePage() {
    if(sessionStorage.length === 0) {
        window.location.replace("/")
    }
    var userInfo = sessionStorage.getItem('userInfomation');
    var name = JSON.parse(userInfo).name;
    var username = JSON.parse(userInfo).username;
    var role = JSON.parse(userInfo).role;
    return (
        <div className="text-center">
            <h1 className="main-title home-page-title">welcome!</h1>
            <h5>Name: {name}</h5>
            <h5>Username: {username}</h5>
            <h5>Role: {role}</h5>
            {checkManager(name,username,role)}
        </div>
    )
}
