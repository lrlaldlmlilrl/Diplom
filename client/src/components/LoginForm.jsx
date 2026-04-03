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

        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="login"
                placeholder="Логин"
                value={formData.login}
                onChange={handleChange}
                required
            />
            <input
                type="password"
                name="password"
                placeholder="Пароль"
                value={formData.password}
                onChange={handleChange}
                required
            />
            <button type="submit">Войти</button>
            <p>
                Нет аккаунта? <Link to="/register">Регистрация</Link>
            </p>
        </form>

    )
}