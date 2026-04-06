export default function TopBar({ onOpenModal }) {
    return (
        <div className="topbar">
            <h2>Доска задач</h2>

            <button className="add-board-btn" onClick={onOpenModal}>
                + Задача
            </button>
        </div>
    )
}