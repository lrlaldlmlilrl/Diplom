import './App.css'
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import { Routes, Route } from "react-router-dom"
import DashboardPage from './pages/DashboardPage'
import HomePage from './pages/HomePage'
import { useState } from 'react'
import CalendarPage from './pages/CalendarPage'
import Modal from "./components/Modal"

function App() {

  const [user, setUser] = useState({
    name: "Радмир"
  })

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingTask, setEditingTask] = useState(null)

  const addTask = (title) => {
  const newTask = {
    id: Date.now(),
    title,
    status: "todo",
    createdAt: Date.now()
  }
    setTasks(prev => [...prev, newTask])
  }

   const handleAddTask = (data) => {
    const newTask = {
      id: Date.now(),
      title: data.title,
      status: data.status,
      createdAt: Date.now()
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
        onAddTask={handleAddTask}
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
    </Routes>s</>
    
  )
}

export default App