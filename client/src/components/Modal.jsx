import { useState } from "react"

export default function Modal({ isOpen, onClose, onAddTask }) {
    const[task, setTask] = useState({
        title:"",
        status:"todo",
    })

    const handleChange = (event) =>{
        setTask(prev => ({
            ...prev,
            [event.target.name]: event.target.value
            })
        )
    }
    const handleSubmit = (event) =>{
        event.preventDefault()
        onAddTask(task)
        setTask({title:"",status:"todo"})
        onClose()
        // fetch("api/newTask", {
        //     method:"POST",
        //     headers:{ 'Content-Type': 'application/json' },
        //     credentials: "include",
        //     body:JSON.stringify({
        //         taskName: taskName
        //     })
        // })
    }

    if (!isOpen) return null

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div 
                className="modal"
                onClick={(e) => e.stopPropagation()}
            >
                <h2>Создание задачи</h2>
                <form onSubmit={handleSubmit}>
                    <input 
                        placeholder="Название" 
                        name="title" 
                        value={task.title} 
                        onChange={handleChange} 
                    />

                    <button type="submit">Создать</button>
                    <button type="button" onClick={onClose}>Закрыть</button>
                </form>
                
            </div>
        </div>
    )
}