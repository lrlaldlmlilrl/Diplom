import Sidebar from "../components/SideBar"
import TopBar from "../components/TopBar"
import TaskRow from "../components/TaskRow"
import "./home.css"

export default function HomePage({ user, tasks = [], navigate, setEditingTask, setIsModalOpen }) {
    const today = new Date()

    const formattedDate = today.toLocaleDateString("ru-RU", {
        weekday: "long",
        day: "numeric",
        month: "long"
    })
    const userTasks = tasks.filter(task => {
        return task.assignedTo === user.name
    })

    return (
        <div className="layout">
            <Sidebar navigate={navigate} />

            <main className="main">

                <div className="home">
                    <div className="home-header">
                        <h1>Привет, {user?.name || "Пользователь"} 👋</h1>
                        <p>{formattedDate}</p>
                    </div>

                    <TopBar onOpenModal={() => {
                        setEditingTask(null)
                        setIsModalOpen(true)
                    }} />

                    <div className="home-tasks">
                        <h2>Все задачи</h2>

                        <div className="task-list">
                            {userTasks.map(task => (
                                <TaskRow key={task.id} task={task} />
                            ))}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}