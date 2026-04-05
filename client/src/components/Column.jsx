import TaskCard from "./TaskCard"

export default function Column({ title,  tasks, status, changeTaskStatus }) {
  const filteredTasks = tasks.filter(task => task.status === status)
  return (
    <div className="column">
      <h3>{title}</h3>
      {filteredTasks.map(task => (
        <TaskCard 
          key={task.id}
          id={task.id}
          text={task.title}
          onChangeStatus={changeTaskStatus}
        />
      ))}
    
    </div>
  )
}