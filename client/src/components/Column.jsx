import TaskCard from "./TaskCard"

export default function Column({ title,  tasks, status }) {
    const filteredTasks = tasks.filter(task =>{task.status === status})
  return (
    <div className="column">
      <h3>{title}</h3>
      {filteredTasks.map((task) =>{
        
      })}
      <TaskCard text="Сделать авторизацию" />
      <TaskCard text="Создать API" />
    </div>
  )
}