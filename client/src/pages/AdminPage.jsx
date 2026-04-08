import Sidebar from "../components/SideBar"
import TopBar from "../components/TopBar"
import UserCard from "../components/UserCard"

export default function AdminPage({ user, users, addTask }) {

    
    if (!user) return <p>Загрузка...</p>

    if(user.role !== "admin") return <p>Нет прав</p>

    return (
        <div className="layout">
            <Sidebar user={user} />

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