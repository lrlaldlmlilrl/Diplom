import React from 'react';
import {useState } from 'react'

export default function RegisterForm() {
    const[formData, setFormData] = useState({
        login:"",
        password:"",
        fullName:"",
        phone:"",
        email:"",
    })  

    const handleSubmit = (event) =>{
        event.preventDefault()
        fetch("/api/register", {
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
            credentials: "include"
        }).then((res) => {
            return res.json()
        }).then(data => {console.log(data)})
        .catch((err) => {
            console.log("Error:", err)
        })
    }
    

    const handleChange = (event) =>{
        setFormData({
            ...formData,
            [event.target.name]: event.target.value 
        })
    }

    return (
        <div className='container-form'>
            <form onSubmit={handleSubmit} >
                <label htmlFor="login">Введите логин</label>
                <input required  type="text" name="login" id="login" value={formData.login} onChange={handleChange}/>

                <label htmlFor="password">Введите пароль</label>
                <input required  type="password" name="password" id="password" value={formData.password} onChange={handleChange}/>

                <label htmlFor="fullName">Введите ФИО</label>
                <input required  type="text" name="fullName" id="fullName" value={formData.fullName} onChange={handleChange}/>

                <label htmlFor="phone">Введите телефон</label>
                <input required  type="tel" name="phone" id="phone" value={formData.phone} onChange={handleChange}/>


                <button type="submit" >Зарегистрироваться</button>

            </form>
        </div>
    )
}