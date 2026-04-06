import CalendarDay from "./CalendarDay"

const CalendarGrid = ({ date, tasks }) => {
    const year = date.getFullYear()
    const month = date.getMonth()

    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()

    const days = []

    // сдвиг (чтобы неделя начиналась нормально)
    const startOffset = firstDay === 0 ? 6 : firstDay - 1

    for (let i = 0; i < startOffset; i++) {
        days.push(null)
    }

    for (let i = 1; i <= daysInMonth; i++) {
        days.push(new Date(year, month, i))
    }

    return (
        <div className="calendar-grid">
            {days.map((day, index) => (
                <CalendarDay key={index} day={day} tasks={tasks} />
            ))}
        </div>
    )
}

export default CalendarGrid