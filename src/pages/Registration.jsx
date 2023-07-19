import React, { useState } from 'react';
import '../styles/registration.css';
import { useNavigate } from 'react-router-dom';

const Registration = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [nameError, setNameError] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const submitForm = (e) => {
        e.preventDefault();
        const obj = {
            username,
            email,
            password
        }
        console.log("regg", obj)
        if (username === "") {
            setNameError("Please Enter your name");
        } else if (email === "") {
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
                <h1 className='registration'>Registration</h1>
                <form onSubmit={submitForm}>
                    <div className='username'>
                       <span className='errorHandlers'>{nameError}</span>
                        <label htmlFor="username">User Name</label>
                        <input
                            type='text'
                            id='username'
                            value={username}
                            placeholder='Enter your name'
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className='email'>
                    <span>{emailError}</span>
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
                <p style={{ cursor: "pointer" }} onClick={() => navigate(`/login`)}> Already have an account? Login here</p>
            </div>
        </div>
    )
}

export default Registration