import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import './LogIn.css'

export default function LogIn() {

    const [logInName, setLogInName] = useState('')
    const [logInPassword, setloginPassword] = useState('')
    const [error, setError] = useState(false)
    const navigate = useNavigate();

    const onChangeLogInName = (e) => {
        setLogInName(e.target.value)
        setError(false)
        error && setLogInName('')
    }

    const onChangeLogInPassword = (e) => {
        setloginPassword(e.target.value)
        setError(false)
        error && setloginPassword('')
    }

    const userLogIn = () => {
        if (logInName === localStorage.name && logInPassword === localStorage.password) {
            navigate('/heroes')
        } else {
            setError(true)
        }
    }


    return(
        <>
            <div className='log_in'>
                <input onChange={onChangeLogInName}></input>
                <input onChange={onChangeLogInPassword}></input>
                <button onClick={userLogIn}>Log In</button>
                {error && <div>U looser</div>}
            </div>
        </>
    )
}