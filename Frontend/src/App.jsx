import { useState } from 'react'
import {Routes, Route, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Login from './pages/Login'
import { useAuthContext } from './context/AuthContext'

function App() {
  const {currentUser} = useAuthContext()
  return (
    <Routes>
      <Route path='/' element={currentUser ? <Home/> : <Navigate to='/login'/> }/>
      <Route path='/signup' element={currentUser ? <Navigate to='/' /> : <Signup/>}/>
      <Route path='/login' element={currentUser ? <Navigate to='/'/> : <Login/>}/>
    </Routes>
  )
}

export default App
