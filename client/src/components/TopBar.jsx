import DashboardPage from "../pages/DashboardPage"

export default function TopBar({ onOpenModal }) {
    return (
        <div className="topbar">
            <h1>Dashboard</h1>

            <div className="actions">
                <button onClick={onOpenModal}>
                    + Задача
                </button>
            </div>
        </div>
    )
}