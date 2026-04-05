import Column from "./Column"

export default function KanbanBoard({tasks}) {
  return (
    <div className="kanban">
        <Column title="Новые" tasks={tasks} status="todo" />
        <Column title="В работе" tasks={tasks} status="inProgress" />
        <Column title="Готово" tasks={tasks} status="done" />
    </div>
  )
}