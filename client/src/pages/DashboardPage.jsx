import Sidebar from "../components/SideBar"
import TopBar from "../components/TopBar"
import KanbanBoard from "../components/KanbanBoard"
import Modal from "../components/Modal"
import { useState } from "react"

export default function DashboardPage() {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => setIsModalOpen(true)
    const closeModal = () => setIsModalOpen(false)

    const [tasks, setTasks] = useState([])

    const addTask = (task) => {
        const newTask = {
            ...task,
            id: Date.now()
        }

        setTasks(prev => [...prev, newTask])
    }

    const changeTaskStatus = (id, newStatus) => {
    setTasks(prev =>
        prev.map(task => {
            if (task.id === id) {
                return { ...task, status: newStatus }
            }
            return task
        })
    )
}

    return (
        <div className="layout">
            <Sidebar />

            <main className="main">
                <TopBar onOpenModal={openModal} />
                <KanbanBoard 
                    tasks = {tasks}    
                    onChangeStatus = {changeTaskStatus}
                />

                <Modal 
                    isOpen={isModalOpen} 
                    onClose={closeModal} 
                    onAddTask = {addTask}
                />
            </main>
        </div>
    )
}