const CalendarDay = ({ day, tasks }) => {
    if (!day) return <div className="calendar-day empty"></div>

    const dayTasks = tasks.filter(task => {
        const taskDate = new Date(task.createdAt) 
        return (
            taskDate.getDate() === day.getDate() &&
            taskDate.getMonth() === day.getMonth() &&
            taskDate.getFullYear() === day.getFullYear()
        )
    })

    return (
        <div className="calendar-day">
            <div className="day-number">{day.getDate()}</div>

            <div className="day-tasks">
                {dayTasks.slice(0, 2).map(task => (
                    <div key={task.id} className={`mini-task ${task.status}`}>
                        {task.title}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CalendarDay