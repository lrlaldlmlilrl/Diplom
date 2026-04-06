import { useState, useEffect } from "react"

export default function Modal({ isOpen, onClose, onAddTask, onEditTask, editingTask }) {
    const [title, setTitle] = useState("")

    useEffect(() => {
        if (editingTask) {
            setTitle(editingTask.title)
        } else {
            setTitle("")
        }
    }, [editingTask])

    const handleSubmit = (e) => {
        e.preventDefault()

        if (!title.trim()) return

        if (editingTask) {
            onEditTask({
                ...editingTask,
                title
            })
        } else {
            onAddTask({
                title,
                status: "todo"
            })
        }

        setTitle("")
        onClose()
    }

    if (!isOpen) return null

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <h2>
                    {editingTask ? "Редактировать задачу" : "Создать задачу"}
                </h2>

                <form onSubmit={handleSubmit}>
                    <input
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Название задачи"
                    />

                    <button type="submit">
                        {editingTask ? "Сохранить" : "Создать"}
                    </button>

                    <button type="button" onClick={onClose}>
                        Закрыть
                    </button>
                </form>
            </div>
        </div>
    )
}