import { useState } from "react"

export default function UserCard({ user, onAssignTask }) {
    const [title, setTitle] = useState("")

    const handleAssign = () => {
        if (!title.trim()) return

        onAssignTask({
            title,
            assignedTo: user.name
        })
        setTitle("")
    }

    return (
        <div className="user-card">
            <h3>{user.name}</h3>

            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Новая задача"
            />

            <button onClick={handleAssign}>
                Назначить
            </button>
        </div>
    )
}