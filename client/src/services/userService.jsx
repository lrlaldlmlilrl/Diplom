const API = "http://localhost:3000/api"

export const getProfile = async () => {
    const res = await fetch(`${API}/profile`, {
        credentials: "include"
    })

    if (!res.ok) throw new Error("Ошибка")

    return res.json()
}