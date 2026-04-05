import Column from "./Column"

export default function KanbanBoard({tasks, onChangeStatus}) {
  return (
    <div className="kanban">
        <Column title="Новые" tasks={tasks} changeTaskStatus = {onChangeStatus} status="todo" />
        <Column title="В работе" tasks={tasks} changeTaskStatus = {onChangeStatus} status="inProgress" />
        <Column title="Готово" tasks={tasks} changeTaskStatus = {onChangeStatus} status="done" />
    </div>
  )
}