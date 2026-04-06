export default function TaskCard({ id, title, status, onChangeStatus, onDelete, onEdit }) {
    return (
        <div className="task">
            <p>{title}</p>

            <div className="actions">
                {status === "todo" && (
                    <button onClick={() => onChangeStatus(id, "inProgress")}>
                        В работу
                    </button>
                )}

                {status === "inProgress" && (
                    <button onClick={() => onChangeStatus(id, "done")}>
                        Готово
                    </button>
                )}

                <button onClick={onEdit}>✏️</button>
                <button onClick={() => onDelete(id)}>❌</button>
            </div>
        </div>
    )
}