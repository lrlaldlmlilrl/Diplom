export default function TaskCard({ id, text, onChangeStatus  }) {
  return (
    <div className="task">
      {text}
      <button onClick={() => onChangeStatus(id, "inProgress")}>
        В работу
      </button>

      <button onClick={() => onChangeStatus(id, "done")}>
          Готово
      </button>
    </div>
  )
}