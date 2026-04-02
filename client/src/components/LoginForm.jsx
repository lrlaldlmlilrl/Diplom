import React from 'react';
import {useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';



export default function LoginForm() {
    const[formData, setFormData] = useState({
        login:"",
        password:"",
    })  

    const navigate = useNavigate()

    const handleSubmit = (event) =>{
        event.preventDefault()
        fetch("/api/login", {
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
            credentials: "include"
        }).then((res) => {
            if (!res.ok) {
                throw new Error("Ошибка авторизации")
            }
            navigate("/dashboard", {replace: true})
            
        })
        .catch((err) => {
            console.log("Error:", err)
        })
    }
    

    const handleChange = (event) =>{
        setFormData(prev => ({
            ...prev,
            [event.target.name]: event.target.value 
        }))
    }

    return (

        <div className='container-form'>
        <form onSubmit={handleSubmit} >
            <label htmlFor="login">Введите логин</label>
            <input required  type="text" name="login" id="login" value={formData.login} onChange={handleChange}/>

            <label htmlFor="password">Введите пароль</label>
            <input required  type="password" name="password" id="password" value={formData.password} onChange={handleChange}/>

            
            <button type="submit" >Войти</button>

            <Link to="/register">Регистрация</Link>
        </form>
        </div>

    )
}