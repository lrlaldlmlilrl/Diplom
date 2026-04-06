import TaskCard from "./TaskCard"

export default function Column({ title, tasks, status, onChangeStatus, onDelete, onEdit    }) {
    const filteredTasks = tasks.filter(task => task.status === status)

    return (
        <div className="column">
            <h3>{title}</h3>

            {filteredTasks.map(task => (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  title={task.title}
                  status={task.status}
                  onChangeStatus={onChangeStatus}
                  onDelete={onDelete}
                  onEdit={() => onEdit(task)}
              />
            ))}
        </div>
    )
}