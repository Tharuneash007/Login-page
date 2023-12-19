import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './components/LoginPage'
import Home from './components/Home'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<LoginPage />} />
      <Route path='/home' element={<Home />} />
    </Routes>
  )
}

export default App