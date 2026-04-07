import Sidebar from "../components/SideBar"
import TopBar from "../components/TopBar"
import KPIBlock from "../components/KPIBlock"
import EmployeeList from "../components/EmployeeList"
import "./company.css"

export default function CompanyDashboardPage({ user, tasks, users }) {

    if (!user) return <p>Загрузка...</p>

    if(user.role !== "admin") {return <p>Нет прав</p>}

    const activeTasks = tasks.filter(t => t.status !== "done").length
    const completed = tasks.filter(t => t.status === "done").length
    const overdue = 0
    const employees = users.length

    const inProgress = tasks.filter(t => t.status === "inProgress").length
    const completedToday = tasks.filter(t => t.status === "done").length

    return (
        <div className="layout">
            <Sidebar />

            <main className="main">

                <div className="company">
                    <h1>Статистика компании</h1>

                    <div className="kpi-row">
                        <KPIBlock title="Задачи в работе" value={activeTasks} />
                        <KPIBlock title="Выполненые" value={completed} />
                        <KPIBlock title="Просроченные" value={overdue} danger />
                        <KPIBlock title="Кол-во сотрудников" value={employees} />
                    </div>

                    <div className="company-content">

                        <div className="company-left">

                            <div className="card">
                                <h3>Информация компании</h3>
                                <p>Название: Ашкадарский</p>
                                <p>Специализация: Сельское хозяйство</p>
                                <p>Основан: 2023</p>
                            </div>

                            <div className="card">
                                <h3>Статистика на сегодня</h3>
                                <p>В процессе: {inProgress}</p>
                                <p>Выполнены сегодня: {completedToday}</p>
                                <p className="danger">
                                    Просрочено: {overdue}
                                </p>
                            </div>

                        </div>

                        <EmployeeList users={users} />

                    </div>
                </div>
            </main>
        </div>
    )
}