import React from 'react'
import { Box } from '@mui/material'
import { BrowserRouter,Routes,Route,Link } from 'react-router-dom'
import Home from './Pages/Home'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<LoginForm/>}/>

      

    </Routes>
    </BrowserRouter>
    </>
   
    
  )
}

export default App
