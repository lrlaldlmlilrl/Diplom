import { useNavigate } from "react-router-dom"

export default function Sidebar({user}) {
    const navigate = useNavigate()

    if(!user) return <p>Загрузка, перезагрузите страницу</p>

    if (user.role !== "admin") {
        return (    
            <div className="sidebar">
            <div className="sidebar-nav">
                <h2>SoftAlert</h2>
                <button onClick={() => navigate("/home")}>
                    Главная
                </button>

                <button onClick={() => navigate("/dashboard")}>
                    Канбан
                </button>

                <button onClick={() => navigate("/calendar")}>
                    Календарь
                </button>

                <button onClick={() => navigate("/profile")}>
                    Мой профиль
                </button>
            </div>
        </div>
        )
    }

    return (
        <div className="sidebar">
            <div className="sidebar-nav">
                <h2>SoftAlert</h2>
                <button onClick={() => navigate("/home")}>
                    Главная
                </button>

                <button onClick={() => navigate("/dashboard")}>
                    Канбан
                </button>

                <button onClick={() => navigate("/calendar")}>
                    Календарь
                </button>

                <button onClick={() => navigate("/admin")}>
                    Админ панель
                </button>

                <button onClick={() => navigate("/company")}>
                    Статистика компании
                </button>

                <button onClick={() => navigate("/profile")}>
                    Мой профиль
                </button>
            </div>
        </div>
    )
}