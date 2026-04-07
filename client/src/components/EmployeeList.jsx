import { useState } from "react"

export default function EmployeeList({ users }) {
    const [selected, setSelected] = useState(users[0]?.id)

    return (
        <div className="employees card">
            <h3>Сотрудники</h3>

            {users.map(user => (
                <div
                    key={user.id}
                    className={`employee ${selected === user.id ? "active" : ""}`}
                    onClick={() => setSelected(user.id)}
                >
                    {user.name} — {user.role}
                </div>
            ))}
        </div>
    )
}