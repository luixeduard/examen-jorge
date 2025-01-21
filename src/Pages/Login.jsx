import React from 'react'
import { useEffect, useState } from "react";
import { BrowserRouter, Router, Route, Link, browserHistory, IndexRoute, Routes, useNavigate } from "react-router";


export default function Login() {

    let navigate = useNavigate();

    const [text, setText] = useState("");
    const [pass, setPass] = useState("");
    const [message, setMess] = useState("");
    const [store, setStore] = useState();
    const [error, setError] = useState("");

    const getText = (e) => {
        setText(e.target.value);
    }

    const getPass = (event) => {
        setPass(event.target.value);

    }

    useEffect(() => {
        localStorage.setItem("token", text);
    }, [store])



    const verificationLog = () => {
        const regex = /[a-zA-Z]/;
        const found = text.match(regex);
        setStore(text);
        alert(found);
        if (found && text != null && pass != null) {
            navigate('/Welcome', { replace: true });
            setMess("");
        } else {
            setError("Error");
            setMess("Verificar datos de entrada");
        }
    }



    return (
        <div>
            <div className='Login'>
                <div>
                    <h1>LOGIN</h1>
                </div>
                <div>
                    <div>
                        <label htmlFor=""><b>User: </b></label>
                        <input type="text" name="" id="" onChange={getText} value={text}/>
                    </div>
                    <div>
                        <label htmlFor=""><b>Password: </b></label>
                        <input type="password" onChange={getPass} value={pass}/>
                        <button onClick={verificationLog} >Login</button>
                        <label htmlFor="" className={error}>{message}</label>
                    </div>
                </div>
            </div>
        </div>
    )
}
