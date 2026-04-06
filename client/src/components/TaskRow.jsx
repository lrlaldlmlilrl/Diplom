const TaskRow = ({ task }) => {
    const getStatusText = (status) => {
        switch (status) {
            case "todo":
                return "Новая"
            case "inProgress":
                return "В работе"
            case "done":
                return "Готово"
            default:
                return ""
        }
    }

    return (
        <div className="task-row">
            <p>{task.title}</p>

            <span className={`status-badge ${task.status}`}>
                {getStatusText(task.status)}
            </span>
        </div>
    )
}

export default TaskRow