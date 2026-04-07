import Sidebar from "../components/SideBar"
import TopBar from "../components/TopBar"
import KanbanBoard from "../components/KanbanBoard"
import Modal from "../components/Modal"
import { useState } from "react"

export default function DashboardPage({ tasks, setTasks, navigate, addTask }) {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [editingTask, setEditingTask] = useState(null)

    const deleteTask = (id) => {
        setTasks(prev => prev.filter(task => task.id !== id))
    }

    const editTask = (updatedTask) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === updatedTask.id ? updatedTask : task
            )
        )
    }


    const changeTaskStatus = (id, newStatus) => {
        setTasks(prev =>
            prev.map(task =>
                task.id === id
                    ? { ...task, status: newStatus }
                    : task
            )
        )
    }

    return (
        <div className="layout">
            <Sidebar navigate={navigate} />

            <main className="main">
                <TopBar onOpenModal={() => {
                    setEditingTask(null)
                    setIsModalOpen(true)    
                }} />

                <KanbanBoard
                    tasks={tasks}
                    onChangeStatus={changeTaskStatus}
                    onDelete={deleteTask}
                    onEdit={(task) => {
                        setEditingTask(task)
                        setIsModalOpen(true)
                    }}
                />

                <Modal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onAddTask={addTask}
                    onEditTask={editTask}
                    editingTask={editingTask}
                />
            </main>
        </div>
    )
}