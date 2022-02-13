import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import '../../App.css'

export default function SignInPage() {
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
            <h2>Sign in</h2>
            <form onSubmit={submitHandler} action="/home">
                <p>
                    <label>Username or email address</label><br/>
                    <input type="text" name="username" onChange={usernameChangeHandler} required />
                </p>
                <p>
                    <label>Password</label>
                    <br/>
                    <input type="password" name="password" onChange={passwordChangeHandler} required />
                </p>
                <Link to="/forget-password"><label className="right-label">Forget password?</label></Link>
                <br />
                <p id="login-unsuccessful">Invalid userid or password</p>
                <p>
                    <button id="sub_btn" type="submit">Login</button>
                </p>
            </form>
            <footer>
                <Link to="/register">Create an account</Link>
            </footer>
        </div>
    )
}
