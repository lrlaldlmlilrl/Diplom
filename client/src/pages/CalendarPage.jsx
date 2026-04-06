import Sidebar from "../components/SideBar"
import TopBar from "../components/TopBar"
import CalendarGrid from "../components/CalendarGrid"
import { useState } from "react"
import "./calendar.css"

export default function CalendarPage({ tasks, setEditingTask, setIsModalOpen }) {
    const [currentDate, setCurrentDate] = useState(new Date())

    return (
        <div className="layout">
            <Sidebar />

            <main className="main">
                <TopBar onOpenModal={() => {
                    setEditingTask(null)
                    setIsModalOpen(true)
                }} />

                <div className="calendar">
                    <div className="calendar-header">
                        <h2>
                            {currentDate.toLocaleDateString("ru-RU", {
                                month: "long",
                                year: "numeric"
                            })}
                        </h2>
                    </div>

                    <CalendarGrid date={currentDate} tasks={tasks} />
                </div>
            </main>
        </div>
    )
}