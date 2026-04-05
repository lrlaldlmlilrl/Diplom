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

    const addTask = (taskName) =>{
        setTasks(prev => [...prev, taskName])
    }
    return (
        <div className="layout">
            <Sidebar />

            <main className="main">
                <TopBar onOpenModal={openModal} />
                <KanbanBoard 
                    tasks = {tasks}    
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