import './App.css'
import RegisterPage from "./pages/RegisterPage"
import LoginPage from "./pages/LoginPage"
import { Routes, Route } from "react-router-dom"
import DashboardPage from './pages/DashboardPage'


function App() {
  return (
    <div>
      <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<LoginPage />} />
      <Route path='/dashboard' element ={<DashboardPage />} />
    </Routes>
    </div>
     
  )
  
}

export default App;
