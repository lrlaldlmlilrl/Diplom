import './App.css'
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import { Routes, Route } from "react-router-dom"
import DashboardPage from './pages/DashboardPage'
import HomePage from './pages/HomePage'
import { useState } from 'react'

function App() {

  const [user, setUser] = useState({
    name: "Радмир"
  })

  const [tasks, setTasks] = useState([
    { id: 1, title: "Сделать авторизацию", status: "todo" },
    { id: 2, title: "Настроить API", status: "inProgress" },
    { id: 3, title: "Сверстать dashboard", status: "done" }
  ])

  return (
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
          />
        } 
      />

      <Route path="*" element={<LoginPage />} />
    </Routes>
  )
}

export default App