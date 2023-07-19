import React, { useState } from 'react';
import '../styles/login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const submitForm = (e) => {
        e.preventDefault();
        const obj = {
            email,
            password
        }
        console.log("regg", obj)
        if (email === "") {
            setEmailError("Please Enter your Email");
        } else if (password === "") {
            setPasswordError("Please Enter Password");
        } else {
            localStorage.setItem("user_credentials", JSON.stringify(obj))
        }
    }
    return (
        <div className='container'>
            <div className='center'>
                <h1 className='registration'>Login</h1>
                <form onSubmit={submitForm}>
                    <div className='email'>
                        <span className='errorHandlers'>{emailError}</span>
                        <label htmlFor="email">Email</label>
                        <input
                            type='email'
                            id='email'
                            placeholder='Enter your Email'
                            onChange={(e) => setEmail(e.target.value)}

                        />
                    </div>

                    <div className='password'>
                        <span>{passwordError}</span>
                        <label htmlFor="password">Password</label>
                        <input
                            type='password'
                            id='password'
                            placeholder='Enter your password'
                            onChange={(e) => setPassword(e.target.value)}

                        />
                    </div>
                    <button className='button'>Submit</button>
                </form>
                <p style={{ cursor: "pointer" }} onClick={() => navigate(`/registration`)}> Don't have account? Register here</p>
            </div>
        </div>
    )
}

export default Login;