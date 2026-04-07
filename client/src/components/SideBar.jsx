import { useNavigate } from "react-router-dom"

export default function Sidebar() {
    const navigate = useNavigate()

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