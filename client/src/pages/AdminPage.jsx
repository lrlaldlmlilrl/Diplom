import Sidebar from "../components/SideBar"
import TopBar from "../components/TopBar"
import UserCard from "../components/UserCard"

export default function AdminPage({ user, users, addTask }) {

    
    if (user.role !== "admin") {
        return <p>Нет доступа</p>
    }

    return (
        <div className="layout">
            <Sidebar />

            <main className="main">

                <div className="admin">
                    <h2>Пользователи</h2>

                    <div className="user-list">
                        {users.map(u => (
                            <UserCard 
                                key={u.id}
                                user={u}
                                onAssignTask={addTask}
                            />
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}