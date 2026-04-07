import './App.css'
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import { Routes, Route } from "react-router-dom"
import DashboardPage from './pages/DashboardPage'
import HomePage from './pages/HomePage'
import { useEffect, useState } from "react"
import CalendarPage from './pages/CalendarPage'
import Modal from "./components/Modal"
import AdminPage from './pages/AdminPage'
import CompanyDashboardPage from './pages/CompanyDashboardPage'
import ProfilePage from './pages/ProfilePage'
import { getProfile } from "./services/userService"

function App() {

  const [users, setUsers] = useState([
    { id: 1, name: "Радмир", role: "admin" },
    { id: 2, name: "Иван", role: "user" },
    { id: 3, name: "Алина", role: "user" }
  ])

  const [user, setUser] = useState(null)

    useEffect(() => {
    console.log("Запрос профиля...")
    
    getProfile()
      .then((data) => {
        console.log("ПОЛУЧИЛ:", data)
        setUser(data)
      })
      .catch((err) => {
        console.error("ОШИБКА:", err)
        setUser(null)
      })
  }, [])

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingTask, setEditingTask] = useState(null)

const addTask = ({ title, status = "todo", assignedTo }) => {
    const newTask = {
      id: Date.now(),
      title,
      status,
      createdAt: Date.now(),
      assignedTo: assignedTo || user?.name
    }

    setTasks(prev => [...prev, newTask])
}
  const [tasks, setTasks] = useState([
    { id: 1, title: "Сделать авторизацию", status: "todo", createdAt: Date.now() },
    { id: 2, title: "Настроить API", status: "inProgress", createdAt: Date.now() },
    { id: 3, title: "Сверстать dashboard", status: "done", createdAt: Date.now() }
  ])

  return (<>
  {isModalOpen && (
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTask={addTask}
        onEditTask={(updatedTask) => {
          setTasks(prev =>
            prev.map(task =>
              task.id === updatedTask.id ? updatedTask : task
            )
          )
        }}
        editingTask={editingTask}
      />
    )}
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path = "/profile" element = {<ProfilePage user = {user} />} />

      <Route 
          path="/admin" 
          element={
            <AdminPage
              user={user}
              users={users}
              addTask={addTask}
            />
          }
        />
        <Route 
          path="/company" 
          element={
            <CompanyDashboardPage
              user={user}
              users={users}
              tasks={tasks}
            />
          }
        />

      <Route 
        path="/home" 
        element={
          <HomePage
            user={user}
            tasks={tasks}
            setTasks={setTasks}
            addTask={addTask}
            setEditingTask={setEditingTask}
            setIsModalOpen={setIsModalOpen}
          />
        } 
      />

      <Route 
        path="/dashboard" 
        element={
          <DashboardPage
            user={user}
            tasks={tasks}
            setTasks={setTasks}
            addTask={addTask} 
            setEditingTask={setEditingTask}
            setIsModalOpen={setIsModalOpen}
          />
        } 
      />

      <Route 
        path="/calendar" 
        element={
          <CalendarPage
            user={user}
            tasks={tasks}
            setTasks={setTasks}
            addTask={addTask}
            setEditingTask={setEditingTask}
            setIsModalOpen={setIsModalOpen}
          />
        } 
      />

      <Route path="*" element={<LoginPage />} />
    </Routes>
    </>
    
  )
}

export default App