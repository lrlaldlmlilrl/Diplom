import React from 'react';
import {useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


export default function RegisterForm() {
    const[formData, setFormData] = useState({
        login:"",
        password:"",
        fullName:"",
        phone:"",
        email:"",
    })  
    const navigate = useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault()
        fetch("/api/register", {
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
            credentials: "include"
        })
        .then(res => {
            if (!res.ok){
                throw new Error("Ошибка регистрации")
            } else {
                return res
            }
        })
        .then(() => {
            navigate("/login", {replace: true})
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

            <input
                type="text"
                name="fullName"
                placeholder="ФИО"
                value={formData.fullName}
                onChange={handleChange}
                required
            />

            <input
                type="tel"
                name="phone"
                placeholder="Телефон"
                value={formData.phone}
                onChange={handleChange}
                required
            />

            <button type="submit">Зарегистрироваться</button>

            <p>
                Уже есть аккаунт? <Link to="/login">Войти</Link>
            </p>
        </form>
    )
}