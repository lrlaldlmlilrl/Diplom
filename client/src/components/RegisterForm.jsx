import React from 'react';
import {useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';


export default function RegisterForm() {
    const[formData, setFormData] = useState({
        login:"",
        password:"",
        firstName:"",
        lastName:"",
        phone:"",
    })  

    const[errors, setErrors] = useState({
        login:"",
        password:"",
        firstName: "",
        lastName: "",
        phone:"",
    })

    const[showPassword, setShowPassword] = useState(false)

    const loginPattern = /^[A-Za-z0-9]+$/;
    const passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    const namePattern = /^[А-Яа-яЁё]+$/;
    const phonePattern = /^8\d{10}$/;

    const validate = (fieldName, value) => {
        let error = "";
        
        switch(fieldName) {
            case "login":
                if (!loginPattern.test(value)) {
                    error = "Некорректный логин";
                }
                break;
            case "password":
                if (!passwordPattern.test(value)) {
                    error = "Пароль должен быть не менее 6 символов и иметь цифры и буквы";
                }
                break;
            case "firstName":
            case "lastName":
                if (!namePattern.test(value)) {
                    error = "Только кириллица";
                }
                break;
            case "phone":
                if (!phonePattern.test(value)) {
                    error = "Некорректный телефон";
                }
                break;
        }
        
        setErrors(prev => ({...prev, [fieldName]: error}));
    }
    

    const navigate = useNavigate();

    const handleSubmit = (event) =>{
        event.preventDefault()

        const hasErrors = Object.values(errors).some(error => error !== "");

        const hasEmptyFields = Object.values(formData).some(value => !value);

        if (hasErrors || hasEmptyFields) {
            alert("Заполните все поля корректно!");
            return;
        }

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
    

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData(prev => ({...prev, [name]: value}));

        validate(name, value);
    }

    return (
        <form onSubmit={handleSubmit}>
            {errors.login && <span className="error">{errors.login}</span>}
            <input
                type="text"
                name="login"
                placeholder="Логин"
                value={formData.login}
                onChange={handleChange}
                required
            />
            {errors.password && <span className="error">{errors.password}</span>}
            <div className="passwordWrapper">
                <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder="Пароль"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                <button
                    className="passwordButton"
                    type="button"
                    onClick={() => setShowPassword(prev => !prev)}
                >
                    "👁"
                </button>
            </div>
            {errors.firstName && <span className="error">{errors.firstName}</span>}
            <input
                type="text"
                name="firstName"
                placeholder="Имя"
                value={formData.firstName}
                onChange={handleChange}
                required
            />
            {errors.lastName && <span className="error">{errors.lastName}</span>}
            <input
                type="text"
                name="lastName"
                placeholder="Фамилия"
                value={formData.lastName}
                onChange={handleChange}
                required
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
            <input
                type="tel"
                name="phone"
                placeholder="89010973385    "
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