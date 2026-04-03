import LoginForm from "../components/LoginForm"


export default function LoginPage() {
    return (
        <div className="auth-page">
            <div className="auth-card">
                <h1>SoftAlert</h1>
                <h2>Вход в систему</h2>
                <LoginForm />
            </div>
        </div>
    )
}