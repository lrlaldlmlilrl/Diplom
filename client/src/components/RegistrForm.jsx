import React from 'react';
import { useEffect, useState } from 'react'

export default function RegisterForm() {
    const[formData, setFormData] = useState({
        login:"",
        password:"",
        fullName:"",
        phone:"",
        email:"",
    })

    const [name, setName] = useState("");

    useEffect(()=>{
        fetch("/api/users",)
        .then((res) => {
            return res.json()
        }).then(data => {setName(data.name)})
        .catch((err) => {
            console.log("Error:", err)
        })
    }, [])
    
    

    const handleSubmit = (event) =>{
        event.preventDefault()
        fetch("/api/register", {
            method:"POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        }).then((res) => {
            return res.json()
        }).then(data => {console.log(data)})
        .catch((err) => {
            console.log("Error:", err)
        })
    }
    

    return (
        <div className='contsiner-form'>
            <form onSubmit={handleSubmit} >
                <label htmlFor="login">Введите логин</label>
                <input type="text" name="login" id="login" value={formData.login} onChange={(event)=>{
                    setFormData({
                        ...formData,
                        login:event.target.value,
                    })
                }}/>

                <label htmlFor="password">Введите пароль</label>
                <input type="password" name="password" id="password" value={formData.password} onChange={(event)=>{setFormData({
                        ...formData,
                        password:event.target.value
                    })
                }} />

                <label htmlFor="fullName">Введите ФИО</label>
                <input type="text" name="fullName" id="fullName" value={formData.fullName} onChange={(event)=>{
                    setFormData({
                        ...formData,
                        fullName:event.target.value
                    })
                }} />

                <label htmlFor="phone">Введите телефон</label>
                <input type="tel" name="phone" id="phone" value={formData.phone} onChange={(event)=>{
                    setFormData({
                        ...formData,
                        phone:event.target.value
                    })
                }} />

                <label htmlFor="email">Введите почту</label>
                <input type="email" name="email" id="email" value={formData.email} onChange={(event)=>{
                    setFormData({
                        ...formData,
                        email:event.target.value
                    })
                }} />

                <button type="submit" >Зарегестрироваться</button>

                <p>Твое имя:{name}</p>

            </form>
        </div>
    )
}