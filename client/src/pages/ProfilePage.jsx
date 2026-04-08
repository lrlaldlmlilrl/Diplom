import Sidebar from "../components/SideBar"
import TopBar from "../components/TopBar"
import "./profile.css"

export default function ProfilePage({ user }) {

    if (!user) return <p>Загрузка...</p>

    return (
        <div className="layout">
            <Sidebar user={user}/>

            <main className="main">

                <div className="profile-page">

                    <div className="profile-card">

                        <div className="profile-header">
                            <div className="avatar">
                                {/* SVG аватар */}
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="none">
                                    <circle cx="12" cy="8" r="4" fill="#2563EB"/>
                                    <path 
                                        d="M4 20C4 16.6863 7.58172 14 12 14C16.4183 14 20 16.6863 20 20" 
                                        fill="#2563EB"
                                    />
                                </svg>
                            </div>

                            <div>
                                <h2>{user.fullName}</h2>
                                <p className="role">{user.login}</p>
                            </div>
                        </div>

                        <div className="profile-info">
                            <div className="info-row">
                                <span>Логин</span>
                                <span>{user.login}</span>
                            </div>

                            <div className="info-row">
                                <span>Имя</span>
                                <span>{user.fullName}</span>
                            </div>

                            <div className="info-row">
                                <span>Телефон</span>
                                <span>{user.phone}</span>
                            </div>
                            <div className="info-row">
                                <span>Роль</span>
                                <span>{user.role}</span>
                            </div>
                        </div>

                    </div>

                </div>
            </main>
        </div>
    )
}