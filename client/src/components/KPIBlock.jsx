export default function KPIBlock({ title, value, danger }) {
    return (
        <div className={`kpi ${danger ? "danger" : ""}`}>
            <p>{title}</p>
            <h2>{value}</h2>
        </div>
    )
}