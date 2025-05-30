import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import { InputAdornment,TextField } from '@mui/material'
import EmployeeForm from './EmployeeForm'
import Home from './Home'

function App() {
  return (
    <div>
     <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/employee' element={<EmployeeForm/>}/>
  </Routes>
</BrowserRouter>

    </div>
  )
}

export default App
