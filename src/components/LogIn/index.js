import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import './LogIn.scss'

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
            navigate('/')
        } else {
            setError(true)
        }
    }


    return(
        <>
            <main className='log_in_main'>
                <div className='log_in_block'>
                    <h1 className='log_in_title'>Test login in DOTABUFF</h1>
                    <div className='input_log_in_block'>
                        <input type='text' className='log_in_name' onChange={onChangeLogInName} placeholder='login name'></input>
                        <input type='text' className='log_in_password' onChange={onChangeLogInPassword} placeholder='login password'></input>
                        <button className='log_in_button' onClick={userLogIn}>Log In</button>
                        {error && <div className='looser'>U looser :)</div>}
                    </div>
                </div>
            </main>
        </>
    )
}