import RegisterForm from "../components/RegisterForm"


export default function RegisterPage() {
    return (
        <div className="auth-page">
            <div className="auth-card">
                <h1>SoftAlert</h1>
                <h2>Регистрация</h2>
                <RegisterForm />
            </div>
        </div>
    )
}
