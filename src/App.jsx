import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HomePage } from './Components/HomePage'
import { AcercaDePage } from './Components/AcercaDePage'
import { LoginPage } from './Components/LoginPage'
import { Routes, Route, Navigate, Link } from 'react-router-dom'
import { NavBar } from './Components/NavBar'
import { UserProvider } from './contexts/UserProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserProvider>
      <h1>Principal!!!!</h1>
      <NavBar />
      <hr />


      <Routes>
        <Route path="/" element={<HomePage valor={100} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/acerca" element={<AcercaDePage />} />
        <Route path="/*" element={<Navigate to="/about"/>} />
      </Routes>

      
    </UserProvider>
  )
}

export default App
